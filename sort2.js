const createUser = function(name,age){
    const createUsers = new Object({name,age})
    Object.prototype.toString = function (){
        return `${this.name} is ${this.age} y.o.`;}
    return createUsers
}


let users = [
    createUser("Joinh", 21),
    createUser("Tory", 18),                       
    createUser("Kate", 23),
    createUser("Pete", 22)
]
    
sortedUsers = [];
for (let i = 0; i < users.length; i++) {
    sortedUsers[users[i].age - 1] = users[i];
}   
console.log(sortedUsers.toString())
    


