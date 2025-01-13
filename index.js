// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = '/'
})





//-----------------------------------------------------------------
//-------------------------Project Scroll-------------------------

const projectsWrapper = document.querySelector('.projects-wrapper');
const projects = document.querySelectorAll('.project');
const leftButton = document.querySelector('.nav-button.left');
const rightButton = document.querySelector('.nav-button.right');
let currentIndex = 0;
const totalProjects = projects.length;

function showProject(index) {
  projectsWrapper.style.transform = `translateX(-${index * 100}%)`;
}

function nextProject() {
  currentIndex = (currentIndex + 1) % totalProjects;
  showProject(currentIndex);
}

function prevProject() {
  currentIndex = (currentIndex - 1 + totalProjects) % totalProjects;
  showProject(currentIndex);
}

leftButton.addEventListener('click', prevProject);
rightButton.addEventListener('click', nextProject);

setInterval(nextProject, 5000);

window.addEventListener('resize', () => {
  showProject(currentIndex);
});




//-----------------------------------------------------------------
//-----Container_Section_visible & hiding_animation----------------
document.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section');
  const triggerBottom = window.innerHeight / 5 * 4;
  const triggerTop = window.innerHeight / 5;

  sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      if (sectionTop < triggerBottom && sectionBottom > triggerTop) {
          section.classList.add('visible');
          section.classList.remove('hidden');
      } else if (sectionBottom <= triggerTop) {
          section.classList.add('hidden');
          section.classList.remove('visible');
      } else {
          section.classList.remove('visible');
      }
  });
});



          
          
//------------------------------------------------------------------

// const typedElement = document.querySelector(".typed");
          
// if (typedElement) {
//   const typedStrings = typedElement.getAttribute("data-typed-items").split(",");
//   new Typed(".typed", {
//     strings: typedStrings,
//     loop: true,
//     typeSpeed: 100,
//     backSpeed: 50,
//     backDelay: 2000,
//   });
// }