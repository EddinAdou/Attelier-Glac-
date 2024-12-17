const slider = document.querySelector('.slider');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let index = 0;

nextButton.addEventListener('click', () => {
  index = (index + 1) % slider.children.length; // Boucle infinie
  slider.style.transform = `translateX(-${index * 100}%)`;
});

prevButton.addEventListener('click', () => {
  index = (index - 1 + slider.children.length) % slider.children.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
});
