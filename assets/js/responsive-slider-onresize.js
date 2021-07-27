// (function responsive_slider(maxWidth) {
//     if (window.screen.width <= maxWidth) {
//         implementSlider(document.querySelector(".whattowatch-slider-container"), 3, 'wtw-prev', 'wtw-next')
//     }
// })();

window.addEventListener("resize",implementSlider(document.querySelector(".whattowatch-slider-container"), 3, 'wtw-prev', 'wtw-next'))
