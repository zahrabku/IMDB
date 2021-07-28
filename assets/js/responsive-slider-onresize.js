function responsive_slider() {
    var screen_desktop_view = window.matchMedia("(min-width: 1024px)");
    var screen_tablet_view = window.matchMedia("(max-width: 1024px)");

    if (screen_tablet_view.matches) {
        implementSlider(document.querySelector(".grid3__what_to_watch__slideshow"), 3, 'button--prev--wtw', 'button--next--wtw')
    } else if (screen_desktop_view) {
        implementSlider(document.querySelector(".grid3__what_to_watch__slideshow"), 6, 'button--prev--wtw', 'button--next--wtw')
    }
}

window.addEventListener('resize', responsive_slider)

