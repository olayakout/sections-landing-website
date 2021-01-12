/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const startingTime = performance.now();

const allSections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//function to get sections' names
function getSectionsNames() {
    
    let sections=[];
    for(let i=0;i<allSections.length;i++){
        sections.push(allSections[i].getAttribute("data-nav"));
    }
    return sections;
}

//create navigation
function createNav(sections){
    const ulOfNav=document.getElementById("navbar__list");
    for(var i=0;i<sections.length;i++){
        let item=document.createElement("LI");
        item.appendChild(document.createTextNode(sections[i]));
        item.setAttribute("class", "menu__link");
        item.setAttribute("data-il",sections[i].replace(/\s+/g, '').toLowerCase());
        ulOfNav.appendChild(item);
    }
}
// get element in viewPort
function elementInViewport(el) {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  let width = el.offsetWidth;
  let height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

//get sections names
const sectionsNames=getSectionsNames();
//create nav
createNav(sectionsNames);



// Add class 'active' to section when near top of viewport

document.addEventListener('click', function (evt) {
    // Scroll to section on link click

    if (evt.target.nodeName === 'LI') {
        for(let i=0;i<allSections.length;i++){
            allSections[i].classList.remove("your-active-class");
        }
        

        const id=evt.target.getAttribute("data-il");

        let selected=document.getElementById(id);
        // Scroll to anchor ID using scrollTO event
        selected.scrollIntoView();
        // Set sections as active
        selected.setAttribute("class",'your-active-class');
        // stop default event
        evt.preventDefault();


}



});

// Setup isScrolling variable
let isScrolling;
let mybutton = document.getElementById("myBtn");

// // Listen for scroll events
// window.addEventListener('scroll', function ( event ) {
//     //btn to scroll up
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybutton.style.display = "block";
//       } else {
//         mybutton.style.display = "none";
//       }

// 	// Clear our timeout throughout the scroll
// 	window.clearTimeout( isScrolling );

// 	// Set a timeout to run after scrolling ends
// 	isScrolling = setTimeout(function() {

// 		// Run the callback
// 		document.querySelector("nav").style.display = "none";

// 	}, 100);

// });

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {
    for(let i=0;i<allSections.length;i++){
      if(elementInViewport(allSections[i])){
        allSections[i].setAttribute("class",'your-active-class');
      }else{
        allSections[i].classList.remove("your-active-class");
      }
    }

});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  let coll = document.getElementsByClassName("collapsible");
  let i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }  
const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


