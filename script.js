/// SO THIS IS MY 1TH PROJECT THAT IS THE REASION THERE IS SOME DRY CODE .....
// THIS IS A BASIC EXAMPLE OF HOW TO MAKE A GUESS GAME USING JS HTML AND CSS ......
// THIS IS MADE BY VOIDMAIN17 () :

'using strict'; // YOU KNOW WHY I AM USING THIS (.....)

let randomNumber = Math.trunc(Math.random() * 20 + 1);
//document.querySelector('.number').textContent = randomNumber;
let scoreMain = 20;
let highscoremain = 0;

// this is aggain button logic
document.querySelector('.again').addEventListener('click', function () {
  if (scoreMain > highscoremain) {
    // THIS IS JUST UPDATE THE SCORE ..

    highscoremain = scoreMain;
    document.querySelector('.highscore').textContent = highscoremain;
  }
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'; // dom manupation value will abways be in string // THIS IS THE WIDTH OF THAT PLACE WHERE THAT NUMMBER IS WRITTEN IT CHANGE IT SIZE WHEN SOME ONE
  // GIVE CORRECT ANS ...
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Gusssing';
  document.querySelector('.score').textContent = 20;
});

document.querySelector('.check').addEventListener('click', function () {
  const userInput = Number(document.querySelector('.guess').value);

  if (!userInput) {
    // THIS MEAN THAT THE GUESS IS "" // EMPTY
    document.querySelector('.message').textContent = 'NO NUMBER MAN';
  } else if (userInput === randomNumber) {
    // this for when the user input is equal to the randomNumber
    document.querySelector('.message').textContent = 'YOU ARE CORRECY MY N';
    scoreMain++;
    document.querySelector('.score').textContent = scoreMain;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;
    if (scoreMain > highscoremain) {
      highscoremain = scoreMain;
      document.querySelector('.highscore').textContent = highscoremain;
    }
  } else if (userInput > randomNumber) {
    document.querySelector('.message').textContent = 'Number is to big';
    scoreMain--;
    document.querySelector('.score').textContent = scoreMain;
  } else if (userInput < randomNumber) {
    document.querySelector('.message').textContent = 'Number is to small';
    if (scoreMain > 0) {
      scoreMain--;
      document.querySelector('.score').textContent = scoreMain;
    } else {
      document.querySelector('.message').textContent = 'you lost my n';
      document.querySelector('.score').textContent = 0;
    }
  }
});
