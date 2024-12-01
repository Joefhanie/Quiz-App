function submitName(){
    const username = document.getElementById("modal-username").value;
    const alert = document.getElementById('alert'); 
    const close = document.getElementById('close');
    if(username.trim() === "")
    {
        alert.style.display = "block";
    }
    else {
        alert.style.display = "none";
        directHome(username);
    }
};

function directHome(username){
    // file.html?name= 
    window.location.href = "home.html?name=" + encodeURIComponent(username);
}

function displayUsername(){
    const getName = new URLSearchParams(window.location.search);
    const name = getName.get('name'); 
    // display userName
    if(document.getElementById('greetings')){
        document.getElementById('greetings').textContent = name ? "Hello, " + name : "No name provided";
    }
}

function hideAlert(){
    const alert = document.getElementById('alert'); 
    alert.style.display = "none";
}

document.addEventListener('DOMContentLoaded', displayUsername);


