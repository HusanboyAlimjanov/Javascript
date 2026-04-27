//argument and parametr funksiyalari
// function xisobla(stop){
//     let ty = 0
//     let jy = 0
//     for(let a = 1; a <= stop; a++){
//         if(a % 2 === 1) ty += a
//         else jy += a
//     }
//     console.log(jy - ty);   
// }


// xisobla(30)
// xisobla(20)
// xisobla(10)















































//vazifa
// 1
function xisobla(stop) {
    for (let i = 5; i <= 15; i++) {
        console.log(i)
    }
}
xisobla(10)
//2
function xisobla2(stop) {

    let n = 1
    for (let i = 1; i <= 200; i++) {
        if (n += i)
            console.log(n)
    }
}
xisobla2(10)
3
function xisobla3(stop) {
    for (let raqam = 1; raqam <= 60; raqam++) {
        if (raqam % 2 === 0)
            console.log(raqam);

    }
}
xisobla3()
//4


function xisobla4(stop) {

    for (let raqam = 1; raqam <= 60; raqam++) {
        if (raqam % 2 === 1)
            console.log(raqam);

    }
}
xisobla4()
//5
function xisobla5(stop) {

    let n = 20
    let k = n * n * n
    for (let i = 1; i <= n; i++) {
        console.log(k)
    }
}
xisobla5()
//6
function xisobla6(stop) {

    let n = 27
    let count = 0
    for (let i = 1; i <= n; i++) {
        if (i % 4 === 0) count++
    }
    console.log(count);
}
xisobla6()
//7
function xisobla7(stop) {
    let kopaytma = 0
    let n = 200;
    for (let i = 1; i <= n; i++) {
        kopaytma += i;
    }
    console.log(kopaytma)
}
xisobla7()
//8
function xisobla8(stop) {

    for (let i = 1; i <= 150; i++) {
        if (i % 3 === 0 && i % 5 === 0)
            console.log(i)


    }
}
xisobla8()
//9
function xisobla9(stop) {

    for (let i = 20; i >= 1; i--) {
        console.log(i)
    }
}
xisobla9()
//10
function xisobla10(stop) {

    for (let raqam = 1; raqam <= 10; raqam++) {
        if (raqam % 2 === 0)
            console.log(raqam);

    }
}
xisobla10()
//11
// function xisobla11(stop){

// let n = 20
// for (let raqam = 1; raqam <= n; raqam--){
//     if(raqam %2 === 0)
//     console.log(raqam);

// }
// }
// xisobla11()
//12
function xisobla12(stop) {

    let n = 100
    for (let raqam = 1; raqam <= n; raqam++) {
        if (raqam < 2) console.log(raqam)
    }
}
xisobla12()
//13
function xisobla13(stop) {

    let n = 30
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0)
            console.log(i);
    }
}
xisobla13()
//14
function xisobla14(stop) {

    let n = 30
    for (let raqam = 1; raqam <= n; raqam++) {
        if (raqam < 20) console.log(raqam)
    }
}
xisobla14()

//15
function xisobla15(stop) {

    let n = 9;
    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= 10; k++) {
            console.log(`${i} + ${k} = ${i + k}`);
        }
        console.log("===========================")
    }
}
xisobla15()
//16
function xisobla16(stop) {

    for (let raqam = 1; raqam <= 100; raqam++) {
        if (raqam % 9 === 0) console.log(raqam)
    }
}
xisobla16()
