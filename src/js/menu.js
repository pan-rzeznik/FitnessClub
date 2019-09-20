//Logic for RWD navbar menu

let btn = document.querySelector('.btnMenu');
let btnClose = document.querySelector('.navbar .menu .btnClose');

btn.addEventListener('click', ()=> {
    document.querySelector('.navbar .menu').style.transform= "translateX(0)";
}) 

btnClose.addEventListener('click', ()=> {
    document.querySelector('.navbar .menu').style.transform= "translateX(1000px)";
}) 

window.onresize = function() {
    if(window.innerWidth > 1025 && window.innerWidth < 1030) {
        console.log('ogień');
        
        document.querySelector('.navbar .menu').style.transform= "translateX(0)";
    }
}

 
