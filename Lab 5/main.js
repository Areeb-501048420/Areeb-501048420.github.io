

//function for button click. Asks for user input then displays input along with a message as an H1 element
function myFunction(){
    var name = prompt("What is your name?");
    var greeting = "Hello " + name + ", welcome to this page"
    document.getElementById('greeting').innerHTML = greeting
}

//Function to change styling of the image when clicked to enlargen
function PicClick(element){
    element.classList.toggle("enlargen");
}

//Function used to change styling for navigation elements when hovering on/off
function mover(element){
    element.classList.toggle('hover');
}

//Function used to change styling for navigation elements when hovering on/off
function mout(element){
    element.classList.toggle('unhover');
}