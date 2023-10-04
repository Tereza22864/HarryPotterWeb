const menuIcon = document.getElementById ("menu-icon");
const nav = document.getElementById("nav");
const hamburgerIcon = document.getElementsByClassName("fa-solid")[0];

menuIcon.onclick = function() {
  if (nav.className === "show") {
    nav.className = "";
  } else {
    nav.className = "show";
  }
 
  if (nav.className === "show") {
    hamburgerIcon.className = "fa-solid fa-xmark";
  } else {
    hamburgerIcon.className = "fa-solid fa-bars";
  }
};

nav.onclick = function() {
  nav.className = "";
  hamburgerIcon.className = "fa-solid fa-bars";
};

window.onload = function() {
  hamburgerIcon.className = "fa-solid fa-bars";
};

const footer = document.querySelector('footer');

const adjustFooter = () => {
    const footerHeight = footer.offsetHeight;
    main.style.marginBottom = `${footerHeight}px`;
};

window.addEventListener('load', adjustFooter);
window.addEventListener('resize', adjustFooter);

const navLinks = document.querySelectorAll('#nav a');

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(event) {
        event.preventDefault();
        var activeLink = document.querySelector('#nav a.active');
        if (activeLink) activeLink.classList.remove('active');
        this.classList.add('active');
    });
}



