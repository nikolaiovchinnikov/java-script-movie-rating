
let moveName: string = "yes";

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
// типизировать функцию через интерфейс
const addObject = (moveName:string) => {
    const object:any = {}
    object["name"] = moveName
    object["ratings"] = {}
    movies.push(object)
}
const deleteObject = (moveName: string) => {
    const newAreey = []
    for (let i = 0; i < movies.length; i++) {
        if(movies[i]["name"] = moveName){
            break
        }else {
            newAreey.push(i)
        }
    }return newAreey
}
const listObject = () => {

}
const rateObject = (moveName: string) => {
    if(findObject(moveName,)){
        let name: string | null = prompt("Введите имя");
        let rating: string | null = prompt("Введите оценку");
        if(
            rating !== null &&
            typeof(parseInt(rating)) === "number" &&
            name !== null && 
            !isNaN(parseInt(rating))
            ){
            let ratingNumber:number = parseInt(rating)
            // movies[findObject(moveName, true)]["ratings"] = name
            movies[findObject(moveName, true)]["ratings"][name] = ratingNumber
            return
        }
    }return "нет такого фильма"
        

}
const findObject = (moveName: string, isIndex:boolean = false): string | number => {
    for (let i = 0; i < movies.length; i++) {
        if(movies[i]['name'] === moveName){
            if(isIndex === false){
                return movies[i]["name"]
            }return i
        }
    }
    return 0
}
const userReuuest = (STRPROMT:string): string => {
    while(true){
        STRPROMT = STRPROMT || "Введите название фильма \nсписок команд\n_add\n_del\n_rate\n_find";
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
    console.log(movies);
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

    console.log(`Найден фильм ${findObject(moveName)}`);
}
