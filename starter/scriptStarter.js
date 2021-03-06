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

//header.before(messages); //this insert message before header
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
messages.style.width = '120%'; //added this width to the cookie

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

document.documentElement.style.setProperty('--color-primary', 'green'); //this change the '--color-primary'  colors to green

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

//////////////add smooth scrolling from the view port to the first section

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

/////////////////////EVENT PROPOGATION :BUBLINNG AND CAPTURING

//Capturing
/*Another phase of event processing is known as capturing. In practice, 
it is rarely used but can be useful sometimes. With capturing, firstly, 
the outermost element captures the event. Then the event is propagated to the inner elements.
So, for reaching the click on <tr> , the event should pass through the chain of ancestors down to the exact element. 
This process is called ???capturing???. Then, it gets to the target, triggering there ( it is the target phase), and only after that,
 it goes up (the phase of bubbling), calling the handlers on its path.
*/

//event.target

/*The parent element???s handler can always receive the details where it happened. 
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
 the ???target element??? (event.target). Afterward, this event moves down from the 
 document root to the target element, calling the handlers assigned with addEventListener(...., true) on the path. 
 Then the element bubbles up from the target element to the root and calls the handlers assigned with on<event> and
  addEventListener without applying any third argument.*/

//eg
/*
//lets generate a ranndom color of rgb()  from 0 to 255   like rgb(234,0,255)  so on
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
//console.log(randInt(0, 255));  for testing porpuse
const randomColor = () =>
  `rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})`;
//console.log(randomColor(0, 255)); //rgb(86,146,205)   it gives as random colors
//lets attach then event handler to the specified element for click to happen
//i this case the class of the feature from bankist
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(); //and remember that in an event handler that this keyword, points always to the element on which that event handler is attached.
  console.log('LINK', e.target, e.currentTarget); //   First saying that this is the LINK and then event.target  And the target is essentially where the event originated.So where the event first happened.So this is not the element on which the handler is actually attached, okay?
  //e.currentTarget is  the element on which the handler is actually attached,  here is the LINK document.querySelector('.nav__link').
  //console.log(this === document.querySelector('.nav__link'));  true i write this code for testing purpose   that   the this key word is pointed to element on which that event handler is attached.  here(('.nav__link')
  //we can actually stop the event propagation. if we want to stop the propogation or bubbling to the parent elements
  //e.stopPropagation(); // if we stop the propagation then the parent element  never been  reached and then they will not handled the events but this is not good idea of stopping propogation
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget); //here e.target is not changed, e.currentTarget  is changed
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget); //here e.target is not changed, e.currentTarget  is changed
});
*/

//note  : here in the above example  when an event happened or when click  first happened in the target element then  the capturing phase is starting
// and goes down to the target element where the elemet click triggerd to handle the event after that Then the element bubbles up from the target element to the root
//it passes every parent element of each stage

//note the target element is not changen in all stages   ,  but the current event   changes

/*LINK 
//here this is target event where the click happened first   
<a class="nav__link" href="#" style="background-color: rgb(36, 213, 194);"> target event is not changed  becouse event target is where the click generated
<a class="nav__link" href="#" style="background-color: rgb(36, 213, 194);"> current event is not changed here also  becouse this it self target event
script.js:290:11
CONTAINER 
<a class="nav__link" href="#" style="background-color: rgb(36, 213, 194);"> target event is not changed  where the click happens first
<ul class="nav__links" style="background-color: rgb(89, 147, 20);">current event  is changed here becouse e.currentTarget is  the element on which the handler is actually attached,
script.js:297:11
NAV 
<a class="nav__link" href="#" style="background-color: rgb(36, 213, 194);">  target event is not changed  where the click happens and when babbling up word to the parent element of the 
<nav class="nav" style="background-color: rgb(161, 241, 76); //current event  is changed here becouse this is the parent element of target element
  */

//note:the bubbling phase can be very useful for somethng called event delegation.

///// if we really do want to catch events during the capturing phase, we can define a third parameter in the addEventlistener function.  we set it to true then  we then listening the capturing phase if we set it to false then to bubbling phase
/*
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget); //here e.target is not changed, e.currentTarget  is changed
},true);//this true is the third parameter
*/

/////////////////////////EVENT DELIGATION : implementing page navigation

///we  will comment out the above codes  to avoid confusion

//now we will select the  nav__link class to make smooth scrolling to the sections

