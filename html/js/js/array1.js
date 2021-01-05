//array1.js

let fruit = ['Apple', 'Banana'];
fruits[2] = 'Melon';
fruits[fruits.length]='Orange';
fruits[fruits.length]='Mango';
fruits[2]='new melon';
delete fruit[2];



// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

fruits=[];
fruits.push('Apple');
fruits.push('Banana');
fruits.unshift('Orange');
fruits.unshift('Melon');

//fruits.pop();
//fruits.shift();
//Melon, Orange, Apple, Banana
let fruit = fruits.splice(1,2, 'New Orange');
console.log(fruit);


for(fruit of fruits){
    console.log(fruit);
}