function add(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function mul(a, b) {
    return a * b
}
function div(a, b) {
    return a / b
}
var displayvalues=""
var currentPressed
var display = document.querySelector("#display");
var inpbox = document.querySelector("input");
var buttons = document.querySelectorAll(".buttons");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function Clicked(e) {
        currentPressed = this.innerHTML;
        display.value += currentPressed;
        displayvalues+=currentPressed;
       
    }

}
document.querySelector(".clearbtn").addEventListener("click",function () {
    display.value="";
    displayvalues=0;

})
document.querySelector(".resultbtn").addEventListener("click",function () {
    display.value=eval(display.value);
    console.log(displayvalues);    
})
