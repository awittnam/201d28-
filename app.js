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



// var kids = prompt('how many kids do you have?');
// console.log('number of kids:', kids);
//
// var hats = prompt('how many hats do you own?');
// console.log('number of hats:', hats);
//
// if (kids === '4' || kids === '3') {
//   alert('nice job - u right');
// }
//
// if (hats === '3' && kids === '4') {
//   alert('nice job again - u rule');
// }
