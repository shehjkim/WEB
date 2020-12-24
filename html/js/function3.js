//function3.js
let friends=[];
let i=0;

function input_friend() {
    let namef = document.getElementById('name').value;
    let agef = document.getElementById('age').value;
    let hobbyf =document.getElementById('hobby').value;
    console.log(namef.value, agef.value, hobbyf.value);

    let friend={};
    friend.name=namef;
    friend.age=agef;
    friend.hobby=hobbyf;

    
    friends[i++]=friend;
    console.clear();                            //이전 log정보 지움

    for(friend of friends) {
        for(field in friend) {
            console.log(friend[field]);
        }
    }
     
    // console.log(namef.value+','+agef.value+','+hobbyf.value);
    // document.getElementById('result').innerHTML=namef.value+','+agef.value+','+hobbyf.value;

}
function input_friend() {
    let friend = document.getElementById('friend').value;
    let tdTag1 = document.createElement('td');
    tdTag1.innerHTML = name;
    document.getElementById('friend').append(tdTag1);

    console.log(name);
}



// function input_friend() {
//     let fruit = document.getElementById('fruit').value;
//     let liTag3 = document.createElement('li');
//     liTag3.innerHTML = fruit;
//     document.getElementById('fruits').append(liTag3);
    
//     document.getElementById('fruit').value= ' ';
//     console.log(fruit);