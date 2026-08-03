
//dars.

//forEach
// let arr = ["Olma", "Anor", "Uzum", "Nok"]
// let sum = 0
// arr.forEach((value, index, a) =>{
//     //sum += value.length
//     if(index === 3) {
//         console.log(value);
//     }
// })
// console.log(sum);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sum = 0
// arr.forEach(function (value, index, a) {
//     sum += value
// })
// console.log(sum);


//====================
//map
// let arr = ["Olma", "Anor", "Uzum", "Nok"]
// let newarr = arr.map((value, index, a) => {
//     return value + "olaman."
// })
// console.log(newarr);
// let arr = ["Olma", "Anor", "Uzum", "Nok"]
// let newarr = arr.map((value, index, a) => {
//     return value + " " +(index + 1)
// })
// console.log(newarr);


// forEach va map farqi
// forEach da return ishlamaydi
//mapda return ishlaydi o'zidan qiymat qaytaradi


//filter
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newarr = arr.filter((value, index, a) => {
//     if(value <= 5) return value
// })
// console.log(newarr);








// let arr = ["Shaftoli", "Anjir", "Uzum", "Nok"]
// let newarr = arr.filter((value, index, a) => {
//   if( value.length%2 === 0) return value
// })
// console.log(newarr);


// let ar = [1, 2, 3, 4, 5]
// let newarr = ar.map((value, index, a) => {
//   return value **2
// })
// console.log(newarr);


// let ar = ["scratch", "python", "html", "css", "javaScript", "jeact js"]
// let newarr = ar.map((value, index, a) => value.at(0).toUpperCase() + value.slice(1) )
// console.log(newarr);











//vazifa
let arr = ["Ali", "Vali", "Sami", "Olim"];

arr.forEach(function(value, index) {
  console.log(index + 1 + ". " + value);
});

let arr1 = [10000, 20000, 15000];

arr1.forEach(function(value) {
  console.log(value + " => " + value * 0.9);
});

let arr2 = ["olma", "anor", "banan"];

arr2.forEach(function(value) {
  console.log(value.toUpperCase());
});

let arr3 = [15, 18, 20, 25];

let rat = arr3.map(function(value) {
  return value + 1;
});

console.log(rat);

let arr4 = ["Ali", "Vali", "Sami"];

let rat2 = arr4.map(function(value) {
  return value + "bek";
});

console.log(rat2);

let arr5 = [1, 2, 3, 4];

let rat3 = arr5.map(function(value) {
  return "Son: " + value;
});

console.log(rat3);

let arr6 = [12, 18, 25, 16, 30];

let rat4 = arr6.filter(function(value) {
  return value >= 18;
});

console.log(rat4);

let arr7 = ["olma", "banan", "shaftoli", "anor"];

let rat5 = arr7.filter(function(value) {
  return value.length > 5;
});

console.log(rat5);

let arr8 = [-5, 0, 7, -2, 10];

let rat6 = arr8.filter(function(value) {
  return value >= 0;
});

console.log(rat6);

