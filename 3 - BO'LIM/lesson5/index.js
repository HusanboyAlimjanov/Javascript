// let arr = [1, 2, 3, 4, 5];

// // forEach
// let sum = 0;
// arr.forEach((value, index, a) => {
//     sum += value;
// });
// console.log(sum);

// // map
// // [1, 4, 9, 16, 25]
// let newArr = arr.map((value, index, a) => {
//     // return value * value;
//     value ** 2;
//     // return Math.pow(value, 2);
// });

// console.log(newArr);

// // let sortArr = arr.sort((a, b) => a - b);
// // console.log(sortArr);

// // [2, 3, 5, 7, 10, 18]

// let arr = ["Oxford", "algoritm", "start 21"];

// let sortArr = arr.sort((a, b) => a.localeCompare(b));

// // console.log(sortArr);


//  // [2, 3, 5, 7, 10, 18]

// // let arr = ["Oxford", "algoritm", "start 21"];
// // let sortArr = arr.sort((a, b) => a.localeCompare(b));
// // console.log(sortArr);

// let arr = Array(5).fill("Salom", 0, 2).fill("Alik");

// console.log(arr);


//  // reduce
// let arr = [1, 2, 3, 4, 5];

// let qiymat = arr.reduce((sum, cur) => {
//     if (cur % 2 === 1) return sum + cur;
//     return sum;
// }, 0);

// console.log(qiymat);


// // Array.isArray - Tekshirilayotgan qiymat rostdan ham Arraymi?

// let data1 = {};
// let data2 = [];

// // console.log(typeof data1);
// // console.log(typeof data2);

// if (Array.isArray(data1)) {
//     data1.push(1, 2, 3);
// } else if (Array.isArray(data2)) {
//     data2.push(1, 2, 3);
// }


// let str = "Gulmat";
// ["G", "u", "l", "m", "a", "t"]
// console.log(str.split(""));
// console.log(Array.from(str));

// let arr = [1, true, false, "Olma"];
// console.log(arr);

// console.log(Array.of(1, "salom", "Olma", true, null));

// immutable - Arrayni o'ziga tasir qilmaydi.
// let arr = [1, 2, 3, 4, 5];
// let copyArr = arr.slice(0, 2);
// console.log(arr);

// mutable - Arrayni o'ziga tasir ko'rsatadi.









// Mutable — push(),	pop(),	shift(),  unshift(),	splice(),	sort(),	reverse(),	fill()
//immutable - forEach(), indexOf(), lastIndexOf(), findIndex(), findLast(), findLastIndex(), some(), every(), reduce(), join(), at()	






let students = [
{ id: 1, ism: "Abdurahmon", yosh: 13, ball: 97 },
{ id: 2, ism: "Hayotbek", yosh: 14, ball: 82 },
{ id: 3, ism: "Ibrohim", yosh: 14, ball: 70 },
{ id: 4, ism: "Mubosher", yosh: 12, ball: 70 },
{ id: 5, ism: "Muhammadyusuf", yosh: 13, ball: 70 },
{ id: 6, ism: "Azizbek", yosh: 14, ball: 75 },
{ id: 7, ism: "Abrorbek", yosh: 14, ball: 78 },
{ id: 8, ism: "Muhammadali", yosh: 13, ball: 70 },
{ id: 9, ism: "Husanboy", yosh: 13, ball: 80 },
{ id: 10, ism: "Abubakr", yosh: 14, ball: 75 },
{ id: 11, ism: "Abdulaziz", yosh: 14, ball: 80 },
];















// let ballar = Object.groupBy(students, (std) =>std.ball)
// console.log(ballar);

// function wer(data1, key){
//     return data1.sort((a, b) => a[key].localeCompare(b[key]))
// }
// let sortdata = wer(students, "ism")

// console.log(sortdata);






































// video
// let students = [
//   { id: 1, ism: "Abdurahmon", yosh: 13, ball: 97 },
//   { id: 2, ism: "Hayotbek", yosh: 14, ball: 82 },
//   { id: 3, ism: "Ibrohim", yosh: 14, ball: 70 },
//   { id: 4, ism: "Mubosher", yosh: 12, ball: 70 },
//   { id: 5, ism: "Muhammadyusuf", yosh: 13, ball: 70 },
//   { id: 6, ism: "Azizbek", yosh: 14, ball: 75 },
//   { id: 7, ism: "Abrorbek", yosh: 14, ball: 78 },
//   { id: 8, ism: "Muhammadali", yosh: 13, ball: 70 },
//   { id: 9, ism: "Husanboy", yosh: 13, ball: 80 },
//   { id: 10, ism: "Abubakr", yosh: 14, ball: 75 },
//   { id: 11, ism: "Abdulaziz", yosh: 14, ball: 80 },
// ];

// let qoniqarli = "A'lo darajada";
// let qoniqarsiz = "Ko'proq harakat qilish kk.";
// let obj = {}
// for(let value of students){
//     if(obj[value.yosh]) obj[value.yosh].push(value)
//     else obj [value.yosh] = [value]
// }
// console.log(obj)

// object.groupBy

// object.groupBy("Data", "Collbaek")

// let obj = Object.groupBy(students, (std) => std.yosh)
// console.log(obj)

// let obj = Object.groupBy(students, (std) => std.ism[0])
// console.log(obj)

// let obj = Map.groupBy(students, (std) => {
//     if(std.ball >= 80) return qoniqarli
//     return qoniqarsiz
// })

// console.log(obj)

// =============================================

// function ddd(student) {
//   student = { id: students.length + 1, ...student };
//   students.push(student);
//   return students;
// }

// ddd({ ism: "Abdukomil", yosh: "14", ball: 50 });
// ddd({ ism: "Azimjon", yosh: "11", ball: 30 });
// ddd({ ism: "Abdulaziz", yosh: "11", ball: 35 });
// ddd({ ism: "ilhomjon", yosh: "13", ball: 60 });
// console.log(students);

// function nam(data, key) {
//   return data.sort((a, b) => a[key].localeCompare(b[key]));
// }     
// let sord = nam(students, "ism");
// console.log(sord);







