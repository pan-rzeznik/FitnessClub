//Logic for RWD navbar menu

let btn = document.querySelector('.btnMenu');
let btnClose = document.querySelector('.navbar .menu .btnClose');
let navItems = document.querySelectorAll('.menu ul > li');

btn.addEventListener('click', ()=> {
    document.querySelector('.navbar .menu').style.transform= "translateX(0)";
}) 

btnClose.addEventListener('click', ()=> {
    document.querySelector('.navbar .menu').style.transform= "translateX(1000px)";
}) 

window.onresize = function() {
    if(window.innerWidth > 1025) {
        
        document.querySelector('.navbar .menu').style.transform= "translateX(0)";
    }
}

navItems.forEach(navLink => {
 
        navLink.addEventListener('click', ()=> {
            if(window.innerWidth < 1025) {
            document.querySelector('.navbar .menu').style.transform= "translateX(1000px)";
            }
        })
});