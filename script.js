//Javascript Udemy Course
/*
const clickHereOne = document.querySelector(".alert1");
const clickHereTwo = document.querySelector(".alert2");


clickHereOne.addEventListener("click", (e) => {
    
   console.log("Hello");
   console.log("World");

}); 

/*
clickHereTwo.addEventListener("click", (e) => {
    alert("Hello")
}); */
/*
const button = document.querySelector(".alert1");
const button2 = document.querySelector(".alert2");
const message = prompt()
const messageCount = message.length




button.addEventListener("click", (e) => {
  alert("You have written " + messageCount + " characters, you have " + (140 - messageCount) + " characters remaining.") 

});

/*button2.addEventListener("click", (e) => {
    prompt("Compose your message:");
}); */
const generate = document.querySelector(".passDisplay")
const button = document.querySelector(".alert1")
const array = [
 "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
 "q", "r", "s", "t", "u", "v", "w", "x", "y","z", "æ", "ø", "å", "A", "B", "C", 
 "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", 
 "T", "U", "V", "W", "X", "Y", "Z", "Æ", "Ø", "Å", "0","1", "2", "3","4","5","6","7","8","9"]
let output = '';



button.addEventListener("click", (e) => {
    location.reload();
});


const passwordLength = "16"


for(let i = 0; i < passwordLength; i++) {
  output += array[Math.floor(Math.random() * array.length)];
  

}
console.log(output);
generate.innerText = output;




//console.log(array[0].split(', '));
