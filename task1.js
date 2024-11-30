const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const navLinks = document.querySelector('.nav-links');
document.querySelector('.logo').addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
