//array_foreach.js

// let persons=['Hong', 'Hwang', 'Park', 'Choi'];

// persons.forEach(mycallback);

// function mycallback(a,b,c) {
//     console.log(a,b.c);
// }

let persons = [];
let person = {
    name: '이혜빈',
    age: 20,
    score: 90
}

// persons.push(person);

let person1 = {};
person1.name = '이나경';
person1.age = '21';
person1.score = 80;
persons.push(person1);

//persons.push('송다희');

console.log(persons);

// function drawTable(name, age, score) {
//     let tableTag = document.createElement('table');
//     tableTag.setAttribute('border', '1');
//     let trTag = document.createElement('tr');
//     let tdTag1 = document.createElement('td');
//     tdTag.innerHTML = '이름';
//     trTag.append(tdTag1);
//     let tdTag2 = document.createElement('td');
//     tdTag.innerHTML = '나이';
//     trTag.append(tdTag2);
//     let tdTag3 = document.createElement('td');
//     tdTag.innerHTML = '점수';
//     trTag.append(tdTag3);
//     tableTag.append('trTag');
//     document.getElementById('show').append(tableTag);
// }

function drawTable(){
    let titles = ['이름', '나이', '점수'];

    let tableTag = document.createElement('table');
    tableTag.setAttribute('border', '1');

    let trTag = document.createElement('tr');
    for (title of titles) {
        let tdTag1 = document.createElement('td');
        tdTag1.innerHTML = title;
        trTag.append(tdTag1)
    }
    tableTag.append(trTag); // 타이틀 생성.

    persons.forEach(function(item, idx, ary){
        let trTag=document.createElement('tr');
        for(field in item) {
        let tdTag1 = document.createElement('td');
        tdTag1.innerHTML = title;
        trTag.append(tdTag1)
    }
    tableTag.append(trTag);
}); //데이터생성
document.getElementById('show').append(tableTag);

// 테이블,row,column => persons의 배열요소 
// document.createElement('table');
// 부모요소.append(자식요소);
// #show에 append;
// persons.forEach();
}

function mycallFunc(item, idx, ary){
    let trTag=document.createElement('tr');
    for(field in item) {
    let tdTag1 = document.createElement('td');
    tdTag1.innerHTML = title;
    trTag.append(tdTag1)
}
tableTag.append(trTag);
}