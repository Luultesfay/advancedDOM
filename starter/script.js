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
And that means that if the DOM changes then this collection  is also immediately updated automatically  for example if we delele one button from the dom html then htmlCollection automaticaly update wihich means it reduce the deleted button or element from the collection.*/

const btnbyClassName = document.getElementsByClassName('btn');
console.log(btnbyClassName); // html collection automatically update any change ///////creating and inserting elements
/**HTMLCollection { 0: button.btn.operations__tab.operations__tab--1.operations__tab--active, 1: button.btn.operations__tab.operations__tab--2, 2: button.btn.operations__tab.operations__tab--3, 3: button.btn.btn--show-modal, 4: button.btn, length: 5 } */

//lets create elemnt div

///////creating and inserting elements
//inserting element // manually with .insertAdjusentHtml  refer previous bankist

const messages = document.createElement('div');
messages.classList.add('cookie-message'); //we added cookie-message class to the div element

//message.textContent='we use cookies for improve functionality and analytics'

messages.innerHTML =
  'we use cookies for improve functionality and analytic.<button class="btn btn--close--cookie">yes we got it!</button>';

//document.querySelector('header').prepend(messages);

const header = document.querySelector('header');
//header.prepend(messages); //this inserted in the top of the header  or to our hrader dom element  or we can say the first child
header.append(messages); //this inserted at the bottom of the header  or   a as last child

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

///////Styles

//lets add styles for the cookie

messages.style.backgroundColor = '#37383d'; //added this color to the cookie
messages.style.width = '120%'; //added this height to the cookie

console.log(messages.style.color); //<empty string>  becouse we can not reterive the hidden color inside the class or color that is not exist
console.log(messages.style.backgroundColor); //rgb(55, 56, 61)  we acceess this color becouse we set it by our self
console.log(messages.style.width); //120%
console.log(messages.style.height); //<empty string>

console.log(getComputedStyle(messages).color); // rgb(187, 187, 187) //by using  'getComputedStyle' method we can get the color that sets inside the class   so the  result of the above empty string is now here acceced and solved
console.log(getComputedStyle(messages).height); //49.6px    this is the same too

//add the height of the cookie by disired px

messages.style.height =
  Number.parseFloat(getComputedStyle(messages).height, 10) + 70 + 'px'; //now we saccefully added 70 px  to the  49.6px
//note: we first paraise the height and change to number using ' Number.parseFloat' becouse its not only number but it also px (49.6px) which is string
console.log(getComputedStyle(messages).height); //119.6px   the new height       70+49.6

///castom properties
//we can change the custom property property color

document.documentElement.style.setProperty('--color-primary', 'orangered'); //this change the '--color-primary'  colors to orange red

////Attribute
//eg lets  work with the  logo  of the bankist
//standard atribute
const logo = document.querySelector('.nav__logo'); //selecting the class of the logo

console.log(logo.alt); //Bankist logo
console.log(logo.className); //nav__logo

logo.alt = ' beutiful minimalist logo '; //we change the above logo

//non -standard attribute
console.log(logo.designer); //undefined     becouse we can not access non standared directly
//but we can access it using get attrubute method

console.log(logo.getAttribute('designer')); //Jonas

//we can also set Attributes
console.log(logo.setAttribute('company', 'bankist')); //this   set    company='bankist' in  the html logo class

console.log(logo.src); //http://127.0.0.1:8080/starter/img/logo.png ///absolute version
console.log(logo.getAttribute('src')); //relative version //img/logo.png    we access the specific src that is in the htlm logo class

//let also see twitter link

const link = document.querySelector('.twitter-link');
console.log(link.href); //https://twitter.com/jonasschmedtman
console.log(link.getAttribute('href')); //https://twitter.com/jonasschmedtman

//btn link
const btnLink = document.querySelector('.nav__link--btn');
console.log(btnLink.href); //http://127.0.0.1:8080/starter/#
console.log(btnLink.getAttribute('href')); //#

