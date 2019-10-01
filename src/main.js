// Create simple modal to sign up on click.

let btnOpenForm = document.querySelectorAll('.form');
let form = `<aside class="signup">
<div class="background">
    <div class="signup-form">
        <h2>Signu Up</h2>
        <h3>Skorzystaj z poniższego formularza by zapisać się na listę oczekujących na konkretne zajęcia</h3>
        <form class="signup-form__form">
            <input type="text" class="name" placeholder="Full Name">
            <input type="email" class="email" placeholder="Email Address">
           <div class="checkbox"> 
               <input type="checkbox" name="Terms" id="check">
               <label for="Terms">I Agree to the Terms & Conditions</label>
           </div>
            <select class="select">
                <option value="1">Beginner (51.00$)</option>
                <option value="2">Intermidiate (65.00$)</option>
                <option value="3">Advance (75.00$)</option>
            </select>       
            <input type="submit" value="Submit" class="submit">
        </form>
        <button class="btnCloseForm">X</button>
    </div>
</div>
</aside> `

btnOpenForm.forEach(element => {
    element.addEventListener('click', ()=> {
        document.querySelector('.page-container').insertAdjacentHTML('afterbegin',form);

        setTimeout(() => {
            let btnCloseForm = document.querySelector('.btnCloseForm');
            let signup = document.querySelector('.signup');
            btnCloseForm.addEventListener('click', () => {
                signup.remove();
            })
        }, 1000);
    })
});




// Smooth scroll to the section
let scroll = new SmoothScroll('.navbar a[href*="#"], .footer a[href*="#"], .goUpBtn a[href*="#"]', {
	speed: 400,
});



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
//  Fading header text on scroll

let heroSection = document.querySelector('.hero .text-box');
let height = heroSection.clientHeight;

window.onscroll = function () {
    heroSection.style.opacity = 1 - ((window.pageYOffset-200) / (height) - 0.1);
}
// Typing in Header Section

