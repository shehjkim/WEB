// string.js
let str='Please locate where "locate" occurs!';
let strLeng= str.length;                            //문자열의 크기 정의

//indexOf, lastIndexOf, search
strLeng=str.indexOf('locate',13);
str.lastIndexOf('locate');

console.log(str.lastIndexOf('locate'));
console.log(str.search('locate'));

//slice, substring, substr
let fruit = 'Apple, Banana, kiwi';
let result = fruit.slice(0,5);

let from = fruit.indexOf('Banana');
result=fruit.substring(from,from+6);

result=fruit.substr(from,6);

console.log(result);

//replace
let newFruit = fruit.replace('Banana','Orange');
console.clear();
console.log(newFruit);

//toUpperCase, toLowerCase, concat, trim, padStart, padEnd
console.log('     good     hello     '.trim());
console.log('55'.padStart(4,'0'));

let uri='http://www.naver.net';             //net을 com으로 바꿈
console.log(uri.replace('net','com'));
console.log(uri.replace(uri.substring(uri.lastIndexOf('.')),'.com'));

let fruits=fruit.split(','); //Apple, Banana, kiwi
for(f of fruits) {                  //fruits배열 이름을 f로지정         
    console.log(f.trim());
}

//990101-1234567
//990102-2345678
//000201-3456789
//000202-4567890

//2000년 이전, 이후 구분-->1,3이면 남자
//2000년 이전 , 이후구분--> 2,4이면 여자

function getGender(num){
    let numAry = numbers.split(' ');
    for(num of numAry)
    let fNum=num.substr(7,1);

    let numbers='990101-1234567';
        numbers +='990102-2345678';
        numbers +='000201-3456789';
        numbers +='000202-4567890';

    if(fNum=='1','3') {
        console.log('결과: '+'남자');
    } else {
        console.log('결과: '+'여자');
    }
}
         