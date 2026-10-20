'use strict';
const RaidBudget=(()=>{
// Editable planning assumptions, not quoted hotel prices or ticket fares.
const defaults={target:500000,people:2,days:14,roomNight:12000,foodDay:3500,localDay:1000,transfers:100000,extra:0,yenPerPoint:50};
const limits={target:[10000,100000000],people:[1,99],days:[1,90],roomNight:[0,1000000],foodDay:[0,100000],localDay:[0,100000],transfers:[0,10000000],extra:[0,10000000],yenPerPoint:[1,10000]};
function normalize(input={}){const out={};for(const [key,value] of Object.entries(defaults)){const n=Number(input[key]);out[key]=Number.isFinite(n)&&input[key]!==''?Math.min(limits[key][1],Math.max(limits[key][0],Math.round(n))):value;}return out;}
function arrival(input={}){return normalize({...input,roomNight:0,foodDay:0,localDay:0,transfers:0,extra:0});}
function award({city,cards=[],turns=null,events=[],legacy=false,impressions=null},catalog){const unique=[...new Set(cards)].filter(id=>catalog[id]?.city===city);const places=unique.reduce((sum,id)=>sum+catalog[id].mana*10,0);const discoveries=new Set(events.filter(x=>Number.isInteger(x)&&x>=5&&x<=7)).size*5;const tactics=Number.isInteger(turns)&&turns>0?Math.max(0,30-Math.max(0,turns-3)*3):0;return {city,cards:unique,turns,legacy,impressions,parts:{victory:100,places,discoveries,tactics},points:100+places+discoveries+tactics};}
function total(entries=[]){const seen=new Set();return entries.reduce((n,e)=>{if(seen.has(e.city))return n;seen.add(e.city);return n+Math.max(0,Math.round(Number(e.points)||0));},0);}
function estimate(config,entries=[],expenses=null){const c=normalize(config),points=total(entries),nights=Math.max(0,c.days-1),rooms=Math.ceil(c.people/2);const rows={stay:nights*rooms*c.roomNight,food:c.days*c.people*c.foodDay,local:c.days*c.people*c.localDay,transfers:c.transfers,experiences:Array.isArray(expenses)?expenseTotal(expenses,c.people):points*c.yenPerPoint,extra:c.extra};const planned=Object.values(rows).reduce((n,v)=>n+v,0);return {config:c,points,nights,rooms,rows,planned,remaining:c.target-planned,within:c.target>=planned};}
function expenseTotal(expenses,people){const seen=new Set();return expenses.reduce((n,e)=>{if(seen.has(e.key))return n;seen.add(e.key);return n+(e.kind==='saving'?Math.min(0,Math.round(e.costPerPerson*people)):Math.max(0,Math.round(e.costPerPerson!==undefined?e.costPerPerson*people:e.amount||0)));},0);}
function replayTarget(config,factor){const c=normalize(config);return normalize({...c,target:Math.round(c.target*factor/1000)*1000}).target;}
function relief(config,entries=[],expenses=null){
 const c=normalize(config),options=[];
 if(estimate(c,entries,expenses).within)return options;
 // No fabricated fares: offer duration changes or explicit spending caps.
 function add(id,title,candidate,note){const result=estimate(candidate,entries,expenses);if(result.within&&!options.some(o=>JSON.stringify(o.config)===JSON.stringify(result.config)))options.push({id,title,note,...result});}
 for(let days=c.days-1;days>=2;days--){const candidate={...c,days};if(estimate(candidate,entries,expenses).within){add('shorter','Меньше дней, тот же маршрут',candidate,'Ставки за день и резерв на впечатления сохранены.');break;}}
 const variable=['roomNight','foodDay','localDay','transfers','extra'];
 const minimum={...c,roomNight:Math.min(c.roomNight,5000),foodDay:Math.min(c.foodDay,2000),localDay:Math.min(c.localDay,500),transfers:Math.min(c.transfers,20000),extra:0};
 if(estimate(minimum,entries,expenses).within){let low=0,high=1;for(let i=0;i<40;i++){const fraction=(low+high)/2,candidate={...c};for(const key of variable)candidate[key]=Math.floor(minimum[key]+(c[key]-minimum[key])*fraction);if(estimate(candidate,entries,expenses).within)low=fraction;else high=fraction;}const candidate={...c};for(const key of variable)candidate[key]=Math.floor(minimum[key]+(c[key]-minimum[key])*low);add('caps','Та же длительность, новые лимиты',candidate,'Лимиты расходов для поиска бронирований; это не найденные цены.');}
 // A local stay is a different route and is explicitly marked as such.
 for(let days=c.days;days>=2;days--){const candidate={...minimum,days,transfers:0};if(estimate(candidate,entries,expenses).within){add('local','Один город, без дальних переездов',candidate,'Новый маршрут останется в стартовом городе; междугородние переезды исключены.');break;}}
 return options;
}
return {defaults,normalize,arrival,award,total,estimate,expenseTotal,replayTarget,relief};
})();
if(typeof module!=='undefined')module.exports=RaidBudget;
