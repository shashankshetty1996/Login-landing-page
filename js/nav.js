document.querySelector('.menu-toggle').addEventListener('click', sidedrawer);
let drawer = document.querySelector('nav');
let toggleIcon = document.querySelector('.menu-toggle .fa');

function sidedrawer() {
  // Toggle active class
  drawer.classList.toggle('active');

  // Toggle menu sign
  if (drawer.classList.contains('active')) {
    toggleIcon.classList.replace('fa-bars', 'fa-times');
  } else {
    toggleIcon.classList.replace('fa-times', 'fa-bars');
  }
}