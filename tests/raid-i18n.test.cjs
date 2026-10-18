const assert=require('node:assert/strict'),I=require('../raid-i18n.js');
for(const [ru,pair] of I.dictionary){for(const language of ['en','ja']){assert(pair[language]?.length,ru);assert(!/[А-Яа-яЁё]/.test(pair[language]),language+': '+ru);}}
assert.equal(I.translate('Куда прилетаешь','en'),'Arrival city');assert.equal(I.translate('Куда прилетаешь','ja'),'到着する街');assert.equal(I.translate('Куда прилетаешь','ru'),'Куда прилетаешь');assert.equal(I.translate('Глава 3','en'),'Chapter 3');assert.equal(I.translate('Глава 3','ja'),'第3章');assert(!/[А-Яа-я]/.test(I.translate('Стоимость в йенах','en')));assert.equal(I.translate('FamilyMart','ja'),'ファミリーマート');
console.log('Russian/English/Japanese dictionary completeness, game labels, numbers, currencies and konbini names passed.');
