'use strict';

var userName = prompt('What is you\'re name?')
console.log('user\'s name:', userName)
  alert('Hello ' + userName + ', it\'s nice to meet you.  In order for you to get to know me a little bit we are going to play a guessing game.  Let\'s get started! ');

//question 1
var age = prompt(userName + ', do you think I look older than 40 years old?').toLowerCase();
console.log('users age:' + age);

  if (age === 'yes' || age === 'y') {
    alert('Gotch ya ' + userName + '!  I am 38, so I\'m almost there.')
    } else {
    alert('Thank you ' + userName + '.');
    }

//question 2
var where = prompt(userName + ', did I grow up in the midwest?').toLowerCase();
  console.log('user where:' + where);

    if (where === 'yes' || where === 'y') {
    alert('Wow ' + userName + ' , you nailed that one!');
    } else {
    alert('Sorry, I was born and bred in Illinois');
    }

//question 3
var myDog = prompt('Do I own a Golden Retriever?').toLowerCase();
  console.log('users myDog:' + myDog);

    if (myDog === 'yes' || myDog ==='y') {
    alert(userName + ', this is getting spooky.  You are amazing, that\'s correct!');
    } else {
    alert('Negative, ' + userName + ', my dog Eva is a Golden Retriever.');
    }

//question 4
var boat = prompt('Did I live on a houseboat for the last two summers?').toLowerCase();
  console.log('users boat:' + boat);

    if (boat === 'yes' || boat === 'y') {
    alert('Gotch ya ' + userName + '!  I\'ve never lived on a boat.')
    } else {
    alert('You\'re right ' + userName + ', well done.');
    }

//question 5
var music = prompt('Do I primarily listed to classis rock?').toLowerCase();
  console.log('users music:' + music);

    if (music === 'yes' || music === 'y') {
    alert('You know it ' + userName + '!')
    } else {
    alert('Sorry ' + userName + ', but I\'m classis rock through and through.');
    }

//question 6
//-guess my favorite number
//only give 4 chances
//give dynamic feedback to notify 'Too High or Too low'
var guessNumber = prompt('You\'ve done well up until now ' + userName + ' but we\'re going to take it up a notch.  Let\'s see if you can guess my favorite number.').toLowerCase();

for (var i=0; i<4; i++){
  console.log(guessNumber[i]);
    if(guessNumber === '10') {
    console.log('true', guessNumber);
    alert('Fantastic, you got it!');
    //score++;
    break;
  } else if (guessNumber > 10) {
    console.log('too high', guessNumber);
    alert('Too high, give it another try');
  } else if (guessNumber < 10) {
    console.log('too low', guessNumber);
    alert('Too low, give it another try');
    } else {
    console.log('false', guessNumber);
    alert('Wrong, you have 4 total attempts');
  }
}


//TO DO:
//Need seventh question
//-add score counter to show overall score
var states = ['illinois', 'texas', 'florida'];
for (var j=6; j>0;j--){
  var guessStates= prompt('Let\'s see if you can guess a state that I\'ve lived in.').toLowerCase();
  console.log(guessStates);
  if(states.includes(guessStates)){
    console.log('guessed', state);
    alert('Wow! You are correct!');
    alert('I have lived in Illinois, Texas, and Florida!');
break;
  }else {
    console.log('false', guessStates);
    alert('Wrong, try again. You have 6 total attempts, you  have ' + (j-1) + ' attempts remaining.');
  }
}
