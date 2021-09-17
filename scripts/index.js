//randomizing the quotes
let randomNumber = Math.round(Math.random() * 2);
let quotes = [
  "To win big, you sometimes need to take big risks <br/>-Bill Gates",
  "If you want to live a happy life, tie it to goals and not to people <br/>-Albert Einstein",
  "Smiling is the best way to face every problem, to crush every fear and to hide every pain<br/>-Will Smith",
];

let randomChoice = quotes[randomNumber];
mainQuote.innerHTML = randomChoice; //mainQuote already defined in main.js

//randomizing the images
randomNumber = Math.round(Math.random() * 5 + 1);
myPic.src = `images/mypix/mypic${randomNumber}.jpeg`; //myPic already defined in main.js
