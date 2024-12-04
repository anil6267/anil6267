console.log("---------Welcome in JS---------")

// //        0 1 2 3 4 5 6 7 8 9
// var arr = [5, 6, 2, 7, 8, 1,3, 5, 4, 6, ];

// // select element :

// const n4 = arr[3]; // 7
// console.log("4th value :", n4);

// // update element : at 7th posion
// arr.splice(7, 1, 999);

// console.log("----Updated Array----",arr);

// //Detete element: at 5th positon:
// arr.splice(5, 1);

// console.log("-----array after deleted-----:",arr);

// const arr = [1, 4, 5, 6, 73, 2, 4,];
// const k = 5;

// //get length of an array : arr.length:

// for(let i = 0;i< arr.length; i++) {
//     const arr_i = arr[i];
//     if (arr_i === k){
//         arr.splice(i, 1)
//     }
// }

// // console.log("updated array :", arr):

// consst arr = [1, 4, 5, 6, 73, 2, 4,];

// //traversal:

// for (let i = 0; i < arr.length;i++) {
//     let arr_i = ar[i];

//     //if(arr_i === 5){ 
//     console.log("my array value :", arr_i){

//     }
// }
// //objects:

// //Type of Data:

// // number n = 5 ,5.33
// // string s = "hello"
// //char c = "hello"
let student_id_card = {
    // key : value,
      name: "Anil",
      rollnumber: 246041,
      address:"gram netyakhedi",
      branch: "cst",
      dob:"21-01-2005",
};
const myaddress1 = student_id_card.address;
const mybranch = student_id_card["branch"];

console.log(myaddress1, mybranch);

student_id_card id = 34;

console.log(student_id_card)