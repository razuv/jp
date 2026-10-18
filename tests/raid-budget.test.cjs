const assert=require('node:assert/strict');
const B=require('../raid-budget.js'),R=require('../raid-engine.js');
const win=B.award({city:'osaka',cards:['osaka-0','osaka-1','osaka-0','kyoto-0'],turns:4,events:[5,5,6]},R.cards);
assert.equal(win.points,100+50+27+10);assert.equal(B.total([win,win]),win.points);
const estimate=B.estimate(B.defaults,[win]);assert.equal(estimate.rows.stay,156000);assert.equal(estimate.rows.food,98000);assert.equal(estimate.rows.local,28000);assert.equal(estimate.rows.experiences,win.points*50);assert.equal(estimate.planned,Object.values(estimate.rows).reduce((a,b)=>a+b,0));assert.equal(estimate.remaining,500000-estimate.planned);
assert.equal(B.estimate({...B.defaults,target:10000},[win]).within,false);
assert.equal(B.estimate({...B.defaults,days:1,people:3},[]).rows.stay,0);assert.equal(B.estimate({...B.defaults,people:3},[]).rooms,2);
assert.equal(B.replayTarget(B.defaults,.8),400000);assert.equal(B.replayTarget(B.defaults,1.2),600000);
assert.equal(B.normalize({target:NaN,days:-3,people:99,yenPerPoint:0}).days,1);assert.equal(B.normalize({target:NaN}).target,500000);
const legacy=B.award({city:'osaka',legacy:true},R.cards);assert.equal(legacy.points,100);assert.equal(legacy.parts.tactics,0);
assert.deepEqual(B.estimate(JSON.parse(JSON.stringify(B.defaults)),JSON.parse(JSON.stringify([win]))),estimate);
console.log('Budget: score, deduplication, yen conversion, group costs, limits, legacy saves and +/-20% replay passed.');
// Every respite proposal uses the same target and actually fits, without changing group size or the points conversion.
for(const target of [10000,100000,150000,250000,300000,400000]){
 const config={...B.defaults,target},options=B.relief(config,[win]);
 for(const o of options){assert.equal(o.config.target,target);assert.equal(o.config.people,config.people);assert.equal(o.config.yenPerPoint,config.yenPerPoint);assert(B.estimate(o.config,[win]).within);assert(o.config.days<=config.days);}
}
assert(B.relief({...B.defaults,target:300000},[win]).some(o=>o.id==='shorter'));
assert(B.relief({...B.defaults,target:300000},[win]).some(o=>o.id==='caps'));
assert(B.relief({...B.defaults,target:300000},[win]).some(o=>o.id==='local'));
assert.deepEqual(B.relief(B.defaults,[win]),[]);
console.log('Respite: all proposed conditions fit the unchanged budget; duration, spending caps and local route passed.');
