const anotherFunctio = () => {
    return new Promise((resolve, reject) =>{
        if(false){
            resolve('Hey!!!');
        }else{
            reject('Whooops!');
        }
    })
};

anotherFunctio()
.then(response => console.log(response))
.catch(err => console.log(err));