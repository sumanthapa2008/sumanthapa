let display = document.getElementsByClassName("display");

function appendToDisplay(value){
    display[0].textContent = display[0].textContent + value;
}
function clearDisplay(){
    display[0].textContent =""
}

function calculate(){
    let expression = display[0].textContent;
    let result = eval(expression);
    display[0].textContent = result;
}

function toggleDarkMode(){
    document.body.classList.toggle("dark");
}