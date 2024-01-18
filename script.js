const displayId = document.getElementById('display');
let concatenatedString = '';
function displayNumber(number) {
    concatenatedString += number;
    displayId.value = concatenatedString;
}
function clearDisplay() {
    concatenatedString = '';
    displayId.value = concatenatedString;
}
function calculate(){
  concatenatedString = eval(concatenatedString);
  displayId.value = concatenatedString;
}