const createUser = function(name,age){
    let result = new Object;
    result.name = name;
    result.age = age;
    result.toString = toString = function (){
        return `${this.name} is ${this.age} y.o.`;
    }
    return result
}

const users = [
    createUser("Joinh", 21),
    createUser("Tory", 18),                       
    createUser("Kate", 23),
    createUser("Pete", 22)
]
// users.sort((a,b) => a - b);
console.log(users.sort((a,b) => a.age - b.age).toString())
// console.log(users.sort((a,b) => a.age - b.age));
