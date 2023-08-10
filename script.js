const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');
const headerHeight = header.clientHeight;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  
  // Calculate the threshold where the navbar color change happens
  const colorChangeThreshold = headerHeight;
  
  if (scrollPosition > colorChangeThreshold) {
    const opacity = Math.min(1, (scrollPosition - colorChangeThreshold) / 100);
    navbar.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
});