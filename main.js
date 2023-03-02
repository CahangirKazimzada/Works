// let array = [1, 2, 3, 4, 4, 4, 5, 5];
// n = prompt();
// let count = 0;
// for(let i of array){
//     if(i == n){
//         count++;
//     }
// };
// console.log(count);

//Tasks

// function random_Number(){
//     let rand = Math.floor(Math.random() * 10) + 1;
//     a = prompt("Eded daxil edin");
//     if(rand === a){
//         console.log("Eded tapildi");
//     }
//     else{
//         console.log("Eded tapilmadi");
//     }
// }
// random_Number();
//-------------------------------------------------------------------
// const firstValue = document.getElementById("firstValue");
// const secondValue = document.getElementById("secondValue");
// const element1 = document.getElementById("multiply");
// const element2 = document.getElementById("divide");
// let result = document.getElementById("result");

// eventListeners();
// function eventListeners(){
//     element1.addEventListener("click", multiply);
//     element2.addEventListener("click", divide);
// }
// function multiply(e){
//     result.innerHTML = firstValue.value*1*secondValue.value*1;
// }
// function divide(e){
//     result.innerHTML = firstValue.value*1 / secondValue.value*1;
// }
//-------------------------------------------------------------------
// function convert_degree(degree_type, degree_value){
//     if (degree_type === "f"){
//         console.log(((degree_value - 32) / 9) * 5, "C");
//     }
//     else if(degree_type === "c"){
//         console.log((9*degree_value / 5) + 32, "F");
//     }
//     else{
//         console.log("Undefined");
//     }
// }
// degree_type = prompt("degree type? ");
// degree_value = prompt("degree? ");
// convert_degree(degree_type, degree_value);
//---------------------------------------------------------------------
// function diff(num){
//     s = num - 13
//     if(s > 13){
//         s *= 2;
//     }
//     return s;
// }
// num = prompt();
// alert(diff(num));
//----------------------------------------------------------------------
let str = "Cahangir";
// mid_char = str.substring(1, str.length - 1);
//console.log(str[str.length - 1]);

// console.log(str[str.length - 1]);
// console.log(str[0]);
// console.log(str.slice(1, str.length - 1));
str = `${str[str.length - 1]}${str.slice(1, str.length - 1)}${str[0]}`;
console.log(str);
