let arr = [1, 2, 3, 4, 5];

// forEach
let sum = 0;
arr.forEach((value, index, a) => {
    sum += value;
});
console.log(sum);

// map
// [1, 4, 9, 16, 25]
let newArr = arr.map((value, index, a) => {
    // return value * value;
    value ** 2;
    // return Math.pow(value, 2);
});

console.log(newArr);

// let sortArr = arr.sort((a, b) => a - b);
// console.log(sortArr);

// [2, 3, 5, 7, 10, 18]

let arr = ["Oxford", "algoritm", "start 21"];

let sortArr = arr.sort((a, b) => a.localeCompare(b));

// console.log(sortArr);


 // [2, 3, 5, 7, 10, 18]

// let arr = ["Oxford", "algoritm", "start 21"];
// let sortArr = arr.sort((a, b) => a.localeCompare(b));
// console.log(sortArr);

let arr = Array(5).fill("Salom", 0, 2).fill("Alik");

console.log(arr);


 // reduce
let arr = [1, 2, 3, 4, 5];

let qiymat = arr.reduce((sum, cur) => {
    if (cur % 2 === 1) return sum + cur;
    return sum;
}, 0);

console.log(qiymat);


// Array.isArray - Tekshirilayotgan qiymat rostdan ham Arraymi?

let data1 = {};
let data2 = [];

// console.log(typeof data1);
// console.log(typeof data2);

if (Array.isArray(data1)) {
    data1.push(1, 2, 3);
} else if (Array.isArray(data2)) {
    data2.push(1, 2, 3);
}


// let str = "Gulmat";
// ["G", "u", "l", "m", "a", "t"]
// console.log(str.split(""));
// console.log(Array.from(str));

// let arr = [1, true, false, "Olma"];
// console.log(arr);

// console.log(Array.of(1, "salom", "Olma", true, null));

// immutable - Arrayni o'ziga tasir qilmaydi.
let arr = [1, 2, 3, 4, 5];
let copyArr = arr.slice(0, 2);
console.log(arr);

// mutable - Arrayni o'ziga tasir ko'rsatadi.









// Mutable — push(),	pop(),	shift(),  unshift(),	splice(),	sort(),	reverse(),	fill(),	copyWithin()
//immutable - forEach(), indexOf(), lastIndexOf(), findIndex(), findLast(), findLastIndex(), some(), every(), reduce(), join(), at()	
