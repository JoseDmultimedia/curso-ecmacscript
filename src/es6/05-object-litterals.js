//enhaced object litterals

function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('linux', 34, 'COL', 213131));