///Data attribute
console.log(logo.dataset.versionNumber); //3.0     the special atrtribute is stored in the data set object  note:they should be start with data in the html

/*so that's important to keep in mind. So for these special attributes,
they are always stored in the dataset object and indeed then down here we have that 3.0
so we use actually data attributes quite a lot when we work with the UI and especially
when we need to store data in user interface, so basically in the HTML code,*/

////clases

logo.classList.add('c', 'd'); // we can add class name   ../// we  can also add multiple clases
logo.classList.remove('c', 'f'); //remove class       ///// we can also remove maltiple classes
logo.classList.toggle('c'); //toggle class
logo.classList.contains('c'); //if token is present or not        // this is not iclude

//dont use
//logo.className = 'jonas';
/*Note:using the class name property, we could also use that to set a class,
so we could do logo.className and I had said that, well let's say to Jonas.
However, don't use this, don't use, because this will override all the existing classes
and also it allows us to only put one class on any element, all right, so again, only one class*/

////add smooth scrolling from the view port to the first section

const btnScrollTo = document.querySelector('.btn--scroll-to'); //we chose the class  btn--scroll-to
const section1 = document.querySelector('#section--1'); //we chose section to  where the scroll goes

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' }); ///this make it scroll smothly from viewport to the sections or from one section to another
});

////types of event and event handlers   see list in MDN

//eg lets choose h1 and we will get allert when the mouth inters the page

/*
const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', function (e) {
  alert('addEventListener: you are reading the heading'); //we can use multiple events using event listner in one time
});

h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener: you are reading the heading okkkkkk');
});
//or you can use the old way
h1.onmouseenter = function (e) {
  alert('onmouseenter: you are reading the heading'); //we can add multiple events using this old way but they override each other
};
h1.onmouseenter = function (e) {
  alert('onmouseenter: you are reading the heading mennn'); //this over ride the first h1.onmouseenter
};
//note addEvent listener is the best becouse we can add multiple events to it  but the 'onmouseenter' can add events but the second event override the other event

*/

///if we want to listen an event only once  and then remove

//lets comment out the addEvents in the above code from making confusion

const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: you are reading the heading'); //we listen it once if we remove addeventlistener

  //h1.removeEventListener('mouseenter', alertH1); //we remove the event after we listen it once
};
h1.addEventListener('mouseenter', alertH1);

//what if we need them to remove after certain time  then we use settimeout

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); //this will remove the event after 3 seconds

//////EVENT PROPOGATION :BUBLINNG AND CAPTURING

//Capturing
/*Another phase of event processing is known as capturing. In practice, 
it is rarely used but can be useful sometimes. With capturing, firstly, 
the outermost element captures the event. Then the event is propagated to the inner elements.

So, for reaching the click on <tr> , the event should pass through the chain of ancestors down to the exact element. 
This process is called “capturing”. Then, it gets to the target, triggering there ( it is the target phase), and only after that,
 it goes up (the phase of bubbling), calling the handlers on its path.

*/

//event.target

/*The parent element’s handler can always receive the details where it happened. 
The most deeply nested element causing the event, is known as a target element, and it is accessible as event.target.

-the event.target is the target element, initiating the event. It will not change through the process of bubbling.*/

//Bubbling

/**The principle of bubbling is simple. Whenever an event occurs on an element,
  at first place it will run the handler on it, then its parent, then on other ancestors.*/

///SUMMERY
/*The processes of capturing and bubbling are means of event propagation
 in the HTML DOM API when an event happens inside an element within another element, 
and both of the elements have registered a handler.

So, when an event occurs, the most nested element in which it happened becomes
 the “target element” (event.target). Afterward, this event moves down from the 
 document root to the target element, calling the handlers assigned with addEventListener(...., true) on the path. 
 Then the element bubbles up from the target element to the root and calls the handlers assigned with on<event> and
  addEventListener without applying any third argument.*/
