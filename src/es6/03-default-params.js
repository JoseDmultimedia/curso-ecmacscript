function newUser(name, age, country){
    var name = name || "Oscar";
    var age = age || 42;
    var country = country || "Colombia";

    console.log(name, age, country);
}

newUser();
newUser("David", 26, "Colombia");

function newAdmin (name = "Oscar", age = 25, country = "Colombia"){
    console.log(name, age, country);
}

newAdmin();
newAdmin("Jose", 26, "CL");