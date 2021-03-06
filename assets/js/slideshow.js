function implementSlider(parentELement, count, prevbutton, nextbutton) {
    var slides = [...parentELement.querySelectorAll('.slide')];

    var imageIndex = 0;

    var numberOfSlide = count;

    showSlide(imageIndex);

    function moveSlides(number) {
        showSlide(imageIndex += number);
    }


    function showSlide(showIndex) {

        if (imageIndex >= slides.length) {
            imageIndex = 0
        };
        if (imageIndex < 0) {
            imageIndex = slides.length
        };
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        };

        for (let j = imageIndex; j < imageIndex + numberOfSlide; j++) {

            slides[j].style.display = 'block';
        }

    }


    parentELement.querySelector(`.${prevbutton}`).onclick = () => {
        moveSlides(-numberOfSlide);
        // slides.map(item => {
        //     item.style.animation = 'slide-animation-left 0.3s';
        // })
    };
    parentELement.querySelector(`.${nextbutton}`).onclick = () => {
        // slides.map(item => {
        //     item.style.animation = 'slide-animation-right 0.3s';
        // })
        moveSlides(numberOfSlide);
    };
}
