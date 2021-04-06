window.addEventListener('load',init);
let toggleMenu;
let navLinks = document.getElementsByClassName('menuItem');
function init(){
    if(window.innerWidth < 600){

        toggleMenu = document.getElementById('menuHeaderMobile')

    }
    toggleMenu.addEventListener('click',menuToggleClickHandler);

}

function menuToggleClickHandler(){
    for (let i = 0; i < navLinks.length; i++) {

        navLinks[i].classList.toggle('active');
    }
}
