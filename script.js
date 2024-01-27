let slideIndex = 0;

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(index) {
    const slides = document.querySelectorAll('.certificate-item');
    
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
}
