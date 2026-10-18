const assert=require('node:assert/strict'),R=require('../raid-engine.js'),T=require('../raid-travel.js'),B=require('../raid-budget.js'),H=require('../raid-champions.js'),S=require('../raid-hero-sites.js');
T.install(R,null,null,H);S.install(R);T.decorate(R);
const ledger=[],card=R.cards['tokyo-0'];assert.equal(T.charge(ledger,card,2),8000);assert.equal(T.charge(ledger,card,2),0);assert.equal(B.estimate(B.defaults,[],ledger).rows.experiences,8000);assert.equal(B.estimate({...B.defaults,people:4},[],ledger).rows.experiences,16000);
assert.equal(T.charge(ledger,{...card,id:'alias'},2),0);assert.equal(T.charge(ledger,R.cards['tokyo-rest-2'],2,{},true),0);assert.equal(T.restOptions('tokyo',['tokyo-rest-2'],R).length,6);assert(T.restOptions('tokyo',[],R).some(c=>c.name==='Голден-гай'));
for(const city of Object.keys(R.cities)){
 const cards=S.offer(city,[H.choices(city)[0]],R,['walk']);assert.equal(cards.length,5);assert.equal(new Set(cards.map(c=>c.wiki)).size,5);assert(cards.every(c=>Number.isFinite(T.cost(c))));assert.equal(T.encounters(city,R).length,6);assert(T.encounters(city,R).some(c=>c.name==='Омакасе'));
 const b=R.battle(cards.slice(0,3).map(c=>c.id),city,7,'osaka',7,[...cards,...T.encounters(city,R)].map(c=>c.id),['shopping']);for(let t=0;t<100&&b.result!=='win';t++){if(b.result==='lose'){const rest=T.restOptions(city,b.rested,R)[0];if(!rest)break;R.recover(b,rest.id);}for(const c of [...b.hand])R.play(b,c.uid);R.end(b);}assert.equal(b.result,'win',city+' late stage');
}
assert.equal(B.normalize({people:200}).people,99);assert.equal(B.normalize({people:3}).people,3);
console.log('Unique costs, alias deduplication, group scaling, new recovery areas, omakase, Fuji and late-stage battles passed.');
