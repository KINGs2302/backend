function sayname() {
console.log("j");
console.log("i");
console.log("n");
console.log("a");
console.log("i");
console.log("s");
console.log("h");
}

function addtwonumbers(a,b){

    return(a+b);
    
}

const result = addtwonumbers(2,3);

// console.log(result);


function addtocardprice(...price) {
    return price;
}

const total = addtocardprice(2,3,4,5,6,7,8,9);

// console.log(total);

const user = {
    username : "Jainish",
    price : 1000,
}

function cardprice(anyuser){
    return (`${anyuser.username} has ${anyuser.price}`);
}

cardprice(user);
console.log(cardprice(user));
