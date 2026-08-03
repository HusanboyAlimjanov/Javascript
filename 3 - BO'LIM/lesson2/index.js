// let arr =   [1, 2, 3, 4, 5]
// let newarr = arr.map((value, index, a)=> value * 2)
// console.log(newarr)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let neArr = arr.filter((value, index, a) => value % 2 )
// console.log(arr)

// let a = ["Olma", "Nok", "Uzum", "shaftoli"];
// let sum = 0
// a.forEach((value, index, a) => (sum += value.length))
// console.log(sum)

// let a = ["Olma", "Nok", "Uzum", "shaftoli"];
// let newarr = a.filter((value, index, a) => value.length <= 4)
// console.log(newarr)

// let  a = ["Olma", "Nok", "Uzum", "shaftoli"];
// let newarr = a.map((value, index, a) =>{
//     return value + " " + value.length
// })
// console.log(newarr)

// let a = [1, 20, 14, 7, 2, 5, 18, 17, 100]
// let newArr = a.filter((value, index, a) => {
//     return value  => 10 && value < 100
// })
// console.log(newArr)

// let arr = ["Olma", "Uzum", "Nok", "Shaftoli "]
// let newArr = arr.map((value, index, a) => {
//     return *${value.slice(1)}
// })
// console.log(newArr)

// =========================


// find
// let arr = ["Olma", "Uzum", "Nok", "Olcha", "Gilos", "Nok"]
// let newValue = arr.find((value, index, a) =>{
//     console.log(value, index);
//     return value === "Nok"
//     })
// console.log(newValue);
// findindex()
// let arr = ["Olma", "Uzum", "Nok", "Olcha", "Gilos", "Nok"]

// let i = arr.findIndex((value, index, a) =>{
//     if(value === "Nok") return index
// })
// console.log(i);

//findlastindex
// let arr = ["Olma", "Uzum", "Nok", "Olcha", "Gilos", "Nok"]

// let i = arr.findLastIndex((value, index, a) =>{
//     if(value === "Nok") return index
// })
// console.log(i);




// vazifa


//find
//1
let arr1 = [3, 7, 8, 12, 15, 20, 9];

let arr = arr1.find(num => num > 10 && num % 2 === 0);
console.log(arr);


let arr2 = [10, 15, 21, 30, 45, 9];

let arrp2 = arr2.find(num => num > 15 && num % 3 === 0 && num % 5 === 0);
console.log(arrp2);



// findindex()
let arr3 = [5, 8, 12, -3, 7, -9, 2];

let arrp3 = arr3.findIndex(num => (num < 0));
console.log(arrp3);


let arr4 = [10, 18, 16, 22, 30, 25];

let arrp4 = arr4.findIndex(num => (Math.sqrt(num) % 1 === 0));
console.log(arrp4);

let arr6 = [5, 23, 100, 45, 200, 78, 300];

