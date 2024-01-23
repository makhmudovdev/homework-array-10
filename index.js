// const desktop = {
//     name : "acer",
//     data : "2022",
//     color : "darkblue",
//     memory : "256 GB",
//     cpu: "8GB", 
//     batteryTime: "4/hours",
    
    
// getFullname: function () {
//     console.log("acer , 2022 , darkblue , 256 GB");
// },

// getHarakter: function () {
//     console.log("256 GB , 8GB , 4/hours");
// }
// };

// console.log(desktop);


// delete desktop.data //----------------------



// const cals = {
//     add: function (a, b) {
//         return a + b;
//     },

//     subtraction: function (a, b) {
//         return a - b;
//     },

//     increase: function (a, b) {
//         return a * b;
//     },

//     tobe: function (a, b) {
//         return a/ b;
//     },
// };

// console.log(cals.tobe(10, 5));


// ------------------------------------------------------------------------------------------//

// const car = {
//     name : "Gentra",
//     maxspeed : "220KM",
//     data : "2023",
//     color : "black",
//     marka : "Chevrolet",
//     horsepower: "107ta", 
//     motorpower: "1.5L",
//     luggagecapacity : "405L",
//     price : "18.000$",
//     fulHaracters : function(){
//         console.log(this.name + " " + this.maxspeed + " " + this.data + " " + this.marka);
//     }

// };

// car.fulHaracters();



// ------------------------------------------------------------------------------------------//


// let products = [
//     {
//         name: "olma",
//         price: 12000
//     },

//     {
//         name: "Kartoshka",
//         price: 5000
//     },

//     {
//         name: "Non",
//         price: 2800
//     },
// ];

// let summa = 0
// for(let i = 0; i<products.length; i++){
//     summa += products[i].price;
// }

// console.log(summa);




// let year = [
//     {
//         name: "Abdulaziz",
//         age: 33
//     },

//     {
//         name: "Erkin",
//         age: 22
//     },

//     {
//         name: "Sardor",
//         age: 34
//     },

//     {
//         name: "Temur",
//         age: 20
//     },
// ];


// let summa = 0
// for(let i = 0; i<year.length ; i++){
//     summa += year[i].age;
// }

// console.log((summa/year.length));






















// --------------------------------------------------- homework -------------------------------------------//


// --------------------------------  1 masala ---------------------------//

// function nabbers(n) {
//     let arr = [];
//     for(let i = 0; i <= n; i++){
//         arr.push(i);
//     }
//     return arr ;
// } 

// let naber = nabbers(10);
// console.log(naber);

//------------------------------------------------------


// --------------------------------  2 masala ---------------------------//

// function nDaraja (n){
//     let arr = [];
//     for(let i = 0; i<= n; i++){
//         arr.push( 2 ** i);
//     }
//     return arr;
// }

// let daraja = nDaraja(10);
// console.log(daraja);

// -----------------------------------------------


// --------------------------------  3 masala ---------------------------//

// function qiymat (n){
//     let arr = [];
//     let sum = 0; 
//     for(let i = 0; i<= n; i++){
//         arr.push(i);
//         sum+=i;
//     }
//     return `[${arr}] massivning qiymatlarining yigindisi ${sum} ga  ten`;
// }

// let resalt = qiymat(15);
// console.log(resalt);

// --------------------------------------------------------


// --------------------------------  4 masala ---------------------------//

// function togYigindi (n){
//     let arr = [];
//     let toq = 0;
//     let juft = 0
//     for(let i = 0; i< n ; i++){
//         arr.push(i*10);
//         if(i % 2 != 0){
//             toq += arr[i];
//         }else
//             juft-=arr[i];
//     }
//     console.log(arr);
//     console.log(`tog indexstegi qiymatlarnig yigindisi ${toq}`);
//     console.log(`juft indexstegi qiymatlarnig ayirmasi ${juft}`);
// }

// togYigindi(10);

//---------------------------------------------------------------------


// --------------------------------  5 masala ---------------------------//

// function yigindi (n){
//     let arr = [];
//     let sum = 0; 
//     for (let i = 0; i < n ; i++ ){
//         arr[i]= +prompt(`${i} - indexs uchun ucun son kiriting`);
//         sum += arr[i];
//     }
//     console.log(arr);
//     console.log(sum);
// }
// yigindi(10);


// --------------------------------  6 masala ---------------------------//

// function namber (n){
//     let arr = [];
//     for (let i = n; i >= 0 ; i--){
//         arr.push(i);
//     }
//     return arr;
// }

