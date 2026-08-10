// sort - array ichidagi qiymatlarni tartiblaydi
// let arr = [4, 2, 5, 1, 7, 3, 10, 8, 9, 20, 6];
// let sortArr = arr.sort();
// let sortArr = arr.sort((a, b) => a - b);
// let sortArr = arr.sort((a, b) => b - a);
// console.log(sortArr);

// let arr = ["Olma", "Uzum", "Nok", "anor", "Anjir"];
// let sortArr = arr.sort();
// let sortArr = arr.sort((a, b) => a.localeCompare(b));
// let sortArr = arr.sort((a, b) => b.localeCompare(a));
// console.log(sortArr);







// every – bu (&& – AND) operatoriga o'xshab ishlaydi.
// Barcha qiymat true ekanligini tekshiradi va true yoki false javob qaytaradi.
// let arr = [1, "Algoritm", { ism: "Eshmat" }, true, null, undefined];
// let arr = [1, "Algoritm", { ism: "Eshmat" }, true];
// let arr = [1, 2, 3, 4, 5, -1];
// let isTruesy = arr.every((value) => value);
// let isTruesy = arr.every((value) => value > 0);
// console.log(isTruesy);



// some – bu (|| – OR) operatoriga o'xshab ishlaydi.
// Qiymatlar ichida 1 ta qiymat shartga mos tushsa yakuniy javob true bo'ladi.
// Aks xolda false bo'ladi.
// let arr = [-1, -2, 3, -4, -5];
// let or = arr.some((value) => value);
// let or = arr.some((value) => value > 0);
// console.log(or);



// flat – nested arraylarni parchalab 1 ta arrayga aylantiradi.
// let nestedArr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
// let arr = nestedArr.flat(0);
// let arr = nestedArr.flat();
// let arr = nestedArr.flat(Infinity);
// console.log(arr);



// flatMap = flat + map – bu return ga qaytarilgan array ni parchalardi va
// 1 ta array yaratib beradi.
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((value) => [value ** 2]);
// console.log(newArr);
// let newArr = arr.flatMap((value) => [value ** 2]);
// console.log(newArr);


// fill – Array ichidagi bosh joylarni qiymat bilan to'ldirib beradi.
// 1. [] ✅
// 2. Array() ✅
// 3. new Array() ❌



// let arr1 = [3];
// console.log(arr1);
// let arr2 = Array(3);
// let arr = arr2.fill("Algoritm");
// let arr = arr2.fill(0);
// console.log(arr);




// copyWithin – arrayning bir qismini copy qilib boshqa qismiga joylab beradi.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// [6, 7, 8, 9, 5, 6, 7, 8, 9]
// [1, 2, 3, 4, 5, 1, 2, 3, 4]
// let copyArr = arr.copyWithin(5, 0, 5);
// console.log(copyArr);



// let arr = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 17 },
//   { name: "Sami", age: 20 },
//   { name: "John", age: 30 },
// ];

// let a = arr.filter((value, index, a) => value.age > 18 && value.name.toLowerCase().includes("a"));
// console.log(a);



// for(let i = 1; i <= 50; i++){      
//         if(i%10 === 0)console.log(i);
//     }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newArr = arr.reduce((acc, cur)=>{
//     if(!(cur%2)) return acc * cur
//     return acc
// }, 1)
// console.log(newArr);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = arr.reduce((acc, sum) => !(sum % 2) || !(sum % 3) ?acc + sum : acc, 0)
// console.log(sum);


















































//videodars



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = arr.reduce((acc, cur) => {
//     if(cur % 2) return acc * cur
//     return acc
// }, 1);
// console.log(sum)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = arr.reduce((acc, cur) => {
//     if(!(cur % 2)) return acc * cur
//     return acc
// }, 1);
// console.log(sum)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = arr.reduce((acc, cur) => {
//     if(cur % 3  === 0 || cur % 2 === 0 ) return acc + cur
//     return acc
// }, 0);
// console.log(sum)


// reduce
// reduce(() => {}, 0)
// reduce((acc, cur) => {}, 0)
// 1. accumulator
// 2. currentValue

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((acc, cur) => acc * cur, 1);
// console.log(sum);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum1 = arr.reduce((acc, cur) => {
//   if (cur % 2 === 0) return acc + cur
//   return acc
// }, 0);
// console.log(sum1)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum2 = arr.reduce((acc, cur) => cur % 2 === 0 ? acc + cur : cur, 0);
// console.log(sum2)

// let mul = arr.reduce((acc, cur) => cur % 2 ? acc + cur : cur, 1);
// console.log(mul)

// let mul = arr.reduce((acc, cur) => {
//     if(!(cur % 2)) return acc + cur
//     return acc
// }, 1)
// console.log(mul)













console.log("//////////////////////////////////////////////");

let arr1 = [
  { name: "Telefon", price: 3500000 },
  { name: "Quloqchin", price: 250000 },
  { name: "Noutbuk", price: 7800000 }
];

let aer1 = arr1.filter((product) => {
  return product.price > 1000000;
});

console.log(aer1);


console.log("//////////////////////////////////////////////");

let arr2 = [
  { name: "Ali", ball: 56 },
  { name: "Vali", ball: 88 },
  { name: "Sami", ball: 71 },
  { name: "Olim", ball: 44 }
];

let aer2 = arr2.filter((student) => {
  return student.ball >= 60;
});

console.log(aer2);
console.log("//////////////////////////////////////////////");

let arr3 = [
  { name: "Ali", active: true },
  { name: "Vali", active: false },
  { name: "Sami", active: true }
];

let aer3 = arr3.filter((user) => {
  return user.active === true;
});

console.log(aer3);


console.log("//////////////////////////////////////////////");

let arr4 = [
  "Ali Valiyev",
  "Sami Karimov",
  "Olim Hasanov"
];

let aer4 = arr4.map((name) => {
  return name.toLowerCase().replaceAll(" ", "_");
});

console.log(aer4);


console.log("//////////////////////////////////////////////");


let arr5 = [100000, 250000, 80000];

let aer5 = arr5.map((price) => {
  return price * 1.12;
});

console.log(aer5);



console.log("//////////////////////////////////////////////");


let arr6 = [
  { name: "Ali", age: 20 },
  { name: "Vali", age: 25 }
];

let aer6 = arr6.map((user) => {
  return `${user.name} (${user.age} yosh)`;
});

console.log(aer6);



let arr7 = [
  { name: "Ali", ball: 78 },
  { name: "Vali", ball: 42 },
  { name: "Sami", ball: 91 }
];



console.log("//////////////////////////////////////////////");
arr7.forEach((arr7) => {
  if (arr7.ball >= 60) {
    console.log(`${arr7.name} - O‘tdi`);
  } else {
    console.log(`${arr7.name} - Yiqildi`);
  }
});
















