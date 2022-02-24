const texts = ["Hello, Bonjour, أهلا  ", "I am MOHAMED NAVEED", "I am a passionate coder!", "Welcome to my page", "Thank you for visiting my page!"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function sleep(ms) {
     return new Promise(resolve => setTimeout(resolve, ms));
}
(function type() {
     if (count === texts.length) {
          count = 0

     }

     currentText = texts[count]
     letter = currentText.slice(0, ++index)

     document.querySelector(".typing").textContent = letter;

     if (letter.length == currentText.length) {
          count++
          index = 0

     }
     setTimeout(type, 150);

}());