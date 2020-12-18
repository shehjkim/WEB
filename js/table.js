//타이틀 영역
var tableTag = document.getElementById('tbl');

var trTag1 = document.createElement('tr');           //<tr></tr> element만듬
var tdTag1 = document.createElement('td');          //<td></td>
tdTag1.innerHTML = 'Name';
tdTag1.setAttribute('class', 'title');                   //setAttribute

var tdTag2 = document.createElement('td');            //<td></td>
tdTag2.innerHTML = 'Age';
tdTag2.setAttribute('class','title');

var tdTag3= document.createElement('td');
tdTag3.innerHTML = "Sex";
tdTag3.setAttribute('class', 'title');

trTag1.append(tdTag1);                              //tr태그요소에 td태그라는 요소를 자식으로 붙임
trTag1.append(tdTag2);
trTag1.append(tdTag3);

console.log(trTag1);                          //여기까지는 태그만 만들어진거라 화면에 안나옴

tableTag.append(trTag1);

//data 영역..
trTag1 = document.createElement('tr');           
tdTag1 = document.createElement('td');         
tdTag1.innerHTML = 'Kim';
tdTag1.setAttribute('class', 'data');

tdTag2 = document.createElement('td');            
tdTag2.innerHTML = '29';
tdTag2.setAttribute('class','data'); 

tdTag3 = document.createElement('td');
tdTag3.innerHTML = 'Female';
tdTag3.setAttribute('class', 'data');

trTag1.append(tdTag1);
trTag1.append(tdTag2);
trTag1.append(tdTag3);

tableTag.append(trTag1);