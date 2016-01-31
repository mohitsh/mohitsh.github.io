
var myHeading = document.querySelector('h1');
myHeading.textContent = "Welcome to Firefox";


var myButton = document.querySelector('button');
var heads = document.querySelector('h1');

function setUserName()
{
    var myName = prompt('Your name Master!');
    localStorage.setItem('name',myName);
    head.textContent = 'Mozilla is cool, ' + myName;

}

if (!localStorage.getItem('name')){
    setUserName();
}
else{
    var storedName = localStorage.getItem('name');
    heads.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}