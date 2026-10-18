'use strict';
// Coordinates are geographic anchors; transit lines are schematic, not railway-track geometry.
const RaidWorld=(()=>{
const airports={kix:{name:'Кансай',code:'KIX',point:[135.244,34.435],cities:['osaka','kyoto'],routes:{osaka:'Nankai до Намбы',kyoto:'JR Haruka до Киото'},via:{osaka:[[135.32,34.41],[135.49,34.58],[135.501,34.665]],kyoto:[[135.32,34.41],[135.524,34.647],[135.5,34.733],[135.759,34.986]]}},itm:{name:'Осака Итами',code:'ITM',point:[135.438,34.789],cities:['osaka','kyoto'],routes:{osaka:'Airport Limousine Bus до Осаки',kyoto:'Airport Limousine Bus до станции Киото'},via:{osaka:[[135.495,34.702]],kyoto:[[135.759,34.986]]}},sdj:{name:'Сэндай',code:'SDJ',point:[140.917,38.138],cities:['sendai'],routes:{sendai:'Sendai Airport Access Line'},via:{sendai:[[140.881,38.171],[140.882,38.261]]}}};
const stations={osaka:[135.496,34.702],kyoto:[135.759,34.986],nagano:[138.189,36.643],kanazawa:[136.648,36.578],sendai:[140.882,38.261],aomori:[140.735,40.829],hakodate:[140.727,41.774],sapporo:[141.35,43.069],tokyo:[139.767,35.681],nara:[135.819,34.681]};
const rail={
'osaka:kyoto':{label:'JR Kyoto Line',via:[]},
'kyoto:nagano':{label:'Thunderbird до Цуруги · Hokuriku Shinkansen до Нагано',via:[[136.076,35.645],[136.601,36.062],[136.648,36.578],[137.213,36.702],[137.886,37.081]]},
'nagano:sendai':{label:'Hokuriku Shinkansen до Омии · Tohoku Shinkansen до Сэндая',via:[[138.635,36.342],[139.014,36.322],[139.624,35.907],[139.899,36.559],[140.37,37.399],[140.46,37.755]]},
'sendai:aomori':{label:'Tohoku Shinkansen до Син-Аомори · JR Ou Line',via:[[141.137,39.702],[141.489,40.51],[140.693,40.828]]},
'aomori:hakodate':{label:'Син-Аомори · Hokkaido Shinkansen · Hakodate Liner',via:[[140.693,40.828],[140.516,41.145],[140.431,41.676],[140.648,41.904]]},
'hakodate:sapporo':{label:'Limited Express Hokuto',via:[[140.648,41.904],[140.615,42.102],[140.271,42.25],[140.284,42.513],[140.929,42.35],[141.681,42.639],[141.651,42.832]]},
'sapporo:tokyo':{label:'JR Rapid Airport · CTS / HND · Tokyo Monorail и JR',flight:true,via:[[141.681,42.787],[139.784,35.549],[139.757,35.655]]},
'osaka:nara':{label:'JR Yamatoji Line до Нары',via:[[135.514,34.647],[135.704,34.598]]},
'kyoto:nara':{label:'JR Nara Line',via:[[135.803,34.89]]},
'nara:kyoto':{label:'JR Nara Line до Киото',via:[[135.803,34.89]]},
'nara:nagano':{label:'JR Nara Line до Киото · Thunderbird · Hokuriku Shinkansen',via:[[135.759,34.986],[136.076,35.645],[136.648,36.578],[137.213,36.702],[137.886,37.081]]}
};
const positions={osaka:[[135.502,34.669],[135.526,34.687],[135.49,34.705],[135.517,34.654],[135.506,34.653]],kyoto:[[135.773,34.967],[135.785,34.995],[135.729,35.039],[135.765,35.005],[135.672,35.017]],nagano:[[138.187,36.662],[138.055,36.759],[138.19,36.664],[138.079,36.739],[138.187,36.659]],kanazawa:[[136.662,36.562],[136.668,36.572],[136.65,36.562],[136.656,36.571],[136.658,36.56]],sendai:[[140.864,38.248],[140.856,38.253],[140.845,38.273],[140.871,38.266],[140.883,38.261]],aomori:[[140.736,40.831],[140.699,40.811],[140.741,40.829],[140.735,40.831],[140.744,40.836]],hakodate:[[140.757,41.797],[140.71,41.763],[140.705,41.759],[140.726,41.773],[140.717,41.767]],sapporo:[[141.35,43.06],[141.368,43.071],[141.353,43.055],[141.354,43.055],[141.323,43.023]],tokyo:[[139.745,35.659],[139.796,35.714],[139.699,35.676],[139.701,35.66],[139.773,35.698]],nara:[[135.84,34.689],[135.848,34.682],[135.829,34.677],[135.843,34.685],[135.833,34.683]]};
const villains={
osaka:{wiki:'Glico running man',text:'Неоновый бегун — игровой соперник, вдохновлённый вывеской Glico над Дотонбори. Настоящий бегун — рекламный символ, а не городской злодей.'},
kyoto:{wiki:'Tengu',text:'Тэнгу — существо японского фольклора, связанное с горами. Этот хранитель Хигасиямы придуман для игры.'},
nagano:{wiki:'Japanese macaque',text:'Снежный хранитель — вымышленная макака. Образ отсылает к японским макакам Нагано, известным по Дзигокудани.'},
kanazawa:{wiki:'Maeda Toshiie',text:'Золотой самурай — вымышленный страж города ремёсел и сусального золота. Не изображает реального Маэду Тосииэ.'},
sendai:{wiki:'Date Masamune',text:'Тень полумесяца — вымышленный самурай. Его шлем отсылает к знаменитому полумесяцу Датэ Масамунэ.'},
aomori:{wiki:'Aomori Nebuta Matsuri',text:'Они фонарей — игровой дух, вдохновлённый светящимися фигурами Нэбута. Сам фестиваль проходит летом.'},
hakodate:{wiki:'Japanese flying squid',text:'Кракен ночного порта — выдуманный босс, вдохновлённый кальмарами — одним из символов Хакодате.'},
sapporo:{wiki:'Sapporo Snow Festival',text:'Белый голем — вымышленный снежный страж Одори. Отсылка к снежным скульптурам Саппоро, а не реальное городское предание.'},
tokyo:{wiki:'Godzilla',text:'Годзилла — вымышленный кайдзю японского кино, впервые появившийся в фильме Toho 1954 года. Здесь — игровой соперник в Токио.'},
nara:{wiki:'Nara Park',text:'Олений король — вымышленный хранитель Нары. В реальном парке живут олени сика; игровая корона — часть нашей истории.'}
};
function transfer(from,to){const route=rail[from+':'+to];return {from,to,label:route?.label||'Через ближайший транспортный узел · схема переезда',flight:!!route?.flight,coords:[stations[from],...(route?.via||[]),stations[to]]};}
function arrival(city,key){const a=airports[key];if(!a||!a.cities.includes(city))return null;return {from:key,to:city,label:a.routes[city],airport:true,coords:[a.point,...a.via[city],stations[city]]};}
function location(id){const card=RaidGame.cards[id];if(!card)return null;if(card.point)return card.point;const i=Number(id.slice(id.lastIndexOf('-')+1));return positions[card.city]?.[i];}
return {airports,stations,positions,villains,transfer,arrival,location};
})();
if(typeof module!=='undefined')module.exports=RaidWorld;
