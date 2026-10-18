const assert=require('node:assert/strict');
const G=require('../ccg-engine.js');
assert.equal(G.starter.length,5);
let b=G.createBattle(G.starter,0,false,36,42);
assert.equal(b.hand.length,3);assert.equal(b.draw.length,2);assert.equal(b.mana,1);
const expensive=b.hand.find(c=>G.cards[c.id].mana>1);if(expensive){const before=JSON.stringify(b);assert.equal(G.play(b,expensive.uid),false);assert.equal(JSON.stringify(b),before);}
b=G.createBattle(['castle','dotonbori','garden','fushimi','tower'],0,false,36,1);b.hand=[{id:'castle',uid:'guard'}];b.draw=[];b.discard=[];
assert(G.play(b,'guard'));assert.equal(b.armor,5);assert(!G.play(b,'guard'));
const hp=b.hp;G.endTurn(b);assert.equal(b.hp,hp);assert.equal(b.armor,0);assert.equal(b.turn,2);
// Discard is reshuffled into the draw pile; drawn cards remain playable.
b=G.createBattle(['dotonbori'],0,false,36,4);G.play(b,b.hand[0].uid);G.endTurn(b);assert.equal(b.hand.length,1);assert.equal(b.hand[0].id,'dotonbori');
// All enemy event effects are observable and deterministic.
for(let offset=0;offset<5;offset++){
 b=G.createBattle(G.starter,0,false,36,5);b.eventOffset=offset;b.hand=[{id:'tower',uid:'x'},{id:'garden',uid:'y'}];b.draw=[{id:'castle',uid:'z'},{id:'water',uid:'w'}];const ev=G.forecast(b);G.endTurn(b);
 assert.equal(b.turn,2);assert(b.hp<36);if(ev.id==='queue')assert.equal(b.attackPenalty,2);if(ev.id==='hangover'||ev.id==='smoking')assert.equal(b.mana,1);if(ev.id==='delay')assert.equal(b.draw.length,1);if(ev.id==='closed')assert(b.discard.some(c=>c.uid==='y'));
}
// Win/loss states stop all further actions.
b=G.createBattle(G.starter,0,false,36,8);b.enemyHP=1;b.mana=3;b.hand=[{id:'tower',uid:'finisher'}];G.play(b,'finisher');assert.equal(b.result,'win');const win=JSON.stringify(b);G.endTurn(b);assert.equal(JSON.stringify(b),win);
b=G.createBattle(G.starter,7,true,1,9);G.endTurn(b);assert.equal(b.result,'lose');
// Save/restore produces the same continuation.
b=G.createBattle(G.starter,3,false,36,999);const restored=JSON.parse(JSON.stringify(b));G.endTurn(b);G.endTurn(restored);assert.deepEqual(b,restored);
console.log('CCG engine: starter deck, mana, guard, redraw, five events, terminal states and save/resume passed.');
b=G.createBattle(['water'],0,false,25,1);b.hand=[{id:'water',uid:'clean'}];b.draw=[];b.mana=1;b.maxMana=3;b.status={hangover:true};b.attackPenalty=2;G.play(b,'clean');assert.equal(b.mana,1);assert.equal(b.attackPenalty,0);assert.deepEqual(b.status,{});
b=G.createBattle(['suica','castle'],0,false,30,2);b.hand=[{id:'suica',uid:'s'}];b.draw=[{id:'castle',uid:'c'}];b.status={delay:true};G.play(b,'s');assert(!b.status.delay);assert(b.hand.some(c=>c.id==='castle'));
console.log('Cleanse and delay recovery passed.');
