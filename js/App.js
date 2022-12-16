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

const navBarList = document.getElementById('navbar__list');
const sectionContent = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBarBarrel = () => {

    let navInterface = '';
    // looping over all sections
    sectionContent.forEach(section => {

        const sectionName = section.id;
        const sectionNav = section.dataset.nav;

        navInterface += `<li><a class="menu__link" href="#${sectionName}">${sectionNav}</a></li>`;

    });
    // append all elements to the navigation
    navBarList.innerHTML = navInterface;


};

navBarBarrel();
const scrollToSec = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sectionContent ; i++){
                sectionContent[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};

scrollToSec();
// Add class 'active' to section when near top of viewport

// getting the largest value that's less or equal to the number
const secValue = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const activeOff = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// adding the active class
const activeOn = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
    };
};
window.addEventListener('scroll' ,() =>{
    const scrolledOn = document.querySelectorAll(".menu__link")
    sectionContent.forEach((section, i)=>{
        //Get the boundingrect for each section 
        const sectionLink = section.getBoundingClientRect();
        //Check if the section is in viewport or not 
        if (sectionLink.top <= 380 && sectionLink.bottom >= 350){
            section.classList.add("your-active-class");
            scrolledOn[i].classList.add("active_button");
        } else{
            section.classList.remove("your-active-class");
            scrolledOn[i].classList.remove("active_button");
        }
    })

});





// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
