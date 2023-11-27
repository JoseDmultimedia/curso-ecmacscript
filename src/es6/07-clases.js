//Delclarando
class User {

};

//Haciendo una instancia 
const newUser = new User();


class user {
    // metodos
    gretting(){
        return 'Hello';
    }
}


const gndx = new user();
console.log(gndx.gretting());

const developer = new user();
console.log(developer.gretting());


//contructor 

class user{
    constructor(){
        console.log('Nuevo Usuario');
    };

    gretting(){
        return 'Hello';
    }
};


const david = new user();

//this 

class user {
    constructor(name){
        this.name = name;
    }

    speak(){
        return 'Hello';
    }

    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const ana = new user('Ana');
console.log(ana.greeting());


// setter and getters 

class user {
    constructor(name, age){
        this.name =  name;
        this.age = age;
    }

    speak(){
        return 'Hello';
    }

    greeting(){
        return  `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }

    set uAge(n){
        this.age = n;
    }
}

const newDeveloper = new user('David', 23);
console.log(newDeveloper.uAge);
console.log(newDeveloper.uAge = 28);