'use strict';
const JapanCCG=(()=>{
const cards={
 tower:{name:'Tokyo Tower',city:'tokyo',mana:3,attack:7,guard:0,art:'tokyo-tower',text:'7 урона. Панорама, от которой даже кайдзю делает шаг назад.'},
 dotonbori:{name:'Дотонбори',city:'osaka',mana:1,attack:3,guard:0,art:'octopus',text:'3 урона. Неон отвлекает, такояки придают смелости.'},
 castle:{name:'Замок Осаки',city:'osaka',mana:1,attack:0,guard:5,art:'castle',text:'5 защиты до атаки противника.'},
 fushimi:{name:'Фусими Инари',city:'kyoto',mana:2,attack:4,guard:2,art:'torii',text:'4 урона и 2 защиты. Пройти сквозь тысячу тории.'},
 garden:{name:'Кэнрокуэн',city:'kanazawa',mana:2,attack:0,guard:2,heal:5,art:'sakura',text:'Восстановить 5 здоровья и получить 2 защиты.'},
 ramen:{name:'Мисо-рамен',city:'sapporo',mana:1,attack:0,guard:0,heal:4,art:'ramen',text:'Восстановить 4 здоровья. Снять похмелье и усталость от очереди.',cleanse:true},
 suica:{name:'Проездной',city:'tokyo',mana:1,attack:0,guard:3,draw:1,art:'cat',text:'3 защиты и добор карты. Снять задержку поезда.',clearDelay:true},
 water:{name:'Вода из конбини',city:'osaka',mana:1,attack:0,guard:0,heal:3,cleanse:true,draw:1,art:'cat',text:'Восстановить 3 здоровья, снять все эффекты и взять карту.'},
 zenkoji:{name:'Дзэнко-дзи',city:'nagano',mana:2,attack:3,guard:4,art:'castle',text:'3 урона и 4 защиты. Спокойствие перед ревом.'},
 soba:{name:'Наганская соба',city:'nagano',mana:1,attack:2,guard:0,heal:3,art:'ramen',text:'2 урона и восстановление 3 здоровья.'},
 market:{name:'Рынок Омитё',city:'kanazawa',mana:2,attack:0,guard:3,draw:2,art:'sushi',text:'3 защиты и добор двух карт.'},
 zuihoden:{name:'Дзуйходэн',city:'sendai',mana:2,attack:5,guard:3,art:'castle',text:'5 урона и 3 защиты. Воля самурая.'},
 matsushima:{name:'Мацусима',city:'sendai',mana:2,attack:0,guard:6,heal:2,art:'fuji',text:'6 защиты и восстановление 2 здоровья.'},
 nebuta:{name:'Фонари Нэбута',city:'aomori',mana:3,attack:8,guard:0,art:'lantern',text:'8 урона. Свет фонарей пронзает атомный туман.'},
 apple:{name:'Аоморское яблоко',city:'aomori',mana:1,attack:0,guard:0,heal:5,draw:1,art:'sakura',text:'Восстановить 5 здоровья и взять карту.'},
 hakodate:{name:'Ночной Хакодате',city:'hakodate',mana:3,attack:6,guard:4,art:'fuji',text:'6 урона и 4 защиты. Огни порта — ваш рубеж.'},
 goryokaku:{name:'Горёкаку',city:'hakodate',mana:2,attack:2,guard:7,art:'castle',text:'2 урона и 7 защиты. Крепость держит удар.'},
 otaru:{name:'Канал Отару',city:'sapporo',mana:2,attack:4,guard:3,draw:1,art:'sushi',text:'4 урона, 3 защиты и добор карты.'},
 susukino:{name:'Сусукино',city:'sapporo',mana:3,attack:9,guard:0,art:'ramen',text:'9 урона. Вся мощь ночного Саппоро.'},
 senso:{name:'Сэнсо-дзи',city:'tokyo',mana:2,attack:4,guard:5,art:'lantern',text:'4 урона и 5 защиты перед решающей битвой.'}
};
const starter=['tower','dotonbori','castle','fushimi','garden'];
const rewards={osaka:['dotonbori','water','castle'],kyoto:['fushimi','suica','water'],nagano:['zenkoji','soba','castle'],kanazawa:['garden','market','suica'],sendai:['zuihoden','matsushima','ramen'],aomori:['nebuta','apple','suica'],hakodate:['hakodate','goryokaku','water'],sapporo:['susukino','ramen','otaru'],tokyo:['tower','senso','suica']};
const events=[
 {id:'queue',name:'Огромная очередь',art:'queue',damage:1,text:'На следующем ходу первая атакующая карта наносит на 2 урона меньше.'},
 {id:'delay',name:'Задержка поезда',art:'train',damage:1,text:'На следующем ходу добор сокращён до одной карты.'},
 {id:'hangover',name:'Похмелье',art:'hangover',damage:0,text:'На следующем ходу на 1 ману меньше.'},
 {id:'smoking',name:'Штраф за курение',art:'no-smoking',damage:3,text:'Дополнительный удар на 3. На следующем ходу на 1 ману меньше.'},
 {id:'closed',name:'Внезапное закрытие',art:'closed',damage:1,text:'Последняя карта в руке уходит в сброс.'}
];
function rng(b){b.seed=(Math.imul(b.seed,1664525)+1013904223)>>>0;return b.seed/4294967296;}
function shuffle(b,a){for(let i=a.length-1;i>0;i--){const j=Math.floor(rng(b)*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function draw(b,n){for(let i=0;i<n;i++){if(!b.draw.length&&b.discard.length){b.draw=shuffle(b,b.discard.splice(0));b.log.push('Сброс перемешан: карты снова в колоде.');}if(!b.draw.length)return;const card=b.draw.shift();if(b.hand.length<7)b.hand.push(card);else{b.discard.push(card);b.log.push('Рука полна: лишняя карта отправлена в сброс.');}}}
function forecast(b){return events[(b.turn-1+b.eventOffset)%events.length];}
function enemyDamage(b){return (b.final?5:2+Math.floor(b.stage/3))+Math.floor((b.turn-1)/3);}
function createBattle(deck,stage=0,final=false,hp=36,seed=1){const b={version:1,draw:[],discard:[],hand:[],hp,maxHP:36+stage*2,enemyHP:final?56:10+stage*2,enemyMax:final?56:10+stage*2,armor:0,turn:1,maxMana:1,mana:1,seed:seed>>>0,eventOffset:stage%events.length,status:{},attackPenalty:0,stage,final,result:null,log:['Ваш ход: разыграйте карты за ману, затем завершите ход.']};b.hp=Math.min(b.maxHP,Math.max(1,hp));b.draw=shuffle(b,deck.filter(id=>cards[id]).map((id,i)=>({id,uid:'c'+i})));draw(b,3);return b;}
function play(b,uid){if(b.result)return false;const index=b.hand.findIndex(c=>c.uid===uid);if(index<0)return false;const instance=b.hand[index],card=cards[instance.id];if(card.mana>b.mana)return false;b.hand.splice(index,1);b.mana-=card.mana;let hit=card.attack;if(hit&&b.attackPenalty){hit=Math.max(0,hit-b.attackPenalty);b.attackPenalty=0;}b.enemyHP=Math.max(0,b.enemyHP-hit);b.armor+=card.guard;if(card.heal)b.hp=Math.min(b.maxHP,b.hp+card.heal);if(card.cleanse){if(b.status.hangover)b.mana=Math.min(b.maxMana,b.mana+1);if(b.status.delay)draw(b,1);b.status={};b.attackPenalty=0;}if(card.clearDelay&&b.status.delay){draw(b,1);delete b.status.delay;}b.discard.push(instance);b.log.push(`${card.name}: ${hit?'урон '+hit:''}${card.guard?' · защита +'+card.guard:''}${card.heal?' · здоровье +'+card.heal:''}`);if(b.enemyHP===0){b.result='win';b.log.push(b.final?'Годзилла повержен. Япония спасена!':'Город защищён. Дорога на север открыта.');}else if(card.draw)draw(b,card.draw);return true;}
function endTurn(b){if(b.result)return false;const event=forecast(b),strike=enemyDamage(b)+event.damage,blocked=Math.min(b.armor,strike),damage=strike-blocked;b.hp=Math.max(0,b.hp-damage);b.armor=0;b.log.push(`Годзилла атакует: ${strike}. Защита поглотила ${blocked}; получено ${damage}. Событие: ${event.name}.`);if(!b.hp){b.result='lose';b.log.push('Команда отступает. Можно повторить столкновение с полным здоровьем.');return true;}b.status={};b.attackPenalty=0;if(event.id==='closed'&&b.hand.length){const c=b.hand.pop();b.discard.push(c);b.log.push(cards[c.id].name+' уходит в сброс.');}if(event.id==='queue')b.attackPenalty=2;if(event.id==='delay')b.status.delay=true;if(['hangover','smoking'].includes(event.id))b.status.hangover=true;b.turn++;b.maxMana=Math.min(6,b.maxMana+1);b.mana=Math.max(1,b.maxMana-(b.status.hangover?1:0));draw(b,b.status.delay?1:2);b.log.push(`Ход ${b.turn}: ${b.mana} маны, ${b.hand.length} карт в руке.`);return true;}
return {cards,starter,rewards,events,createBattle,play,endTurn,forecast,enemyDamage};
})();
if(typeof module!=='undefined')module.exports=JapanCCG;
