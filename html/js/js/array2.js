//array1.js

let fruit=[];

function sum(){
    let fruit = document.getElementById('num1').nodeValue;
    fruits.push(fruit);
    console.log(fruits);
}

function minus() {
    fruits.pop();
    console.log(fruits);
}

function draw() {
    let show = document.getElementById('show');
    show.clear();
}

let  ulTag=document.createElement('ul');

for(fruit of fruits) {
    let liTag=document.createElement('li');
    liTag.innerHTML = fruit;
    ulTag.append(liTag);
}
show.append(ulTag);
