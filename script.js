// Element Selectors
const navbarEl = document.querySelector('nav');
const navLinks = document.getElementById('nav-links');
const bannerEl = document.getElementById('banner');
const menuWrapper = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.getElementById("closeIcon");
const menuIcon = document.getElementById("menuIcon");

// Event Listener & Observers
hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
  function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)

// Observer

let observer = new IntersectionObserver(callback, {
  threshold: 0.2
});

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navbarEl.style.backgroundColor = 'transparent'
    } else {
      navbarEl.style.backgroundColor = '#FFBF69';
    }
  });
}

observer.observe(bannerEl)

// Event Listener Functions
function toggleMenu() {
  if (menuWrapper.classList.contains("showMenu")) {
    menuWrapper.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menuWrapper.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}