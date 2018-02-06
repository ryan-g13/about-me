'use strict';

alert('Is this thing on mate?');
var userName = prompt('Greetings! What is your name?');

alert('Hi, ' + userName + 'nice to miceet you! I am going to ask you a few questions about me. Please respond with y/n or yes/no.');

var response1 = prompt('Do you think I enjoy riding motorcycles?').toLowerCase().trim();
console.log('Motorcycle question' + response1);

if (response1 === 'yes' || response1 === 'y') {
    alert('You\'re right,' + userName + '! I have a triumph street triple 765 r!');
} else if(response1 === 'no' || response1 === 'n') {
    alert('I do not believe you know me.');
} else {
    alert('You did not provide a proper answer.');
}

var response2 = prompt('Next question! Am I left handed?').toLowerCase().trim();
console.log('left handed question' + response2)

if (response2 === 'yes' || response2 === 'y') {
    alert('Good work ' + userName + ' I am the 10%');
} else if (response2 === 'no' || response2 === 'n') {
    alert('Well ... ' + userName + ' I actually am left handed');
} else {
    alert('You did not provide a proper response. ');
}

var response3 = prompt('Third Question. Do I have an older brother?');
console.log('Sibling question' + response3);

if (response3 === 'yes' || response3 === 'y') {
    alert('Indeed' + userName + ' I do have an older brother');
} else if (response3 === 'no' || response3 === 'n') {
    alert('');
} else {

}