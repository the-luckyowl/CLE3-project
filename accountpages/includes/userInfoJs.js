//wait till everything is loaded then go to init function.
window.addEventListener("load",init);
//create object array to search from
let cats = [{name:'feniks', number: 28},
    {name:'shifu', number:2},
    {name:'leela', number:22},
    {name:'raspberry', number:14},
    {name:'leela', number:41},
    {name:'marvel', number:41},
    {name:'mazzel', number:41}
]
//get search input from html
const searchBar = document.getElementById('searchBar');
const concertList = document.getElementById('concertOverview');
let value;
function init(){
    //add eventlistener on searchbar.
    searchBar.addEventListener('keyup',(event)=>{
        //get the input value
        value = event.target.value;
        //check value and if there is a value with out spaces.
        if (value && value.trim().length>0){
            //take out spaces and set search query to lowercase
            value = value.trim().toLowerCase();
            //filter through array to find matches.
            setList(cats.filter(number =>{
                //return results that include the search query
                return number.name.includes(value);
            }).sort((resultA,resultB) => {
               return sortResults(resultB.name, value) - sortResults(resultA.name, value);
            }));

        }else{
            clearList();
        }
    })
}
function sortResults(value, searchterm){
    //closest value returns highest
    if (value === searchterm){
        return 2;
    }
    //then if it starts with the searchterm
    else if (value.startsWith(searchterm)){
        return 1;
    }
    //then if the searchterm is anywhere in the value
    else{
        return 0;
    }
}
function setList(group){
clearList();
    for (const cat of group){
    let listItem = document.createElement('li');
    listItem.classList.add();
    listItem.innerText = (cat.name);
    concertList.appendChild(listItem);
    }
    if (group.length === 0){
        noResults();
    }
}
function noResults(){
    let listItem = document.createElement('li');
    listItem.classList.add();
    listItem.innerText = ('No result');
    concertList.appendChild(listItem);
}
function clearList(){
    while (concertList.firstChild){
        concertList.removeChild(concertList.firstChild);
    }
}
// const menu = document.getElementById('accountManager');
// const menuItems = document.getElementsByClassName('item');
//use trim to remove spaces inside search
// function menuClickHandler(e){
//     let clickedItem = e.target;
//         if (clickedItem.classList.contains('item')){
//             console.log('hello');
//             clickedItem.setAttribute('class','item active' );
//         }
//     else if (clickedItem.classList.contains('item') === true){
//         console.log('no longer active');
//         clickedItem.classList.remove('class');
//     }
//
// }
