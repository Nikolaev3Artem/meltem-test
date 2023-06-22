"use strict"
// cookie

var modal = document.getElementById("cookie-modal");
var btn = document.getElementById("accept-cookie")

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

btn.onclick = function(){
    document.cookie = "CookieIsAccepted = True";
    modal.style.display = "none";
}

function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}


var accept = getCookie("CookieIsAccepted")
if(accept){
    modal.style.display = "none";
}
else{
    modal.style.display = "flex"
}

// end cookie

// popup 

const close_button = document.querySelector(".close");
const open_popup = document.querySelector(".open_popup")
console.log(open_popup)
const overlay = document.querySelector(".overlay")

open_popup.addEventListener('click', function open_menu() {
    overlay.style.visibility = "visible";
    overlay.style.opacity = 1;
});

close_button.addEventListener('click', function close_menu(){
    overlay.style.visibility = "hidden";
    overlay.style.opacity = 0;
})

// end popup 

// form validation





// end form validation


// burger menu

const open_burger = document.querySelector(".burger")
const burger_overlay = document.querySelector(".burger-overlay")
const close_burger = document.querySelector(".close-burger")

open_burger.addEventListener('click', function open_burger() {
    burger_overlay.style.visibility = "visible";
    burger_overlay.style.opacity = 1;
});

close_burger.addEventListener('click', function close_menu(){
    burger_overlay.style.visibility = "hidden";
    burger_overlay.style.opacity = 0;
})


// end burger menu