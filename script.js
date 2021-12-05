
const title = 'my project'
const screens = 'Простые, Сложные, Интерактивные'
const screenPrice = 50
const rollback = 79
const fullPrice = 700000
const adaptive = true

console.log (typeof title)
console.log (typeof fullPrice)
console.log (typeof adaptive)
console.log (screens.length)
console.log (`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log (`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
console.log (screens.toLowerCase().split());
console.log (fullPrice * (rollback/100));