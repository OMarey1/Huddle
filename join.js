let joinBtn   = document.getElementById("join-btn");
let textBox   = document.getElementById("username__text");

document.onkeydown = keyDownEvent;

function keyDownEvent(event) {
  var keyid = event.keyCode;
  console.log(keyid);
  if(keyid == 32) {
    control("playpause");
  }
}

function init() {
  document._video = document.getElementById("video");
  video = document.getElementById("video");
}
function control(type) {
   var playBtn = document.getElementById('play');
  if (type == "playpause") {
    if (video.paused == true) {
      video.play();
      playBtn.classList.remove('fa-play');
      playBtn.classList.add('fa-pause');
    } else {
      video.pause();
      playBtn.classList.add('fa-play');
      playBtn.classList.remove('fa-pause');
    }
  }

}
document.addEventListener("DOMContentLoaded", init, false);
//////////////////// Start important//////////////////////////////
// let username  = "";
// let photo     = "";
//////////////////// End important//////////////////////////////
// let username  = document.getElementById(".username__text").value;
// let isEmpty   = true;

// window.addEventListener('DOMContentLoaded' , (event) => {
//   alert("Hi");
// })
let num = 0;

function whenBtnClickedRadioChecked(num) {
  let radio = document.getElementById("radio" + num);
  radio.click();
//////////////////// Start important//////////////////////////////
  // photo = "images/face" + num;
//////////////////// End important//////////////////////////////
  let imgBtn = document.getElementById("imgBtn" + num);
  if (num == 1){
    imgBtn.style.background = "#17C874";
    document.getElementById("imgBtn2").style.background = "#192f47";
    document.getElementById("imgBtn3").style.background = "#192f47";
    document.getElementById("imgBtn4").style.background = "#192f47";
    document.getElementById("imgBtn5").style.background = "#192f47";
    document.getElementById("imgBtn6").style.background = "#192f47";
  } else if (num == 2) {
    imgBtn.style.background = "#17C874";
    document.getElementById("imgBtn1").style.background = "#192f47";
    document.getElementById("imgBtn3").style.background = "#192f47";
    document.getElementById("imgBtn4").style.background = "#192f47";
    document.getElementById("imgBtn5").style.background = "#192f47";
    document.getElementById("imgBtn6").style.background = "#192f47";
  } else if (num == 3) {
    imgBtn.style.background = "#17C874";
    document.getElementById("imgBtn1").style.background = "#192f47";
    document.getElementById("imgBtn2").style.background = "#192f47";
    document.getElementById("imgBtn4").style.background = "#192f47";
    document.getElementById("imgBtn5").style.background = "#192f47";
    document.getElementById("imgBtn6").style.background = "#192f47";
  } else if (num == 4) {
    imgBtn.style.background = "#17C874";
    document.getElementById("imgBtn1").style.background = "#192f47";
    document.getElementById("imgBtn2").style.background = "#192f47";
    document.getElementById("imgBtn3").style.background = "#192f47";
    document.getElementById("imgBtn5").style.background = "#192f47";
    document.getElementById("imgBtn6").style.background = "#192f47";
  } else if (num == 5) {
    imgBtn.style.background = "#17C874";
    document.getElementById("imgBtn1").style.background = "#192f47";
    document.getElementById("imgBtn2").style.background = "#192f47";
    document.getElementById("imgBtn3").style.background = "#192f47";
    document.getElementById("imgBtn4").style.background = "#192f47";
    document.getElementById("imgBtn6").style.background = "#192f47";
  } else if (num == 6) {
    imgBtn.style.background = "#17C874";
    document.getElementById("imgBtn1").style.background = "#192f47";
    document.getElementById("imgBtn2").style.background = "#192f47";
    document.getElementById("imgBtn3").style.background = "#192f47";
    document.getElementById("imgBtn4").style.background = "#192f47";
    document.getElementById("imgBtn5").style.background = "#192f47";
  }

  console.log('radio' + num + ' was checked');
  // console.log(photo);
//////////////////// Start important//////////////////////////////
  // return photo;
//////////////////// End important//////////////////////////////
}

function stopRadioSubmit(num ,event) {
  event.preventDefault();
  document.getElementById('radio'+num).click;
}

document.getElementById("fileBtn").onsubmit = function stopSubmit(event) {
  event.preventDefault();
};

document.getElementById("fileBtn").onclick = function(event) {
  // event.preventDefault();
  document.getElementById("file").click();
};
/////////////////////////////////////////////////////////////
// document.getElementById("imgBtn1").onsubmit = function(event) {
//   event.preventDefault();
//   document.getElementById('radio1').click;
// };
// document.getElementById("imgBtn2").onsubmit =  function(event) {
//   event.preventDefault();
//   document.getElementById('radio2').click;
// };
// document.getElementById("imgBtn3").onsubmit =  function(event) {
//   event.preventDefault();
//   document.getElementById('radio3').click;
// };
// document.getElementById("imgBtn4").onsubmit =  function(event) {
//   event.preventDefault();
//   document.getElementById('radio4').click;
// };
// document.getElementById("imgBtn5").onsubmit =  function(event) {
//   event.preventDefault();
//   document.getElementById('radio5').click;
// };
// document.getElementById("imgBtn6").onsubmit =  function(event) {
//   event.preventDefault();
//   document.getElementById('radio6').click;
// };
// /////////////////////////////////////////////////////////////////
// document.getElementById("imgBtn1").onclick =  function(event) {

