'use strict';
/* Commenting out first iteration of mic test.
alert('Is this thing on mate?');
*/
var totalRight = 0; // number of guesses stored for return at the end of the game.
var userName = prompt('Greetings! What is your name?');
alert('Hi, ' + userName + ' nice to meet you! I am going to ask you a few questions about me. Please respond with y/n or yes/no.');

function question1() {
  var response1 = prompt('Do you think I enjoy riding motorcycles?').toLowerCase().trim();
  console.log('Motorcycle question ' + response1);

  if (response1 === 'yes' || response1 === 'y') {
    alert('You\'re right, ' + userName + '! I have a triumph street triple 765 r!');
    totalRight += 1;
  } else if(response1 === 'no' || response1 === 'n') {
    alert('I do not believe you know me. ' + userName);
  } else {
    alert('You did not provide a proper answer.');
  }
}

function question2() {
  var response2 = prompt('Next question! Am I left handed?').toLowerCase().trim();
  console.log('left handed question ' + response2);

  if (response2 === 'yes' || response2 === 'y') {
    alert('Good work ' + userName + ' I am the 10%');
    totalRight += 1;
  } else if (response2 === 'no' || response2 === 'n') {
    alert('Well ... ' + userName + ' I actually am left handed');
  } else {
    alert('You did not provide a proper response. ');
  }
}

function question3(){
  var response3 = prompt('Third Question. Do I have an older brother?').toLowerCase().trim();
  console.log('Sibling question ' + response3);

  if (response3 === 'yes' || response3 === 'y') {
    alert('Indeed ' + userName + ' I do have an older brother');
    totalRight += 1;
  } else if (response3 === 'no' || response3 === 'n') {
    alert('I do not have any sisters, ' + userName);
  } else {
    alert('You did not provide the correct input. ');
  }
}

function question4() {
  var response4 = prompt('Fourth question. Are street tacos the best food ever?').toLowerCase().trim();
  console.log('Tacos ' + response4);

  if (response4 === 'yes' || response4 === 'y') {
    alert('Terribly good guess ' + userName + ' street tacos are life!');
    totalRight += 1;
  } else if (response4 === 'no' || response4 === 'n') {
    alert('Wrong my dear ' + userName + ' , my favorite food is street tacos!');
  } else {
    alert('You did not provide correct input');
  }
}

function question5() {
  var response5 = prompt('Last question. Are the Seahawks the only team I cheer for on Sundays?').toLowerCase().trim();
  console.log('Sports Team ' + response5);

  if (response5 === 'no' || response5 === 'n') {
    alert(userName + ', you are correct, I cheer for the Seahawks and anyone playing the Patriots!');
    totalRight += 1;
  } else if (response5 === 'yes' || response5 === 'y') {
    alert('Normally ' + userName + ' you would be right, but I strongly dislike the Patriots so I cheer for the team playing them and the Seahawks.');
  } else {
    alert('You have provided inaccurate input.');
  }
}

//This is questions six about testing a guess against a numeric value.
function question6() {
  var answer = 13;
  var guess = Number(prompt('Hello, welcome to the number guessing portion of the quesitions. I have selected a number between 1 and 20, you have 4 guesses to get it right. What is your first guess?'));
  console.log('NumbersGuessing ' + guess);

  for (var i = 1; i < 4; i++) { //decreased value to 4 guesses
    if (guess === answer) {
      alert('Congratulations you guessed correctly! You guessed: ' + answer + ' on your ' + i + ' th guess.');
      totalRight += 1;
      break;
    } else if (guess > answer) {
      alert('You have guessed too high with ' + guess + ' this is your ' + i + ' th guess');
      guess = Number(prompt('Please guess again.'));
    } else if (guess < answer) {
      alert('You have guessed too low with ' + guess + ' this is your ' + i + ' th guess');
      guess = Number(prompt('Please guess again.'));
    } else{
      guess = prompt('You provided an incorrect guess please use a number and guess again!');//fixed string input issue
      i--;
    } console.log('NumbersGuessing ' + guess);
  }
}
//This is question 7 a guessing game on where I have ridden my motorcycle
function question7() {
  var states = ['washington', 'oregon', 'california'];
  var guessStates = prompt('Hello, welcome to the game where you guess which state I have ridden my motorcycle in. You have 6 guesses, please spell out the State name. What is your first guess?').toLowerCase().trim();
  var k = 6;

  while (k > 0) {
    console.log('StatesGuessing ' + guessStates); //moved log inside for debugging
    for (var j = 0; j < states.length; j++) {
      if (guessStates === states[j].toLowerCase()) {
        alert('Congratulations you have guessed correctly! All of the places I have been include ' + states[0] + ', ' + states [1] + ' and ' + states[2] + '.');
        console.log('StatesGuessing ' + guessStates);
        break;
      }
    } if (j === 3) { //if it runs through the above loop completely it means its wrong thus below
      guessStates = prompt('You have guessed incorrectly, please guess again!');
      k--;
      if (k === 1) { //added logic for checking if out of guesses with return to user.
        alert('You have guessed your last guess, these are the states ' + states[0] + ', ' + states [1] + ' and ' + states[2] + '.');
        break;
      }
    } else {
      totalRight += 1;
      break;
    }
  }
}

question1();
question2();
question3();
question4();
question5();
question6();
question7();

alert('Hello ' + userName + ' you got ' + totalRight + ' out of 7 correct.');