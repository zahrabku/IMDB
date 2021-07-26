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
        moveSlides(-numberOfSlide)
    };
    parentELement.querySelector(`.${nextbutton}`).onclick = () => {
        moveSlides(numberOfSlide)
    };
}

// function implementSlider1(parentELement, count) {
//     var slides = [...parentELement.querySelectorAll('.slide')];

//     var imageIndex = 0;

//     var numberOfSlide = count;

//     showSlide(imageIndex, numberOfSlide);

//     function moveSlides(numberOfSlide) {
//         showSlide(imageIndex += numberOfSlide, numberOfSlide);
//     }

//     function showSlide(IndexoffirstImage, numberOfSlide) {

//         if (IndexoffirstImage > slides.length) {
//             imageIndex = 0
//         };
//         if (IndexoffirstImage < 0) {
//             imageIndex = slides.length
//         };
//         for (let i = 0; i < slides.length; i++) {
//             slides[i].style.display = 'none';

//         };

//         for (let j = imageIndex; j < imageIndex + numberOfSlide; j++) {
//             slides[j].style.display = 'flex';
//         }
//     }
//     parentELement.querySelector('.next-feature').onclick = () => {
//         moveSlides(numberOfSlide)
//     };
//     parentELement.querySelector('.prev-feature').onclick = () => {
//         moveSlides(-numberOfSlide)
//     };
// }


// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }