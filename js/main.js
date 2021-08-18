const menuBtn = document.querySelector('.mobtrigger');
const dropdown = document.querySelector('.dropdown');
let menuOpen = false;
let dropdownOpen = false;
menuBtn.addEventListener('click', () =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        dropdown.classList.add('open');
        dropdownOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        dropdown.classList.remove('open');
        dropdownOpen = false;
    }
} );