let options = {
    strings: ["the only place you have to live."],
    typeSpeed: 30,
    startDelay: 100,
    backDelay: 5000,
    backSpeed: 20,
    loop: true,
    shuffle: true,
    showCursor: true,
  cursorChar: '|',
  }
   
  let typed = new Typed(".text-box h1 span", options);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiLCJnb3RvLmpzIiwibWVudS5qcyIsInNjcm9sbC5qcyIsInR5cGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGUgc2ltcGxlIG1vZGFsIHRvIHNpZ24gdXAgb24gY2xpY2suXHJcblxyXG5sZXQgYnRuT3BlbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybScpO1xyXG5sZXQgZm9ybSA9IGA8YXNpZGUgY2xhc3M9XCJzaWdudXBcIj5cclxuPGRpdiBjbGFzcz1cImJhY2tncm91bmRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzaWdudXAtZm9ybVwiPlxyXG4gICAgICAgIDxoMj5TaWdudSBVcDwvaDI+XHJcbiAgICAgICAgPGgzPlNrb3J6eXN0YWogeiBwb25pxbxzemVnbyBmb3JtdWxhcnphIGJ5IHphcGlzYcSHIHNpxJkgbmEgbGlzdMSZIG9jemVrdWrEhWN5Y2ggbmEga29ua3JldG5lIHphasSZY2lhPC9oMz5cclxuICAgICAgICA8Zm9ybSBjbGFzcz1cInNpZ251cC1mb3JtX19mb3JtXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+IFxyXG4gICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlRlcm1zXCIgaWQ9XCJjaGVja1wiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiVGVybXNcIj5JIEFncmVlIHRvIHRoZSBUZXJtcyAmIENvbmRpdGlvbnM8L2xhYmVsPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwic2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkJlZ2lubmVyICg1MS4wMCQpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPkludGVybWlkaWF0ZSAoNjUuMDAkKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5BZHZhbmNlICg3NS4wMCQpPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PiAgICAgICBcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIGNsYXNzPVwic3VibWl0XCI+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5DbG9zZUZvcm1cIj5YPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvYXNpZGU+IGBcclxuXHJcbmJ0bk9wZW5Gb3JtLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtY29udGFpbmVyJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJyxmb3JtKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBidG5DbG9zZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuQ2xvc2VGb3JtJyk7XHJcbiAgICAgICAgICAgIGxldCBzaWdudXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lnbnVwJyk7XHJcbiAgICAgICAgICAgIGJ0bkNsb3NlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNpZ251cC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH0pXHJcbn0pO1xyXG5cclxuXHJcblxyXG4iLCIvLyBTbW9vdGggc2Nyb2xsIHRvIHRoZSBzZWN0aW9uXHJcbmxldCBzY3JvbGwgPSBuZXcgU21vb3RoU2Nyb2xsKCcubmF2YmFyIGFbaHJlZio9XCIjXCJdLCAuZm9vdGVyIGFbaHJlZio9XCIjXCJdLCAuZ29VcEJ0biBhW2hyZWYqPVwiI1wiXScsIHtcclxuXHRzcGVlZDogNDAwLFxyXG59KTtcclxuXHJcblxyXG4iLCIvL0xvZ2ljIGZvciBSV0QgbmF2YmFyIG1lbnVcclxuXHJcbmxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuTWVudScpO1xyXG5sZXQgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyIC5tZW51IC5idG5DbG9zZScpO1xyXG5sZXQgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudSB1bCA+IGxpJyk7XHJcblxyXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXIgLm1lbnUnKS5zdHlsZS50cmFuc2Zvcm09IFwidHJhbnNsYXRlWCgwKVwiO1xyXG59KSBcclxuXHJcbmJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyIC5tZW51Jykuc3R5bGUudHJhbnNmb3JtPSBcInRyYW5zbGF0ZVgoMTAwMHB4KVwiO1xyXG59KSBcclxuXHJcbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPiAxMDI1KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhciAubWVudScpLnN0eWxlLnRyYW5zZm9ybT0gXCJ0cmFuc2xhdGVYKDApXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hdkl0ZW1zLmZvckVhY2gobmF2TGluayA9PiB7XHJcbiBcclxuICAgICAgICBuYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyIC5tZW51Jykuc3R5bGUudHJhbnNmb3JtPSBcInRyYW5zbGF0ZVgoMTAwMHB4KVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufSk7IiwiLy8gIEZhZGluZyBoZWFkZXIgdGV4dCBvbiBzY3JvbGxcclxuXHJcbmxldCBoZXJvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvIC50ZXh0LWJveCcpO1xyXG5sZXQgaGVpZ2h0ID0gaGVyb1NlY3Rpb24uY2xpZW50SGVpZ2h0O1xyXG5cclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaGVyb1NlY3Rpb24uc3R5bGUub3BhY2l0eSA9IDEgLSAoKHdpbmRvdy5wYWdlWU9mZnNldC0yMDApIC8gKGhlaWdodCkgLSAwLjEpO1xyXG59IiwiLy8gVHlwaW5nIGluIEhlYWRlciBTZWN0aW9uXHJcblxyXG5sZXQgb3B0aW9ucyA9IHtcclxuICAgIHN0cmluZ3M6IFtcInRoZSBvbmx5IHBsYWNlIHlvdSBoYXZlIHRvIGxpdmUuXCJdLFxyXG4gICAgdHlwZVNwZWVkOiAzMCxcclxuICAgIHN0YXJ0RGVsYXk6IDEwMCxcclxuICAgIGJhY2tEZWxheTogNTAwMCxcclxuICAgIGJhY2tTcGVlZDogMjAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc2h1ZmZsZTogdHJ1ZSxcclxuICAgIHNob3dDdXJzb3I6IHRydWUsXHJcbiAgY3Vyc29yQ2hhcjogJ3wnLFxyXG4gIH1cclxuICAgXHJcbiAgbGV0IHR5cGVkID0gbmV3IFR5cGVkKFwiLnRleHQtYm94IGgxIHNwYW5cIiwgb3B0aW9ucyk7Il19
