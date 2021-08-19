const menuBtn = document.querySelector('.mobtrigger');
const dropdown = document.querySelector('.dropdown');

let testItem1 = document.getElementById('ti1');
let testItem2 = document.getElementById('ti2');
let testItem3 = document.getElementById('ti3');

let listItem1 = document.getElementById('li1');
let listItem2 = document.getElementById('li2');
let listItem3 = document.getElementById('li3');

let txItem1 = document.getElementById('tx1');
let txItem2 = document.getElementById('tx2');
let txItem3 = document.getElementById('tx3');

let menuOpen = false;
let dropdownOpen = false;

let itemActive1 = false;
let itemActive2 = false;
let itemActive3 = false;

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


testItem1.addEventListener('mouseover', e =>{
    if(!itemActive1){
        testItem1.classList.add('active');
        testItem2.classList.remove('active');
        testItem3.classList.remove('active');
        listItem1.classList.add('active');
        listItem2.classList.remove('active');
        listItem3.classList.remove('active');

        txItem1.classList.add('active');
        txItem2.classList.remove('active');
        txItem3.classList.remove('active');

        itemActive1 = true;
        itemActive2 = false;
        itemActive3 = false;
        console.log(testItem1)
    }
    
});

testItem2.addEventListener('mouseover', e =>{
    if(!itemActive2){
        testItem1.classList.remove('active');
        testItem2.classList.add('active');
        testItem3.classList.remove('active');
        listItem1.classList.remove('active');
        listItem2.classList.add('active');
        listItem3.classList.remove('active');

        txItem1.classList.remove('active');
        txItem2.classList.add('active');
        txItem3.classList.remove('active');
        itemActive1 = false;
        itemActive2 = true;
        itemActive3 = false;
        console.log(testItem2)
    }
    
});

testItem3.addEventListener('mouseover', e =>{
    if(!itemActive3){
        testItem1.classList.remove('active');
        testItem2.classList.remove('active');
        testItem3.classList.add('active');
        listItem1.classList.remove('active');
        listItem2.classList.remove('active');
        listItem3.classList.add('active');

        txItem1.classList.remove('active');
        txItem2.classList.remove('active');
        txItem3.classList.add('active');
        itemActive1 = false;
        itemActive2 = false;
        itemActive3 = true;
        console.log(testItem3)
    }
    
});