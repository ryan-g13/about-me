'use strict';

alert('Is this thing on mate?');
var userName = prompt('Greetings! What is your name?');

alert('Hi, ' + userName + ' nice to meet you! I am going to ask you a few questions about me. Please respond with y/n or yes/no.');

var response1 = prompt('Do you think I enjoy riding motorcycles?').toLowerCase().trim();
console.log('Motorcycle question ' + response1);

if (response1 === 'yes' || response1 === 'y') {
  alert('You\'re right, ' + userName + '! I have a triumph street triple 765 r!');
} else if(response1 === 'no' || response1 === 'n') {
  alert('I do not believe you know me. ' + userName);
} else {
  alert('You did not provide a proper answer.');
}

var response2 = prompt('Next question! Am I left handed?').toLowerCase().trim();
console.log('left handed question ' + response2);

if (response2 === 'yes' || response2 === 'y') {
  alert('Good work ' + userName + ' I am the 10%');
} else if (response2 === 'no' || response2 === 'n') {
  alert('Well ... ' + userName + ' I actually am left handed');
} else {
  alert('You did not provide a proper response. ');
}

var response3 = prompt('Third Question. Do I have an older brother?').toLowerCase().trim();
console.log('Sibling question ' + response3);

if (response3 === 'yes' || response3 === 'y') {
  alert('Indeed ' + userName + ' I do have an older brother');
} else if (response3 === 'no' || response3 === 'n') {
  alert('I do not have any sisters, ' + userName);
} else {
  alert('You did not provide the correct input. ');
}

var response4 = prompt('Fourth question. Are street tacos the best food ever?').toLowerCase().trim();
console.log('Tacos' + response4);

if (response4 === 'yes' || response4 === 'y') {
  alert('Terribly good guess ' + userName + 'street tacos are life!');
} else if (response4 === 'no' || response4 === 'n') {
  alert('Wrong my dear ' + userName + ' , my favorite food is street tacos!');
} else {
  alert('You did not provide correct input');
}

var response5 = prompt('Last question. Are the Seahawks the only team I cheer for on Sundays?').toLowerCase().trim();
console.log('Sports Team' + response5);

if (response5 === 'no' || response5 === 'n') {
  alert(userName + ', you are correct, I cheer for the Seahawks and anyone playing the Patriots!');
} else if (response5 === 'yes' || response5 === 'y') {
  alert('Normally ' + userName + ' you would be right, but I strongly dislike the Patriots so I cheer for the team playing them and the Seahawks.');
} else {
  alert('You have provided inaccurate input.');
}
