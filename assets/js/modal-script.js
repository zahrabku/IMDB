const menu_modal = document.querySelector(".menu_modal");

const menu_button = document.querySelector(".navbar__menu_button");
const side_menu_button=document.querySelector(".navbar__hambergur_menu")

const menu_modal_close = document.querySelector(".button--close");

const page_content =document.querySelector(".container");

function open_modal() {
    menu_modal.classList.remove('hide')
    document.body.classList.add('body--overflow')
}

function close_modal() {
    menu_modal.classList.add('hide')
    document.body.classList.remove('body--overflow')
}

menu_button.addEventListener("click", open_modal);

menu_modal_close.addEventListener('click', close_modal);

side_menu_button.addEventListener('click',open_modal);
