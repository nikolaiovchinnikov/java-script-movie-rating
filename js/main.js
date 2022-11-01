"use strict";
let moveName = "yes";
// типизировать функцию через интерфейс
let movies = [
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
// типизировать функцию через интерфейс
const addObject = (moveName) => {
    const object = {};
    object["name"] = moveName;
    object["ratings"] = {};
    movies.push(object);
};
const deleteObject = (moveName) => {
    const newAreey = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i]["name"] = moveName) {
            break;
        }
        else {
            newAreey.push(i);
        }
    }
    return newAreey;
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
    if (moveName === "add") {
        moveName = userReuuest();
        addObject(moveName);
    }
    movies = deleteObject(moveName);
    console.log(findObject(moveName));
}
