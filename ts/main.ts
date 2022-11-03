type str = string
type num = number
type bool = boolean

let moveName: str = "yes";
// типизировать функцию через интерфейс
let movies:any = [
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
]

const addObject = (moveName:str) => {
    const object:any = {}
    object["name"] = moveName
    object["ratings"] = {}
    movies.push(object)
}

const deleteObject = (moveName: str) => {
    const newAreey = []
    for (let i = 0; i < movies.length; i++) {
        if(movies[i]["name"] !== moveName){
            newAreey.push(movies[i])
        }
    }return newAreey
}

const listObject = () => {
    for (let key of movies) {
        console.log(key["name"])
    }
}

const rateObject = (moveName: str) => {
    if(findObject(moveName,)){
        let name: str | null = prompt("Введите имя");
        let rating: str | null = prompt("Введите оценку");
        if(
            rating !== null &&
            typeof(parseInt(rating)) === "number" &&
            name !== null && 
            !isNaN(parseInt(rating))
            ){
            let ratingNumber:num = parseInt(rating)
            movies[findObject(moveName, true)]["ratings"][name] = ratingNumber
            return
        }
    }return "нет такого фильма"
}

const findObject = (moveName: str, isIndex:bool = false): str | num => {
    for (let i = 0; i < movies.length; i++) {
        if(movies[i]['name'] === moveName){
            if(isIndex === false){
                return movies[i]["name"]
            }
            else if (isIndex === true){
                return i
            }
        }
    }return 0
}

const userReuuest = (STRPROMT:str): str => {
    while(true){
        STRPROMT = STRPROMT || "Введите название фильма \nсписок команд\n_add\n_del\n_rate\n_list";
        const moveName = prompt(STRPROMT);
        if (moveName === null){
            alert("Вы завершили цикл");
            return "";
        }else if(moveName === ""){
            alert("Повторите ввод");
            continue;
        }return moveName;
    }
}


while (moveName){
    moveName = userReuuest("");
    if(moveName === "_add"){
        moveName = userReuuest("Введите название фильма который хотите добавить");
        addObject(moveName)
        continue
    }
    else if(moveName === "_del"){
        moveName = userReuuest("Введите название фильма который хотите удалить");
        movies = deleteObject(moveName);
        continue
    }
    else if(moveName === "_rate"){
        moveName = userReuuest("Введите название фильма в который вы хотите добавить имя и рейтинг");
        rateObject (moveName);
        continue
    }
    else if(moveName === "_list"){
        listObject ();
        continue
    }
    console.log(`Найден фильм ${findObject(moveName)}`);
}
