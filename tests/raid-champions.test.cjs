const assert=require('node:assert/strict');
const R=require('../raid-engine.js'),H=require('../raid-champions.js');
for(const city of Object.keys(R.cities)){
 const heroes=H.choices(city);assert.equal(heroes.length,3);assert.equal(new Set(heroes.map(h=>h.id)).size,3);assert.equal(new Set(heroes.map(h=>h.powerKey)).size,3);
 for(const h of heroes){assert.equal(h.city,city);assert(h.bio.length>20);assert.equal(H.get(city,h.id).name,h.name);}
 const deck=[city+'-0',city+'-1',city+'-3'];
 for(const h of heroes){const b=R.battle(deck,city,0,h.powerKey,7,Object.keys(R.cards).filter(id=>R.cards[id].city===city));assert.equal(b.maxHP,h.powerKey==='sendai'?51:45);const n=b.hand.length;R.play(b,b.hand[0].uid);assert.equal(b.hand.length,n-1+(h.powerKey==='kyoto'?1:0));}
}
for(const h of H.choices('custom',{name:'Местный герой',bio:'История местного героя.'}))assert.equal(h.city,'custom');
console.log('Three local heroes per prepared city, independent buffs and fallback passed.');
