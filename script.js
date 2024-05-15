// MENUICON TOGGLE
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: top });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { delay: 500 });

// TYPED JS
const typed = new Typed('.multiple-text',{
    strings: ['Student', 'Coder(Beginner)', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
});

// let dwn = document.getElementById('download');
// dwn.onclick = () => {
//     window.location.href = "https://www.canva.com/design/DAGEuFVD_bM/UXhMQRmDvAXkLvKW878oqQ/view?utm_content=DAGEuFVD_bM&utm_campaign=designshare&utm_medium=link&utm_source=editor";
// }

let dwn = document.getElementById('download');
dwn.onclick = () => {
    window.location.href ="https://drive.google.com/file/d/1xi-1zgfm4uYtmlFaGNGhzFFFYV4kNlVi/view?usp=sharing";
}

// let linkedin = document.getElementsById("linkedin");
// linkedin.onclick = () => {
//     window.location.href="https://www.linkedin.com/in/omsudhamsh/";
// } this is only for button not for anchor tags

document.getElementById("linkedin").addEventListener("click", function(event) {
    event.preventDefault(); 
    window.location.href = "https://www.linkedin.com/in/omsudhamsh/";
});

document.getElementById("Personal").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "https://www.bento.me/dbo";
});

document.getElementById("Be").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href="https://www.behance.net/omsudhamsh";
});

document.getElementById("desigg").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href="https://www.behance.net/omsudhamsh"
});

document.getElementById("Bit").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href="https://bitbucket.org/omsudhamsh-projects/project-1/src/main/"
});

// document.getElementById("discorrd").addEventListener("click", function(event) {
//     event.preventDefault();
//     window.location.href="https://discordapp.com/om_sudhamsh"
// });
// -------------------------------------------------------------------------

function toggleMode() {
    const body = document.body;
    const currentMode = body.classList.contains('dark-mode');
  
    if (currentMode) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    }
  }
  