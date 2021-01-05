//page_166.js

function drawTable(name,major) {
    let tableTag=document.createElement('table');
    tableTag.setAttribute('border','1');
    let trTag=document.createElement('tr');
    let tdTag1=document.createElement('td');
    tdTag.innerHTML='이름';
    trTag.append(tdTag1);
    let tdTag2=document.createElement('td');
    tdTag.innerHTML='나이';
    trTag.append(tdTag2);

    document.getElementById('show').append(tableTag);
}