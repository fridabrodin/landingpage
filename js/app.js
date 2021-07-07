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
 *
 * Global variables
 *
*/

const sections = document.querySelectorAll("section");
const nav = document.querySelector("#navbar__list");

/**
 *
 *
 *
*/

/**
 *
 * Main functions
 *
*/

// To build the nav, we need to loop through all sections

for (let i = 0; i < sections.length; i++) {
  // Create a new list item and add it to the nav
  newListItem = document.createElement("li");
  nav.appendChild(newListItem);
  // Create a new anchor, att the data-nav and section ID
  newAnchor = document.createElement("a");
  newAnchor.textContent = sections[i].getAttribute("data-nav");
  let linkHref = sections[i].getAttribute("id");
  // Add href so that the anchor is clickable, and the anchor to the list
  newAnchor.setAttribute("href", `#${linkHref}`);
  newListItem.appendChild(newAnchor);
}

// Scroll to section on click

nav.addEventListener("click", function (event) {
  //To just have one active section with the class, we need to remove the class first with a loop
  removeAllActiveClass();
  event.preventDefault();
  if (event.target.tagName.toLowerCase() === "a"){
  // Get the active link and section, add scroll and active class
  const section = document.querySelector(event.target.getAttribute("href"));
  event.target.classList.add("active");
  section.scrollIntoView({ behavior: "smooth" });
  addActiveClass(section);}
 });


// Check if element is at top of viewport

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// If element is in viewport, we want to style it

document.addEventListener("scroll", function () {
  // Loop and remove active class
  for (let i = 0; i < sections.length; i++) {
    removeActiveClass(sections[i]);
    // Add class active to section when in viewport
    if (isInViewport(sections[i])) {
      addActiveClass(sections[i]);
    }
  }
});

function removeAllActiveClass() {
  const links = document.querySelectorAll("#navbar__list a");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("your-active-class");
  }
}

function removeActiveClass(section) {
  section.classList.remove("your-active-class");
}

function addActiveClass(section) {
  section.classList.add("your-active-class");
}

/**
 *
 * End main functions
 *
*/