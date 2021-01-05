//array3.js

let numbers=[34,55,22,10,100,6,7];

numbers.sort(function(a,b) {
    return a - b;
});

// console.log(numbers);
let ulTag=document.createElement('ul');
document.getElementById('show').append(ulTag);

numbers.forEach(function(item,idx,ary) {
console.log(item,idx);
let liTag=document.createElement('li');
liTag.innerHTML=item;
ulTag.append(liTag);
});

let liTag=document.createElement('li');
liTag.innerHTML = '합계: ' + sum;
ulTag.append(liTag);


// numbers.forEach(function(a,b,c) {
//     console.log(a,b,c);
// });
