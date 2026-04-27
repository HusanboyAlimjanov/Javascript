// // let a = 10
// // let b = 20
// // //1. function decloration
// // function functionName(r1 , r2){
// //     let bolinma = r2 / r1
// //     return bolinma
// // }


// // console.log(functionName(a, b))



// // //2. expression function
// // const functionName2 = function(r3, r4){
// //     let bolinma = r4 - r3
// //     return bolinma
// // }

// // console.log(functionName2(a, b));

// // //arrow function
// // const functionName3 = (r5, r6) =>{
// //     let bolinma = r6 - r5
// //     return bolinma
// // }
// // console.log(functionName3(a, b));


// // // //1. function decloration
// // let start = 1
// // let stop = 10
// // function summa(a, b){
// //     let yigindi = 0
// //     for(let i = a; i <= b; i++){
// //         yigindi += i
// //     }
// //     return yigindi
// // }

// // console.log(summa(start, stop))
// // // //2. expression function
// // const summa2 = function(a, b){
// //     yigindi = 0
// //     for(let i = 1; i <= b; i++){
// //         yigindi += i
// //     }
// //     return yigindi
// // }
// // console.log(summa2(start, stop))
// // // //arrow function

// // const summa3 = (a, b) =>{
// //     yigindi = 0
// //     for(let i = 1; i <= b; i++){
// //         yigindi += i
// //     }
// //     return yigindi
// // }
// // console.log(summa3(start, stop));


// //function decloration
// // let a = 7
// // let b = 7

// // function kattaSonniTop(raqam1, raqam2){
// //     if(raqam1 > raqam2){
// //         console.log(raqam1, "katta")
// //         console.log(raqam2, "kichik")
// //     }else if(raqam2 > raqam1){
// //         console.log(raqam2, "katta")
// //         console.log(raqam1, "kichik") 
// //     }else{
// //         console.log(raqam1, "bilan", raqam2, "teng")
// //     }
// // }

// // kattaSonniTop(a, b)
// //expression function













// //vazifa
// const far1 = function(a) {
//   if (a % 2 === 0) {
//     console.log(a, "juft");
//   } else {
//     console.log(a, "toq");
//   }
// };
// far1(5);

// // 2. 
// const ftr2 = function(a) {
//   if (a > 0) {
//     console.log(a, "musbat");
//   } else if (a < 0) {
//     console.log(a, "manfiy");
//   } else {
//     console.log("nol");
//   }
// };
// ftr2(-3);

// // 3. 
// const fxr3 = function(a) {
//   if (a % 3 === 0) {
//     console.log(a, "3 ga bolinadi");
//   } else {
//     console.log(a, "3 ga bolinmaydi");
//   }
// };
// fxr3(9);

// // 4. 
// const fzr4 = function(a, b) {
//   if (a > b) {
//     console.log(a, "katta");
//   } else if (b > a) {
//     console.log(b, "katta");
//   } else {
//     console.log("teng");
//   }
// };
// fzr4(4, 7);

// // 5. 
// const fjr5 = function(a) {
//   if (a > 5) {
//     console.log(a, "5 dan katta");
//   } else {
//     console.log(a, "5 dan kichik yoki teng");
//   }
// };
// fjr5(3);
// // 7. 
// const fkr7 = function(a, b) {
//   console.log( a + b);
// };
// fkr7(2, 3);

// // 8. Son kvadrati
// const fpr8 = function(a) {
//   console.log(a * a);
// };
// fpr8(4);

// // 9. 
// const flr9 = function(a) {
//   if (a === 0) {
//     console.log("nol");
//   } else {
//     console.log("nol emas");
//   }
// };
// flr9(0);

// // 10. 
// const fur10 = function(a) {
//   if (a > 10) {
//     console.log(a, "katta");
//   } else {
//     console.log(a, "kichik");
//   }
// };
// fur10(15);


// // ARROW FUNCTION
// // 1. Juft/toq
// const fr1 = (a) => {
//   if (a % 2 === 0) {
//     console.log(a, "juft");
//   } else {
//     console.log(a, "toq");
//   }
// };
// fr1(6);

// // 2. Musbat/manfiy
// const rar2 = (a) => {
//   if (a > 0) {
//     console.log(a, "musbat");
//   } else if (a < 0) {
//     console.log(a, "manfiy");
//   } else {
//     console.log("nol");
//   }
// };
// rar2(-2);

// // 3. 
// const for3 = (a) => {
//   if (a % 4 === 0) {
//     console.log("bolinadi");
//   } else {
//     console.log("bolinmaydi");
//   }
// };
// for3(8);

// // 4. 
// const fir4 = (a, b) => {
//   if (a > b) {
//     console.log(a, "katta");
//   } else if (b > a) {
//     console.log(b, "katta");
//   } else {
//     console.log("teng");
//   }
// };
// fir4(5, 5);

// // 5. 
// const fer5 = (a) => {
//   if (a > 0) {
//     console.log("musbat");
//   } else {
//     console.log("musbat emas");
//   }
// };
// fer5(-1);
// // 7. 
// const dar7 = (a, b) => {
//   console.log( a + b);
// };
// dar7(7, 3);

// // 8. 
// const aar8 = (a) => {
//   console.log(a * a);
// };
// aar8(6);

// // 9.
// const qar9 = (a) => {
//   if (a === 0) {
//     console.log("nol");
//   } else {
//     console.log("nol emas");
//   }
// };
// qar9(2);

// // 10.
// const war10 = (a) => {
//   if (a > 10) {
//     console.log("katta");
//   } else {
//     console.log("kichik");
//   }
// };
// war10(10);

