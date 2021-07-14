var slides = document.getElementsByClassName('slide');
console.log(slides.length);

imageIndex = 1

showSlide(imageIndex);

function moveSlides(n) {
    showSlide(imageIndex += n);
}

function showSlide(n) {

    if (n > slides.length) {
        imageIndex = 1
    };
    if (n < 1) {
        imageIndex = slides.length
    };
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    };
    slides[imageIndex - 1].style.display = 'flex';

}
document.querySelector('.next').onclick = ()=>{moveSlides(1)};
document.querySelector('.prev').onclick = ()=>{moveSlides(-1)};
