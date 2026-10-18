const assert=require('node:assert/strict');
const R=require('../raid-engine.js'),T=require('../raid-travel.js'),S=require('../raid-hero-sites.js'),H=require('../raid-champions.js');
T.install(R,null,null,H);S.install(R);T.decorate(R);
const offer=city=>S.offer(city,[H.choices(city)[0]],R),pool=city=>[...offer(city),...T.encounters(city,R)].map(c=>c.id);
const ids=offer('osaka').slice(0,3).map(c=>c.id);
let b=R.battle(ids,'osaka',0,'osaka',1,pool('osaka'));
assert.equal(b.mana,5);assert.deepEqual(b.hand.map(c=>c.id),ids);assert.equal(b.hand.length+b.draw.length,11);
assert(!R.legalDraft('osaka',[ids[0],ids[0],ids[1]]));assert(!R.legalDraft('osaka',[...ids.slice(0,2),'kyoto-0']));
const card=b.hand[0];assert(R.play(b,card.uid));assert(!R.play(b,card.uid));R.end(b);assert.equal(b.maxMana,6);assert.equal(b.turn,2);
// Save/resume must preserve enemy forecast, damage, draws and deterministic outcomes.
const resumed=JSON.parse(JSON.stringify(b));const forecast=R.event(b);R.end(b);R.end(resumed);assert.deepEqual(b,resumed);assert.equal(b.last.event,forecast.name);
// Even a huge army cannot end the fight in its first two turns.
b=R.battle(ids,'osaka',0,'osaka',1,pool('osaka'));b.board=[{id:'osaka-0',uid:'x',hp:999,maxHP:999}];b.enemyHP=1;R.end(b);assert.equal(b.enemyHP,1);R.end(b);assert.equal(b.result,null);R.end(b);assert.equal(b.result,'win');
// Exhausted cards never return from discard, and old copies are removed on migration.
b=R.battle(['osaka-0'],'osaka',0,'osaka',1);R.play(b,b.hand[0].uid);for(let t=0;t<30&&!b.result;t++)R.end(b);assert.equal(b.result,'lose');assert.equal(b.exhausted,true);assert.equal(b.hand.length+b.draw.length,0);
const legacy={city:'osaka',board:[{id:'osaka-0'}],hand:[{id:'osaka-0'},{id:'kyoto-0'},{id:'osaka-1'}],draw:[{id:'osaka-1'}],discard:[{id:'osaka-3'}]};R.migrateUnique(legacy);assert.equal(legacy.hand.length,1);assert.equal(legacy.draw.length,0);assert.deepEqual(legacy.played,['osaka-0','osaka-3']);
// Taunt protects the player; events heal immediately and cannot be played at full health.
b=R.battle(['osaka-0'],'osaka',0,'osaka',1);R.play(b,b.hand[0].uid);const hp=b.hp;R.end(b);assert.equal(b.hp,hp);assert(b.last.blocked);
b=R.battle(['osaka-enc-1'],'osaka',0,'osaka',1);assert(!R.canPlay(b,b.hand[0].uid));b.hp=10;assert(R.play(b,b.hand[0].uid));assert.equal(b.hp,20);assert.equal(b.board.length,0);
// A respite retains damage already dealt to the boss and gives a new unique local ally.
b.result='lose';b.enemyHP=30;b.hp=0;assert(R.recover(b,'osaka-rest-2'));assert.equal(b.enemyHP,30);assert.equal(b.hp,20);assert.equal(b.result,null);b.result='lose';assert(!R.recover(b,'osaka-rest-2'));assert(!R.recover(b,'kyoto-rest-0'));
// Interests create real forecasted mechanics, including a once-per-turn budget hit.
b=R.battle(ids,'osaka',0,'osaka',1,pool('osaka'),['shopping']);b.enemyHand=[10,5,6];assert.equal(R.event(b).budgetCost,1200);R.end(b);assert.equal(b.last.budgetDamage,1200);assert.equal(b.last.round,1);assert.equal(b.mana,b.maxMana-1);
// Every city and draft terminates; cards stay local and unique through battle and respite.
let fights=0,wins=0;
for(const city of Object.keys(R.cities)){const cards=offer(city).map(c=>c.id);for(let a=0;a<3;a++)for(let c=a+1;c<4;c++)for(let d=c+1;d<5;d++){
 const fight=R.battle([cards[a],cards[c],cards[d]],city,0,'osaka',19,pool(city),['walk','temples']);let rests=0;
 for(let t=0;t<80&&fight.result!=='win';t++){
  if(fight.result==='lose'){const rest=T.restOptions(city,fight.rested,R)[0];if(!rest)break;assert(R.recover(fight,rest.id));rests++;}
  for(const card of [...fight.hand])R.play(fight,card.uid);
  R.end(fight);
  const all=[...fight.hand,...fight.draw,...fight.board,...fight.discard];assert(all.every(c=>R.cards[c.id].city===city));assert.equal(new Set(all.map(c=>c.id)).size,all.length);
 }
 assert(fight.result);assert(rests<=7);if(fight.result==='win')wins++;fights++;
}}
assert.equal(wins,fights,'Every offered draft can finish with available recovery options');
console.log(`${fights} unique-city drafts, recovery, mana, forecast, event healing, save migration and interest debuffs passed.`);
