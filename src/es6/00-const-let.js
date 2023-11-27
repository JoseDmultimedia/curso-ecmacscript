var lastName = "David";
lastName = "Oscar";
console.log(lastName);

let fruit = "Apple";
fruit = "Kiwi";

const animal = "Tiger";

const fruits = () => {
    if(true){
        var fruit1 = "Banana"; //function scope
        let fruit2 = "Apple"; //Block scope
        const fruit3 = "Tomatoe"; //Block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();