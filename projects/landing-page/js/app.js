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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = Array.from(document.querySelectorAll('section')); 
const navMenu = document.getElementById('navbar_list'); 
let listOfItems = sections.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createListOfItems(){ 
for (section of sections){ 
sectionName = section.getAttribute('data-nav'); 
sectionId = section.getAttribute('id'); 
listItem = document.createElement('li'); 
listItem.innerHTML = `<a class="menu link" href="#{sectionName}>${sectionId}</a>"` 
menu.appendhild(listItem); 
} 
} 

function toggleActiveClass(){ 
for (section of sections) { 
if (sectionInViewPort(section)){ 
if ( section.classList.contains('your-active-class')){
 section.classList.add('your-active-class'); 
} 
}else { section.classList.remove('your-active-class'); 
} 
} 
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', toggleActiveClass)

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


