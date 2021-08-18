const menuBtn = document.querySelector('.mobtrigger');
const dropdown = document.querySelector('.dropdown');
let testItem1 = document.querySelectorAll('.test_item ');
let menuOpen = false;
let dropdownOpen = false;
let itemActive = false;

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
console.log(testItem1)

testItem1.addEventListener('mouseenter', e =>{
    if(!itemActive){
        testItem1[0].classList.add('active');
        itemActive = true;
    }else{
        testItem1[0].classList.remove('active');
        itemActive = false;
    }
    
});
    