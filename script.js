'use strict';

const title = prompt ('Как называется ваш проект?')
const screens = prompt ('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные')
const screenPrice = +prompt ('Сколько будет стоить данная работа?')
const adaptive = confirm ('Нужен ли адаптив на сайте?')
const service1 = prompt ('Какой дополнительный тип услуги нужен?')
const screenPrice1 = +prompt ('Сколько это будет стоить?')
const service2 = prompt ('Какой дополнительный тип услуги нужен?')
const screenPrice2 = +prompt ('Сколько это будет стоить?')
const fullPrice = screenPrice + screenPrice1 + screenPrice2
const rollback = 10
const servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)))

console.log (title);
console.log (screens);
console.log (`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log (adaptive);
console.log (`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
console.log (servicePercentPrice);

switch (true) {
    case fullPrice >= 30000:
        console.log('Даем скидку в 10%');
        break
    case 15000 < fullPrice && fullPrice < 30000:
        console.log('Даем скидку в 5%');
        break
    case 0 <= fullPrice && fullPrice <= 15000:
        console.log('Скидка не предусмотрена');
        break
    default:
        console.log('Что то пошло не так');

}
