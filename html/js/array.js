//array.js

// let numbers=[3,4,8,9,12,83,22];
// let sum=0;
// for(num of numbers){
//    if(num % 2==0)
//     sum +=num;
//     console.log(num);
// }
// console.log("가장 큰수: " + sum);



let friend1= {
    name: '김현정',
    age: 29,
    hobby: '오라클'
}

let friend2= {
    name: '이현정',
    age: 25,
    hobby: '자바'
}

let friend3= {
    name: '조현정',
    age: 30,
    hobby: '코딩'
}

let friends=[friend1,friend2,friend3];

document.write('<table border="1"><tr>');
for(field in friend1){
    document.write('<th>'+field+'</th>')
}
document.write('</tr>');
for(friend of friends) {
    document.write('<tr>');
    for(field in friend) {
        document.write('<td>' + friend[field] + '</td>')
    }
    document.write('</tr>')

}
document.write('</table>');