document.querySelector('.nav__links').addEventListener('click', function (e) {
  //console.log('click');
  e.preventDefault();

  //matching

  if (e.target.classList.contains('nav__link')) {
    //this means if the clicked elements (target element ) contains  the nav__link class then perform smooth scrolling   note:if the we clicked outside the element then nothing gonna happen becouse the target element will not contain the class 'nav__link'
    const ar = e.target.getAttribute('href'); //this will give us the sections    section--1 section--2  section --3
    document.querySelector(ar).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////DOM TRAVERSING   .....
//So Dom traversing is basically walking through the Dom. Which means that we can select an element
//based on another element. And this is very important because sometimes we need to select elements
//relative to a certain other element. For example, a direct child or a direct parent element.

//lets select h1 element
const H1 = document.querySelector('h1');

//going downwords:child
console.log(H1.querySelectorAll('.highlight')); //we selects the highlighted childs of the h1 element    NodeList [ span.highlight, span.highlight ]
console.log(H1.children); // HTMLCollection { 0: span.highlight, 1: br, 2: span.highlight, length: 3 } //this works only for the direct children of H1
console.log(H1.childNodes); //NodeList(9) [ #text, <!--  Green highlight effect  -->, #text, span.highlight, #text, br, #text, span.highlight, #text ]//all  the children
console.log(H1.firstElementChild); //<span class="highlight">
H1.firstElementChild.style.color = 'white'; ///  banking becomes white
H1.lastElementChild.style.color = 'orangered'; ///minimalist change to 'orangered'

//going upwords//parents

console.log(H1.parentNode); //   header title is the direct parent of the h1 element   //<div class="header__title">
console.log(H1.parentElement); //the same  header__title  <div class="header__title">

console.log(H1.closest('.header')); //<header class="header">  //The closest() method traverses the Element and its parents (heading toward the document root) until it finds a node that matches the provided selector string
H1.closest('.header').style.background = 'lightgreen'; //we change the background color of parent element
H1.closest('h1').style.background = 'skyblue'; //here the closeset parent is h1 it self

/////going sideways: siblings
//subling elemnts
console.log(H1.previousElementSibling); //null becouse there is no subling element above h1  that sublings t0 h1
console.log(H1.nextElementSibling); // h4     this is the subling after h1
//subling nodes
console.log(H1.previousSibling); //#text   nodes
console.log(H1.nextSibling); //#text  nodes

//if we want all subling elemnets for h1
console.log(h1.parentElement.children); //HTMLCollection { 0: h1, 1: h4, 2: button.btn--text.btn--scroll-to, 3: img.header__img, length: 4 }  all the sublings elements  of the h1 element

//////BUILDING A TABBED COMPENENT
//NOTE: WE will see here  the tree tabs when  we click the first tab then it display its   content , and then when we tab the second tab we get its content while the ather taps where hiden and also for the third one too the same

//lets select the tabs

const tabs = document.querySelectorAll('.operations__tab'); //we select all the tree tabs becouse they have  'operations__tab' class for all of them
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content'); //we select all three 'operations__content' class of the three tab

//lets loop over the tabs using 'forEach' and add event handler to the tabs

//tabs.forEach(t => t.addEventListener('click', () => console.log('TAB'))); ///  doing this here is a bad practice because what if we had like 200 tabs? Then we would have 200 copies of this exact callback function here
//and that would simply slow down the page. So that's not at all desirable. so we need using event deligation

//using event deligation
///And remember that for event delegation, we need to attach the event handler on the common parent element of all the elements that we're interested in. And in our case, that is this tabs container, right?

tabsContainer.addEventListener('click', function (e) {
  //const cliked = e.target; //.closest('.operation__tab') with out this closest parent element  when we click at the tab it give as what we need but when we click in the number it give us span only so we need to fix using closest parent by selectin it like below code
  const cliked = e.target.closest('.operations__tab'); //we get what we want even when we click in the numbers   // out put <button class="btn operations__tab oper???operations__tab--active" data-tab="1">
  //console.log(cliked);  only to check if it working correctly

  //Guard clouse   --this can prevent error happened  when a  click happened  outside of the buttons
  if (!cliked) return; //modern way of returning  if there is not clicked happened

  //remove activated class
  tabs.forEach(t => t.classList.remove('operations__tab--active')); //we select the class 'operations__tab--active' we remove the active class then we added active class to the current active class when it cliked
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //activate tabs
  cliked.classList.add('operations__tab--active'); //when cliked happened the  clicked one becomes active and the button ups in the screen then down when it is in active eg//<button class="btn operations__tab oper???operations__tab--active" data-tab="2">

  ///activate the content area

  document
    .querySelector(`.operations__content--${cliked.dataset.tab}`) //clicked.dataset.tabs   gives us the carrent  data set  1,2,3
    .classList.add('operations__content--active');
});
//refer to the video 191 of jonas in udemy

///menu fade animation
/*
const nav = document.querySelector('.nav'); //we select  the parent of all the nav links
nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    //e.target is the current clicked [element]
    const link = e.target; //link becomes the current target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link'); //we select  all the  sibling of the link  or the current event target
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 0.5; ///this make all the nav__links makes them fade except the current event target
    });
    logo.style.opacity = 0.5; //this fade out the the logo
  }
});
nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    //e.target is the current clicked [element]
    const link = e.target; //link becomes the current target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link'); //we select  all the  sibling of the link  or the current event target
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 1; ///this make all the nav__links makes them fade except the current event target
    });
    logo.style.opacity = 1; //this fade out the the logo
  }
});
*/
///menu fade animation refactored
///refactoring all the above code to make it precise
const nav = document.querySelector('.nav'); //we select  the parent of all the nav links

// lets  create a function that named  handleHover
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    //e.target is the current clicked [element]
    const link = e.target; //link becomes the current target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link'); //we select  all the  sibling of the link  or the current event target
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this; ///this make all the nav__links makes them fade except the current event target
    });
    logo.style.opacity = this; //this fade out the the logo
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//implementing sticky  navigation   check in jonas video 194

///////////////////////////////////////
// Sticky navigation: Intersection Observer API

//const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
