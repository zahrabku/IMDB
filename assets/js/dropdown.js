const dropdown_but=document.querySelector('.combobutton');
const dropdown =document.querySelector('.dropdown-container');

const dropdown_style=getComputedStyle(dropdown);

function open_close_dropdown(){

    switch(dropdown_style.display){
        case 'block':
            dropdown.style.display='none';
            break;
        case 'none':
            dropdown.style.display='block';
            break;
    }
}

dropdown_but.addEventListener('click' ,open_close_dropdown);