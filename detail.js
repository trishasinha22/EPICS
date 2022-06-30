function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//refrences
let userlink = document.getElementById('userlink');
let signoutlink = document.getElementById('signoutlink');
var currentuser = null;

function getusername() {
    let keeploggedin = localStorage.getItem("keeploggedin");
    if (keeploggedin == "yes") {
        currentuser = JSON.parse(localStorage.getItem('user'));
    }
    else {
        currentuser = JSON.parse(sessionStorage.getItem('user'));
    }
}

function SignOut() {
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
    localStorage.removeItem('keeploggedin');
    window.location = "index.html";

}

//window loads

window.onload = function () {
    getusername();
    if (currentuser == null) {
        userlink.innerText = "create new account";
        userlink.href = "register.html";

        signoutlink.innerText = "Login";
        signoutlink.href = "login.html";

    }
    else {
        monlink.innerText = "Monitor";
        monlink.href = "monitor.html";
        conlink.innerText = "Control";
        conlink.href = "control.html";
        yieldlink.innerText = "Yield Prediction";
        yieldlink.href = "predict.html";
        userlink.innerText = currentuser.Username;
        signoutlink.innerText = "Sign Out";
        signoutlink.href = "javascript:SignOut()";
    }
}