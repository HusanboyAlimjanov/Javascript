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