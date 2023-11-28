
class user {
    constructor(name, age){
        this.name =  name;
        this.age = age;
    }

    #speak(){
        return 'Hello';
    }

    greeting(){
        return  `${this.speak()} ${this.name}`;
    }

    get #uAge(){
        return this.age;
    }

    set #uAge(n){
        this.age = n;
    }


}

const newDeveloper = new user('David', 23);