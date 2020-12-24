//variable.js
//undefined
let something;
something = 1 > 2;

if (something) {
    console.log("참입니다.")
} else {
    console.log("거짓입니다.")
}

//object
something = {
    name: 'Hong',
    age: 20,
    phone: '010-1111-1111'
}

for (field in something) {
    console.log(field, something[field]);
}

let nameAry = ['Hong', 'Park', 'kim', 'Hwang', 'Lee'];
let name1 = nameAry[0];
let name2 = nameAry[1];


for (let i = 0; i < nameAry.length; i++) {
    console.log('nameAry[' + i + '] =>' + nameAry[i]);
}
let i=1;
document.write('<table border="1"><tr>');
document.write('<th>'+ '순번' + '</td><th>' + '이름' + '</th></th>')
document.write('<tr>');
for(str of nameAry) {
    document.write('<tr><td>' + i++ +'</td><td>' + str + '</td></tr>')
    console.log(str);
}
document.write('</table>');

// document.write('<ul>');
// for (str of nameAry) {
//     document.write('<li>' + str + '</li>');
//     console.log(str);
// }