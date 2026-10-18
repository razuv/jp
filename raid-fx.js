'use strict';
const RaidFx=(()=>{
const codes=['RUB','USD','EUR'],endpoint='https://open.er-api.com/v6/latest/JPY',cacheKey='jp-raid-fx-v1';
function validate(data){if(data?.result!=='success'||data.base_code!=='JPY'||!Number.isFinite(data.time_last_update_unix)||!Number.isFinite(data.time_next_update_unix)||data.time_next_update_unix<=data.time_last_update_unix||!codes.every(c=>Number.isFinite(data.rates?.[c])&&data.rates[c]>0))throw Error('Некорректный ответ валютного API.');return {date:data.time_last_update_unix*1000,next:Number(data.time_next_update_unix)*1000,rates:Object.fromEntries(codes.map(c=>[c,data.rates[c]])),stale:false};}
function convert(yen,snapshot){if(!snapshot||!Number.isFinite(yen)||yen<0)return null;return Object.fromEntries(codes.map(c=>[c,yen*snapshot.rates[c]]));}
async function load(){let cached=null;try{cached=JSON.parse(localStorage.getItem(cacheKey));if(cached&&(!Number.isFinite(cached.date)||!Number.isFinite(cached.next)||!codes.every(c=>Number.isFinite(cached.rates?.[c])&&cached.rates[c]>0)))cached=null;}catch{}if(cached&&Number.isFinite(cached.next)&&cached.next>Date.now())return {...cached,stale:false};try{const r=await fetch(endpoint,{signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error('Курс недоступен.');const fresh=validate(await r.json());try{localStorage.setItem(cacheKey,JSON.stringify(fresh));}catch{}return fresh;}catch{if(cached)return {...cached,stale:true};return null;}}
return {codes,validate,convert,load};
})();
if(typeof module!=='undefined')module.exports=RaidFx;