// let rsalt = namber(10);
// console.log(rsalt);

// ---------------------------------------------------


// --------------------------------  7 masala ---------------------------//
// let a = [];
// let b = [];
// let c = [];

// a["ism"] = "Kamol";
// a["yosh"] = 22;
// b["ism"] = "Abror";
// b["yosh"] = 17;
// c["ism"] = "Sobir";
// c["yosh"] = 25;

// let farqAb = Math.abs(a["yosh"]-b["yosh"]);
// let farqAc = Math.abs(a["yosh"]-c["yosh"]);
// let farqBc = Math.abs(b["yosh"]-c["yosh"]);

// console.log(${a["ism"]} va ${b["ism"]}ning yosh farqi ${farqAb} yosh);
// console.log(${a["ism"]} va ${c["ism"]}ning yosh farqi ${farqAc} yosh);
// console.log(${b["ism"]} va ${c["ism"]}ning yosh farqi ${farqBc} yosh);





//-----------------------------------------------------


// --------------------------------  8 masala ---------------------------//

// function naber(n) {
//     let arr =[];
//     let sum = 0;
//     for(let i = 0; i <= n; i++){
//         arr.push(i);
//     }
//     let k = arr[1];
//     let l = arr.length-2;
//     for (k ; k <= l; k++ ){
//         sum += arr[k]
//     }
//     console.log(arr);
//     console.log(sum);
    
// }

// naber(6);

//---------------------------------------------


// --------------------------------  9 masala ---------------------------//

// function naber(n) {
//     let arr = [];
//     let j = 0;
//     for(let i = 0; i <= n ; i++){
//         arr.push("M" + i);
//         if(i % 2 == 0){
//             j = i ;
//         }
//     }
//     console.log(arr);
//     console.log(`[${arr}] array ning juft indekislari ichida en kattasi ${j}-indeks`);
    
// }
// naber(20);

//-------------------------------------------------------------------------------//


// --------------------------------  10 masala ---------------------------//

// function engKichikJuft(arr) {

//     var juftIndeksArray = [];
//     for (var i = 0; i < arr.length; i += 2) {
//         juftIndeksArray.push(arr[i]);
//     }

//     var engKichik = juftIndeksArray[0];
//     for (var j = 1; j < juftIndeksArray.length; j++) {
//         if (juftIndeksArray[j] < engKichik) {
//             engKichik = juftIndeksArray[j];
//         }
//     }

//     return engKichik;
// }
// var testArray = [5, 2, 9, 1, 7, 4, 8, 3, 6];
// var natija = engKichikJuft(testMassiv);

// console.log("Massiv orasidagi juft indekslari ichidan eng kichigi: " + natija);



// --------------------------------  11 masala ---------------------------//


// function engKattaToq(arr) {
//     var toqIndeksArray = [];
//     for (var i = 1; i < arr.length; i += 2) {
//         toqIndeksArray.push(arr[i]);
//     }

//     var engKatta = toqIndeksArray[0];
//     for (var j = 1; j < toqIndeksArray.length; j++) {
//         if (toqIndeksArray[j] > engKatta) {
//             engKatta = toqIndeksArray[j];
//         }
//     }

//     return engKatta;
// }
// var testArray = [5, 2, 9, 1, 7, 4, 8, 3, 6];
// var natija = engKattaToq(testMassiv);

// console.log("Array orasidagi toq indekslari ichidan eng kattasi: " + natija);



// --------------------------------  12 masala ---------------------------//

// function ortaArifmetika(arr) {
//     var yigindi = 0;
//     var uzunlik = arr.length;

//     for (var i = 0; i < uzunlik; i++) {
//         yigindi += arr[i];
//     }
//     var ortaArifmetika = yigindi / uzunlik;

//     return ortaArifmetika;
// }
// var testArray = [5, 2, 9, 1, 7, 4, 8, 3, 6];
// var natija = ortaArifmetika(testMassiv);

// console.log("Arrayning o'rta arifmetikasi: " + natija);



// --------------------------------  13 masala ---------------------------//


// function toqIndeksElementlari(arr) {
//     var toqIndeksElementlari = [];
//     for (var i = 1; i < arr.length; i += 2) {
//         toqIndeksElementlari.push(arr[i]);
//     }

//     return toqIndeksElementlari;
// }
// var testArray = [5, 2, 9, 1, 7, 4, 8, 3, 6];
// var toqIndeksElements = toqIndeksElementlari(testMassiv);
// console.log("To'q indeksli elementlar: " + toqIndeksElements);




