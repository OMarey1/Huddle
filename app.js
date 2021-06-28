let form = document.querySelector(".chat__app");
let messagePlace = document.querySelector(".chat__ul");
let sendBtn = document.querySelector(".btn");
let typePlace = document.getElementById("chat__text");



function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

// function sendMessage(message,e){
//     e.preventDefault;
//     let newMessage = document.createElement("span");
//     newMessage.innerHTML = message;
//     chat.appendChild(newMessage);

// }


document.addEventListener('DOMContentLoaded',function(){

    setUserNaneAttr();

});

typePlace.onkeydown = keyDownEvent;
typePlace.onkeyup = keyUpEvent;
// document.onkeydown =function(event) {
//     console.log(event.keyCode);
// }


var isShift = false;

function keyDownEvent(event) {
    var keyid = event.keyCode;

    if(keyid == 16) {
        isShift = true;
    }
}

function keyUpEvent(event) {
    var keyid = event.keyCode;

    if(keyid == 13 && isShift == false) {

    }

    if(keyid == 16) {
        isShift = false;
    }

    if(keyid == 13 && isShift == true) {
        sendBtn.click();
    }
}

window.getCount = function(parent, getChildrensChildren){
    var relevantChildren = 0;
    var children = parent.childNodes.length;
    for(var i=0; i < children; i++){
        if(parent.childNodes[i].nodeType != 3){
            if(getChildrensChildren)
                relevantChildren += getCount(parent.childNodes[i],true);
            relevantChildren++;
        }
    }
    return relevantChildren;
}

var num = getCount(document.getElementById("chat__ul") ,false);

// console.log(num);

function setUserNaneAttr() {
    for (let i = 0; i < num; i++) {
        document.getElementsByClassName("me")[i].setAttribute('user-name' , username);
        let newImg = document.createElement("img");
        newImg.classList.add("photo");
        newImg.src = photo;
        document.getElementsByClassName("me")[i].appendChild(newImg)
    }
}

function sendMessage() {
    if (typePlace.value.length > 0 && typePlace.value != ' ') {
        let newMessage = document.createElement("li");
        let newImg = document.createElement("img");
        newImg.classList.add("photo");
        newImg.src = photo;
        // console.log(newImg.src);
        newMessage.innerText = typePlace.value;
        newMessage.setAttribute('user-name' , username);
        newMessage.appendChild(newImg);
        newMessage.innerHTML += '<br>';
        // if (typePlace.value.length == 1000) {
        //     newMessage.innerHTML += '<br>';
        // }
        newMessage.classList.add("me");
        messagePlace.appendChild(newMessage);

        // console.log(typePlace.value);
        typePlace.value = "";
        let counter = document.getElementById("counter");
        counter.innerText   =   typePlace.value.length;
        newMessage.scrollIntoView(false);
    }
}

function counter() {
    let counter = document.getElementById("counter");
    counter.innerText   =   typePlace.value.length;
}

typePlace.addEventListener('keydown' , counter);
typePlace.addEventListener('keyup' , counter);

sendBtn.addEventListener('click',sendMessage);


////////////////////////////////////////////////////////////////////////////////

const params = new URLSearchParams(window.location.search);

const username = params.get('username');

const file = params.get('file');

const color = params.get('color');
// console.log(username);

for (let i = 1; i <= 6; i++) {

    if ( file.length  >  0) {
        var photo = undefined ;
        photo = file;
        console.log(photo);
    } else if (params.has('face'+i)) {
        photo = "images/face" + i + ".png";
        console.log(photo);
   }

}
