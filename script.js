'use strict';

const title = prompt ('Как называется ваш проект?')
const screens = prompt ('Какие типы экранов нужно разработать?')
const screenPrice = +prompt ('Сколько будет стоить данная работа?')
const adaptive = prompt ('Нужен ли адаптив на сайте?')
const service1 = prompt ('Какой дополнительный тип услуги нужен?')
const screenPrice1 = +prompt ('Сколько это будет стоить?')
const service2 = prompt ('Какой дополнительный тип услуги нужен?')
const screenPrice2 = +prompt ('Сколько это будет стоить?')
const fullPrice = screenPrice + screenPrice1 + screenPrice2
const rollback = 79
const servicePercentPrice = fullPrice - (fullPrice * (rollback/100))

/* const title = 'my project'
const screens = 'Простые, Сложные, Интерактивные'
const screenPrice = 50
const rollback = 79
const fullPrice = 700000
const adaptive = true */

console.log (title);
console.log (screens);
console.log (`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log (adaptive);
console.log (`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
console.log (Math.ceil(servicePercentPrice));

switch (true) {
    case fullPrice > 30000:
        console.log('Даем скидку в 10%');
        break
    case 15000 < fullPrice && fullPrice < 30000:
        console.log('Даем скидку в 5%');
        break
    case 0 < fullPrice && fullPrice < 15000:
        console.log('Скидка не предусмотрена');
        break
    default:
        console.log('Что то пошло не так');

}
