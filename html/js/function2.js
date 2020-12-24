// function2.js

for (let i = 0; i < 3; i++) {
    let names = window.prompt('이름을 입력하세요.');
    let age = window.prompt('나이를 입력하세요.');
    let friend = {};
    friend.name = names;
    friend.age = age;
    friend[i] = friend;
}

document.write('<table border="1">');
for (friend of friends) {
    document.write('<tr>')
    for (fiend in freind) {
        document.write('<td>' + friend[field] + '</td>');
    }
    document.write('</tr>')
}
document.write('</table>');

// let friend1 = {};
// friend1.name = 'Hong';
// friend1.age = 20;

// let friend2 = {};
// friend2.name = 'Hwang';
// friend2.age = 20;

// let friend3 = {};
// friend3.name = 'Kim';
// friend3.age = 20;

// let friends = [];
// friends[0] = friend1;
// friends[1] = friend2;
// friends[2] = friend3;

// let friends = [friend1, friend2,friend3];
// for (friend of friends) {                                   //friends라는 배열에 있는 값을 friend 배열에 하나씩 담겠다는 뜻
//     for (field in friend) {                                 //for in = 배열 하나가 가지고 있는 필드를 가져옴 ex) friend1의 필드 = Hong, 20
//         console.log(friend[field]);  
//         }
//         document.write('이름: ' + friend.name());
//     }




let numAry = [];
// for(let i = 0; i < 5; i++) {
//     let name1=window.prompt('숫자를 입력하세요.');
//     numAry[i]=parseInt(name1);
// }
findMax();

function findMax() {
    //numAry[]
    let max = 0;
    for (val of numAry) {
        if (max < val) {
            max = val;
        }
    }
}

// function sum(a, b) {
//     let n1 = parseInt(a);
//     let n2 = parseInt(b);
//     console.log(n1 + n2);
// }