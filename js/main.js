"use strict";
let moveName = "yes";
const movies = [
    {
        'name': 'Interstellar',
        'ratings': {
            'John': 10,
            'Jack': 3
        }
    },
    {
        'name': 'Avengers: Infinity War',
        'ratings': {
            'Jack': 9,
            'Jane': 10
        }
    }
];
const addObject = () => {
};
const deleteObject = () => {
};
const listObject = () => {
};
const rateObject = () => {
};
const findObject = (moveName) => {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i]['name'] === moveName) {
            return `Найден фильм ${movies[i]["name"]}`;
        }
    }
    return "такого фильма нет в списке";
};
const userReuuest = () => {
    while (true) {
        const moveName = prompt("Введите название фильма");
        if (moveName === null) {
            alert("Вы завершили цикл");
            return "";
        }
        else if (moveName === "") {
            alert("Повторите ввод");
            continue;
        }
        return moveName;
    }
};
while (moveName) {
    moveName = userReuuest();
    console.log(findObject(moveName));
}
