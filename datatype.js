// # primitive

//  7 types : String, number, boolean, null, undefine, bigint, symbol

// refrence (non primitive)

// arrys, objects, functions

const score = 3312345678122n
// console.log("sss",typeof score);

let myDate = new Date();
// console.log("Date",myDate.toString());
// console.log("Date",myDate.toISOString());
// console.log("Date",myDate.toJSON());
// console.log("Date",myDate.toDateString());
// console.log("Date",myDate.toLocaleString());

let myDate1 = new Date(2023, 10, 12, 14, 20, 30);
//console.log("Date",myDate1.toLocaleString());

//array

const arr=[1,2,3,4,5,6];
//console.log("Array",arr);


const arr1= [1,2,3,4,[5,6,7],8,[9,10,[11,12]]];
console.log(arr1.flat(2));
