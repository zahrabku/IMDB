const menu_modal = document.querySelector(".modal");

const menu_button = document.querySelector(".menu-button");

const side_menu_button=document.querySelector(".sidemenue-button")

const menu_modal_close = document.querySelector(".modal-close");

const page_content =document.querySelector(".container");

function open_modal() {
    menu_modal.style.display = 'block';
    page_content.style.height = '100vh'; 
    page_content.style.overflowY = 'hidden'; 
}

function close_modal() {
    menu_modal.style.display = 'none';
    page_content.style.overflowY = ''; 
}

menu_button.addEventListener("click", open_modal);

menu_modal_close.addEventListener('click', close_modal);

side_menu_button.addEventListener('click',open_modal)

