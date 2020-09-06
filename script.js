let userName = document.querySelector(".username");
let question = document.querySelector(".question");
let shake = document.querySelector(".submit");
let answer = document.querySelector(".answer")

shake.addEventListener('click', () => {
let defaultUserName = userName.value || 'Hello!';
let userQuestion = question.value;
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '' ;

switch (randomNumber) {
  case 0:
  eightBall = 'It is certain.'
  break;
  case 1:
  eightBall = 'It is decidedly so.'
  break;
  case 2:
  eightBall = 'Reply hazy try again mothertrucker.'
  break;
  case 3:
  eightBall = 'STFU no one cares about your damn life.'
  break;
  case 4:
  eightBall = "Don't count on it."
  break;
  case 5:
  eightBall = "My sources say no."
  break;
  case 6:
  eightBall = "Outlook does not look good."
  break;
  case 7:
  eightBall = "Who cares you're going to die anyway silly human."
  break;
}; 

let defaultAnswer = 'You forgot to ask a question, I know that because I really am magical';
  if (userQuestion){ 
    answer.innerText = `${defaultUserName} you asked, ${userQuestion} Magic eightball responds ${eightBall}`
 
  }else {
    answer.innerText = defaultAnswer;
 }
 question.value = ''; 
});


