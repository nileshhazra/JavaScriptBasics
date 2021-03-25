function userCreator( name, score){
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctionStore = {
    increment: function(){
        this.score++;
    },
    log: function(){
        console.log("Logged In..");

    }
}

const user1 = userCreator("Nilesh", 3);
const user2 = userCreator("John", 4);
user1.increment();
user1.increment();
user1.increment();
console.log(user1.score);