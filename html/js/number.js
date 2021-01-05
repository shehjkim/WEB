//number.js

let x=10;
let y='20';                     //문자열

            
let result = x / y;                    //x + y -- 더하기 일때는 둘중하나가 문자일 경우에는 문자로 인식 -- 결과 1020
                                       // 곱하기 나누기는 둘다 숫자로 인식
console.log(result);                //parseint -- 문자를 숫자로 인식 
                                    //paseFloat -- 소수로 
function sum() {
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    console.log(parseInt(num1)+paseInt(num2));
}