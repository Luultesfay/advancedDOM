'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
}); //short way of the commented out code below

//for (let i = 0; i < btnsOpenModal.length; i++)
//btnsOpenModal[i].addEventListener('click', openModal); the commented out code is the same as the above code

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////SELECTING,CREATING AND DELETING ELEMENTS

console.log(document.documentElement); //selects entire html document  <html lang="en">
console.log(document.head); //selects head   we dont need query selector to select head and body
console.log(document.body); //selected body

//selecting elements of html
document.querySelector('.header'); //we select header   this returns the first elemrnt that mathes the header
//document.querySelectorAll('.section'); //selection multiple element with the class of section
const allSections = document.querySelectorAll('.section'); //selection multiple element with the class of section
console.log(allSections); //NodeList(4) [ section#section--1.section, section#section--2.section, section#section--3.section, section.section.section--sign-up]

document.getElementById('section--1'); //selected using getElementById method
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
//out put
/*HTMLCollection { 0: button.btn--text.btn--scroll-to, 1: button.btn.operations__tab.operations__tab--1.operations__tab--active, 2: button.btn.operations__tab.operations__tab--2, 3: button.btn.operations__tab.operations__tab--3, 4: button.slider__btn.slider__btn--left, 5: button.slider__btn.slider__btn--right, 6: button.btn.btn--show-modal, 7: button.btn--close-modal, 8: button.btn, length: 9 }*/

//note: html
/*getElementById method actually returns an HTML collection. So that's different from a node list
because an HTML collection is actually a so-called life collection.
And that means that if the DOM changes then this collection  is also immediately updated automatically  for example if we delele one button from the dom html then htmlCollection automaticaly update wihich means it reduce the dalated button or element from the collection.*/

const btnbyClassName = document.getElementsByClassName('btn');
console.log(btnbyClassName); // html collection automatically update any change ///////creating and inserting elements
/**HTMLCollection { 0: button.btn.operations__tab.operations__tab--1.operations__tab--active, 1: button.btn.operations__tab.operations__tab--2, 2: button.btn.operations__tab.operations__tab--3, 3: button.btn.btn--show-modal, 4: button.btn, length: 5 } */

//lets create elemnt div

///////creating and inserting elements
//inserting element // manually with .insertAdjusentHtml  refer previous bankist

const messages = document.createElement('div');
messages.classList.add('cookie-message'); //we added cookie-message to the div element

//message.textContent='we use cookies for improve functionality and analytics'

messages.innerHTML =
  'we use cookies for improve functionality and analytic.<button class="btn btn--close--cookie">yes we got it!</button>';

//document.querySelector('header').prepend(messages);

const header = document.querySelector('header');
//header.prepend(messages); //this inserted in the top of the header  or to our hrader dom element  or we can say the first child
header.append(messages); //this inserted at the bottom of the header  or  as last child

//when we need the cookie in maltiple places then
//header.append(messages.cloneNode(true)); //all the child elements also cloned
/*
So what's happened here is that we first prepended the element and then we appended it.
And what this appends did here was to basically move the element
from being the first child to being the last child. All right, so basically it moved the element
and didn't really insert it because it was already inserted here by prepend
So what this means is that we can use the prepend and append methods not only to insert elements
but also to move them. And again, that is because a DOM element is unique.
So it can always only exist at one place at a time.*/

//header.before(messages);//this insert message before header
//header.after(messages); //insert message after header

/////deleting element

document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    messages.remove(); //best way to do it and easy
    //messages.parentElement.removeChild(message);//long way
  });
//the above code remove the button that we added as a cookie when we click on it
