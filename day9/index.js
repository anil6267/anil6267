//console.log("--------welcome in js---------");

//let N = prompt("Enter the number");

//let reverse = 0;

//while (N > 0) {
 //   const lastdigit = N % 10;
   // reverse = reverse * 10 + lastdigit;

    //N = N / 10;
//}
//console.log(reverse);

const data = [
    
        {
           "image": {
                "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
                "mobile": "./assets/images/image-waffle-mobile.jpg",
                "tablet": "./assets/images/image-waffle-tablet.jpg",
                "desktop": "./assets/images/image-waffle-desktop.jpg"
           },
           "name": "Waffle with Berries",
           "category": "Waffle",
           "price": 6.50
        },
        {
            "image": {
                "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
                "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
                "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
                "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
            },
            "name": "Vanilla Bean Crème Brûlée",
            "category": "Crème Brûlée",
            "price": 7.00
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
                "mobile": "./assets/images/image-macaron-mobile.jpg",
                "tablet": "./assets/images/image-macaron-tablet.jpg",
                "desktop": "./assets/images/image-macaron-desktop.jpg"
            },
            "name": "Macaron Mix of Five",
            "category": "Macaron",
            "price": 8.00
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
                "mobile": "./assets/images/image-tiramisu-mobile.jpg",
                "tablet": "./assets/images/image-tiramisu-tablet.jpg",
                "desktop": "./assets/images/image-tiramisu-desktop.jpg"
            },
            "name": "Classic Tiramisu",
            "category": "Tiramisu",
            "price": 5.50
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
                "mobile": "./assets/images/image-baklava-mobile.jpg",
                "tablet": "./assets/images/image-baklava-tablet.jpg",
                "desktop": "./assets/images/image-baklava-desktop.jpg"
            },
            "name": "Pistachio Baklava",
            "category": "Baklava",
            "price": 4.00
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
                "mobile": "./assets/images/image-meringue-mobile.jpg",
                "tablet": "./assets/images/image-meringue-tablet.jpg",
                "desktop": "./assets/images/image-meringue-desktop.jpg"
            },
            "name": "Lemon Meringue Pie",
            "category": "Pie",
            "price": 5.00
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
                "mobile": "./assets/images/image-cake-mobile.jpg",
                "tablet": "./assets/images/image-cake-tablet.jpg",
                "desktop": "./assets/images/image-cake-desktop.jpg"
            },
            "name": "Red Velvet Cake",
            "category": "Cake",
            "price": 4.50
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
                "mobile": "./assets/images/image-brownie-mobile.jpg",
                "tablet": "./assets/images/image-brownie-tablet.jpg",
                "desktop": "./assets/images/image-brownie-desktop.jpg"
            },
            "name": "Salted Caramel Brownie",
            "category": "Brownie",
            "price": 4.50
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
                "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
                "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
                "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
            },
            "name": "Vanilla Panna Cotta",
            "category": "Panna Cotta",
            "price": 6.50
         }
    
];

//cinst arr = [1, 4, 5, 6];

//n = arr[]

//for(let i = 0;i < data.length; i++) {

//}


const container = document.getElementById("container");


for (let i = 0; i < data.length; i++) {
    const myData = data[i];
    const myName = myData.name;
    const myPrice = myData.price;
    const myCategory = myData.category; 
    console.log(myName);
    console.log(myPrice);
    console.log(myCategory);
    let myHTML1 = '<h1> ${myName} </h1>';
    let myHTML2 = '<h1> ${myPrice} </h1>';
    let myHTML3 = '<hi> ${myCategory} </h1>';
    Container.innerHTML += myHTML1 + myHTML2 + myHTML3;
}
for (let i = 0; i < data.length; i++) {
    const myData = data[i];
    const myCategory = myData.category;
    console.log(myCategory);
}
for (let i = 0; i < data.length; i++) {
    const myData = data[i];
    const myPrice = myData.price;
    console.log(myPrice);
}

const a = 5;
const b = "My_Name";

const c = "b";