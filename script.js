'use strict';

// Объект user с несколькими свойствами и методом
const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}

// Преобразуем объект user в массив пар [ключ, значение] и создаем из этого Map
const userMap = new Map(Object.entries(user));

// Преобразуем Map обратно в объект
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj); // Выводит новый объект из Map

// Массив магазинов с товарами
const shops = [{
        rice: 500
    },
    {
        oil: 200
    },
    {
        bread: 50
    }
]

// Массив с бюджетами для каждого магазина
const budget = [5000, 15000, 25000];

// Инициализация Map с начальной парой
const map = new Map([
    [{
        paper: 400
    }, 8000] // Примерная пара (товар: цена)
]);

// Привязываем каждый товар из массива shops к соответствующему бюджету из массива budget
shops.forEach((shop, i) => {
    map.set(shop, budget[i]); // Добавляем товар и бюджет в Map
});

console.log(map); // Выводим Map с товарами и их бюджетами


// console.log(map.get(shops[0])); // 5000
// console.log(map.has(shops[0])); // true 

// map.delete(key);
// map.clear();
// map.size;
// map.keys()

// const goods = [];

// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0])
// }
// console.log(goods);

// for (let price of map.values()) {
//     console.log(price);
// }

// for (let [shop, price] of map.entries()) {
//     console.log(price, shop);
// }

// map.forEach((value, key, map) => {
//     console.log(key, value);
// });