//   document.getElementById('radio1').click;
// };
// document.getElementById("imgBtn2").onclick =  function(event) {
//   event.preventDefault();
//   document.getElementById('radio2').click;
// };
// document.getElementById("imgBtn3").onclick =  function(event) {
//   event.preventDefault();
//   document.getElementById('radio3').click;
// };
// document.getElementById("imgBtn4").onclick =  function(event) {
//   event.preventDefault();
//   document.getElementById('radio4').click;
// };
// document.getElementById("imgBtn5").onclick =  function(event) {
//   event.preventDefault();
//   document.getElementById('radio5').click;
// };
// document.getElementById("imgBtn6").onclick =  function(event) {
//   event.preventDefault();
//   document.getElementById('radio6').click;
// };
///////////////////////////////////////////////////////////////

function checkTextboxIfEmpty(){
  // let isEmpty   = true;
  if (textBox.value.length > 0){
    // isEmpty = false;
    // alert('Not Empty');
    textBox.style.borderBottom = "1px solid #17C874";
    return false;
  } else {
    // isEmpty = true;
    // alert('Is Empty');
    textBox.style.borderBottom = "1px solid red";
    return true;
  }
  // return  isEmpty;
}
//////////////////// Start important//////////////////////////////
// function setUsername() {
//   username = textBox.value;
//   return username;
// }
//////////////////// End important//////////////////////////////
function accountPrepare() {

  checkTextboxIfEmpty();

  if (!checkTextboxIfEmpty()){

    // setUsername();
    // console.log(username + photo);
    // window.open('chat.html' , '_self');
    // createChatPage();
  } else if (isEmpty = true) {
    // alert("You should choose username and your favorite photo");
  }
}

// function createChatPage() {

//   ///////////////////////////////////////////////////////////////////

//   document.body.removeChild(document.getElementById("register-page"));

//   document.head.removeChild(document.getElementById("indexStyle"));

//   ///////////////////////////////////////////////////////////////////

//   document.getElementById('title').innerText  = "Chat | Home Beta";

//   let chatStyle = document.createElement('link');
//   chatStyle.id.slice('chatStyle');
//   chatStyle.setAttribute('rel','stylesheet');
//   chatStyle.setAttribute('href','chat.css');

//   document.head.appendChild(chatStyle);

//   ///////////////////////////////////////////////////////////////////


//   document.body.classList.add('chat');

//   let newContainer = document.createElement('div');
//   newContainer.classList.add('container');

//   let newForm = document.createElement('form');
//   newForm.setAttribute('action' , "");
//   newForm.setAttribute('onsubmit' , "document.querySelector('.btn').click()");
//   newForm.setAttribute('name' , "chat");
//   newForm.classList.add('chat__app');

//   let newChatPlace = document.createElement('div');
//   newChatPlace.classList.add('chat__place');

//   let newChatUl = document.createElement('ul');
//   newChatUl.classList.add('chat__ul');

//   let nmessage = document.createElement("li");
//   nmessage.innerText = "Hi There!";
//   nmessage.innerHTML += '<br>'
//   nmessage.classList.add("me");

//   let pmessage = document.createElement("li");
//   pmessage.innerText = "I'm Here!";
//   pmessage.innerHTML += '<br>'
//   pmessage.classList.add("him");

//   newChatUl.appendChild(nmessage);
//   newChatUl.appendChild(pmessage);
//   newChatPlace.appendChild(newChatUl);
//   newForm.appendChild(newChatPlace);

//   ///////////////////////////////////////////////////////////////////

//   let newChatType = document.createElement('div');
//   newChatType.classList.add('chat__type');

//   let newInputText = document.createElement('input');
//   newInputText.setAttribute('type' , 'text');
//   newInputText.setAttribute('accesskey' , 't');
//   newInputText.setAttribute('name' , 'message');
//   newInputText.setAttribute('placeholder' , 'Type here...');
//   newInputText.setAttribute('autocomplete' , 'off');
//   newInputText.classList.add('chat__text');

//   let newTimer = document.createElement('span');
//   newTimer.setAttribute('id','timer');
//   newTimer.innerHTML = ' <span id="counter">0</span>  /1000 ';

//   // let newCounter = document.createElement('span');
//   // newCounter.setAttribute('id','counter');

//   let newInputBtn = document.createElement('input');
//   newInputBtn.setAttribute('type' , 'button');
//   newInputBtn.setAttribute('accesskey' , 's');
//   newInputBtn.setAttribute('name' , 'send');
//   newInputBtn.setAttribute('value' , 'Send');
//   newInputBtn.classList.add('btn');

//   newChatType.appendChild(newInputText);
//   newChatType.appendChild(newTimer);
//   newChatType.appendChild(newInputBtn);
//   newForm.appendChild(newChatType);

//   ///////////////////////////////////////////////////////////////////

//   newContainer.appendChild(newForm);
//   document.getElementsByTagName('div')[0].appendChild(newContainer);

//   ///////////////////////////////////////////////////////////////////

//   // document.getElementById("script").setAttribute('src','app.js')
//   // let chatScript = document.createElement('script');
//   // chatScript.setAttribute('src','app.js');

//   // document.body.appendChild(chatScript);

//   ///////////////////////////////////////////////////////////////////

// }

// let form = document.querySelector(".chat__app");
// function handleForm(event) { event.preventDefault(); }
// form.addEventListener('submit', handleForm);

// joinBtn.addEventListener('click',checkTextboxIfEmpty());




///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// Chat Page ///////////////////////////////////////////
// window.mobileAndTabletCheck = function() {
//   let check = false;
//   (function(a){
//       if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
//        check = true;})
//        (navigator.userAgent||navigator.vendor||window.opera);

//       console.log(check);
//       return check;
// };