// --------------------------------  14 masala ---------------------------//


// function murakkabSonlar(arr) {
//     var murakkabSonlar = [];
//     for (var i = 0; i < arr.length; i++) {
//         var indeksStr = i.toString();
//         if (indeksStr.includes('1') || indeksStr.includes('4') || indeksStr.includes('6') || indeksStr.includes('8') || indeksStr.includes('9')) {
//             murakkabSonlar.push(arr[i]);
//         }
//     }
//     return murakkabSonlar;
// }
// var testArray = [5, 2, 9, 1, 7, 4, 8, 3, 6];
// var murakkabSonlarArrayi = murakkabSonlar(testArray);
// console.log("Indeksini murakkab sondan iborat bo'lgan elementlar: " + murakkabSonlarArrayi);



// --------------------------------  15 masala ---------------------------//


// function toqIndeksQiymatlar(arr) {
//     var toqIndeksQiymatlar = [];
//     for (var i = 1; i < arr.length; i += 2) {
//         toqIndeksQiymatlar.push(arr[i]);
//     }

//     return toqIndeksQiymatlar;
// }
// var testArray = [5, 2, 9, 1, 7, 4, 8, 3, 6];
// var toqIndeksQiymatlarArrayi = toqIndeksQiymatlar(testMassiv);
// console.log("Toq indeksdagi qiymatlar: " + toqIndeksQiymatlarArrayi);



// --------------------------------  16 masala ---------------------------//

// function stringQiymatlar(arr) {

//     var stringQiymatlar = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'string') {
//             stringQiymatlar.push(arr[i]);
//         }
//     }

//     return stringQiymatlar;
// }
// var testMassiv = [5, "salom", 9, "bu", 7, "string", 8, 3, "qiymatlar"];
// var stringQiymatlarArrayi = stringQiymatlar(testArray);
// console.log("String tipidagi qiymatlar: " + stringQiymatlarArrayi);



// --------------------------------  17 masala ---------------------------//


// function tengQiymatlar(a, b) {
//     if (a.length !== b.length) {
//         return "Arraylarning uzunligi teng emas.";
//     }
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] !== b[i]) {
//             return "Arraylarning " + (i + 1) + "-chi indeksidagi qiymatlar bir xil emas: " + a[i] + " ≠ " + b[i];
//         }
//     }

//     return "Arraylarning barcha elementlari bir xil.";
// }
// var a = [1, 2, 3, 4, 5];
// var b = [1, 2, 3, 4, 5];
// var natija = tengQiymatlar(a, b);
// console.log(natija);



// --------------------------------  18 masala ---------------------------//



// var n = prompt("Array uzunligini kiriting:");
// n = parseInt(n);
// var array = [];
// for (var i = 0; i < n; i++) {
//     var qiymat = prompt((i + 1) + "-chi indeksdagi qiymatni kiriting:");
//     array.push(parseInt(qiymat));
// }
// console.log("Yaratilgan array: " + array);



// --------------------------------  19 masala ---------------------------//


// var n = prompt("Massiv uzunligini kiriting:");
// n = parseInt(n);
// var massiv = [];
// for (var i = 0; i < n; i++) {
//     var qiymat = prompt((i + 1) + "-chi indeksdagi qiymatni kiriting:");
//     massiv.push(parseInt(qiymat));
// }
// var yigindi = 0;
// for (var j = 0; j < massiv.length; j++) {
//     yigindi += massiv[j];
// }

// console.log("Yaratilgan massiv: " + massiv);
// console.log("Massiv yig'indisi: " + yigindi);



// --------------------------------  20 masala ---------------------------//


// var n = prompt("Massiv uzunligini kiriting:");
// n = parseInt(n);
// var massiv = [];
// for (var i = 0; i < n; i++) {
//     var qiymat = prompt((i + 1) + "-chi indeksdagi qiymatni kiriting:");
//     massiv.push(parseInt(qiymat));
// }
// var tip = prompt("Juft yoki toq kiriting (juft/toq):");
// var ajratilganMassiv = [];
// for (var j = 0; j < massiv.length; j++) {
//     if ((tip === 'juft' && j % 2 === 0) || (tip === 'toq' && j % 2 !== 0)) {
//         ajratilganMassiv.push(massiv[j]);
//     }
// }
// console.log(tip.charAt(0).toUpperCase() + tip.slice(1) + " indekslardagi qiymatlar: " + ajratilganMassiv);


// --------------------------------  homework end ---------------------------//
