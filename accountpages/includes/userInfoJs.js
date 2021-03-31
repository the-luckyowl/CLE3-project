window.addEventListener("load",init);

const menu = document.getElementById('accountManager');

function init(){
menu.addEventListener('click',menuClickHandler)
}
function menuClickHandler(e){
    let clickedItem = e.target
    let items = document.getElementsByClassName('item');
    if ( clickedItem.classList.contains ){
        return;
    }
    clickedItem.classList.toggle( 'active');
}
