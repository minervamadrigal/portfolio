const menuBtn = document.querySelector('.mobtrigger');
let menuOpen = false;

console.log(menuBtn);
menuBtn.addEventListener('click', () =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
} );