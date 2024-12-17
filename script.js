document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % carouselContainer.children.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + carouselContainer.children.length) % carouselContainer.children.length;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }
});