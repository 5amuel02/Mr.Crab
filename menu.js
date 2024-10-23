const menu = document.querySelector('.section-menu img'); 
const listMenu = document.querySelectorAll('.box img'); 

for (let i = 0; i < listMenu.length; i++) {
    listMenu[i].addEventListener('click', function() { 
        menu.classList.add('fade-out'); 

        setTimeout(() => {
            menu.src = listMenu[i].src; 
            menu.classList.remove('fade-out'); 
        }, 500); 
    });
}
