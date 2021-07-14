const menu_modal = document.querySelector(".modal");

const menu_button = document.querySelector(".menu-button");

const menu_modal_close = document.querySelector(".modal-close");

function open_modal() {
    menu_modal.style.height = '100vh';
}

function close_modal() {
    menu_modal.style.height = '0vh';
}

menu_button.addEventListener("click", open_modal);

menu_modal_close.addEventListener('click', close_modal);
