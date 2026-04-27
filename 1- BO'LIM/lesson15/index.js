// let obj = {
//     ism: "Husanboy",
//     familiya: "Alimjanov",
//     yosh: 13,
//     kurs: "frontend",
// }

//1. static
// obj.ism = "Azizbek";
// obj.familiya = "Abdukarimov";
// obj.yosh = 15;
// obj.kurs = "JavaScript";
// console.log(obj)

//2. dinamic

// obj["ism"] = "Mubosher";
// obj["familiya"] = "Xojiyev";
// obj["yosh"] = 12;
// obj["kurs"] = "Backend";

// console.log(obj);
// let obj = {
//     ism: "Husanboy",
//     familiya: "Alimjanov",
//     yosh: 13,
//     kurs: "frontend",
// }

// for(let i in obj){
//     console.log(i, obj[i]);   
// }




let laptop = {
    name: "Macbook",
    contry: "USA",
    price: 1000,
}

let newlaptop = {}
for(let key in laptop){
    if(typeof laptop[key] === "number"){
        newlaptop[key] = laptop[key] / 2
    }else{
        newlaptop[key] = laptop[key]
    }
}
console.log(newlaptop);
