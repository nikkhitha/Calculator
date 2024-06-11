let display=document.querySelector(".displaytxt");
let removeBtn=document.getElementById("removeBtn")
function updateElement(input){
    display.value+=input;
    adjustFont();
    toggleRemoveBtn();
}
function cleardisplay(){
    display.value="";
    adjustFont();
    toggleRemoveBtn();
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error"
    }
    adjustFont();
}
let bracket=true;
function brackets() {
    if (bracket) {
        display.value += "(";
    } else {
        display.value += ")";
    }
    adjustFont();
    toggleRemoveBtn();
    bracket = !bracket;
}
function adjustFont() {
    const maxSize = 32;
    const minSize = 12;
    const maxLength = 10;
    const length = display.value.length;

    if (length > maxLength) {
        const newSize = maxSize - ((length - maxLength) * 2);
        display.style.fontSize = (newSize > minSize ? newSize : minSize) + "px";
    } else {
        display.style.fontSize = maxSize + "px";
    }
}
function toggleRemoveBtn() {
    if (display.value.length === 0) {
        removeBtn.classList.add('disabled');
        removeBtn.disabled = true;
    } else {
        removeBtn.classList.remove('disabled');
        removeBtn.disabled = false;
    }
}
function removedigit() {
    display.value = display.value.slice(0, -1);
    adjustFont();
    toggleRemoveBtn();
}
adjustFont();
toggleRemoveBtn();