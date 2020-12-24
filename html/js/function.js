function sum(num1, num2) {
    let result = num1 + num2;
    console.log(result);
    return result;
}

let result = sum('10', '20');
document.write('<h1>' + result + '</h1>');

let myfunc = function(a,b) {
    console.log('Hello');
}
myfunc(40,50);

let yourfunc = function(a,b){
    console.log('result: ' + result);
}
result=yourfunc(5,7);

let theotherfunc = function (n1,n2) {
    return n1 / n2;
}

function otherfuc(a,b,funcdef){
    let result = funcdef(a,b);
    console.log('result: ' + result);
}
otherfuc(20,30,theotherfunc);

//console.log(myfunc());