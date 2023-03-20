const hamburgerBtn = document.querySelector('.hamburger');
const icon = document.querySelector('.icon');
const sidenav = document.getElementById('mySidenav');

hamburgerBtn.addEventListener('click', () => {
  sidenav.classList.toggle('slide-in');
  icon.classList.toggle('change');
});
