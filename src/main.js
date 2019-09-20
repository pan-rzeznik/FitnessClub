// Create simple modal to sign up on click.

let btnOpenForm = document.querySelectorAll('.form');
let form = `<aside class="signup">
<div class="background">
    <div class="signup-form">
        <h2>Signu Up</h2>
        <form>
            <input type="text" id="" placeholder="Full Name">
            <input type="email" id="" placeholder="Email Address">
           <div class="checkbox"> 
               <input type="checkbox" name="Terms" id="check">
               <label for="Terms">I Agree to the Terms & Conditions</label>
           </div>
            <select name="" id="">
                <option value="1">Beginner (51.00$)</option>
                <option value="2">Intermidiate (65.00$)</option>
                <option value="3">Advance (75.00$)</option>
            </select>       
            <input type="submit" value="Submit">
        </form>
        <button class="btnCloseForm">X</button>
    </div>
</div>
</aside> `;

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiLCJnb3RvLmpzIiwibWVudS5qcyIsInNjcm9sbC5qcyIsInR5cGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGUgc2ltcGxlIG1vZGFsIHRvIHNpZ24gdXAgb24gY2xpY2suXHJcblxyXG5sZXQgYnRuT3BlbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybScpO1xyXG5sZXQgZm9ybSA9IGA8YXNpZGUgY2xhc3M9XCJzaWdudXBcIj5cclxuPGRpdiBjbGFzcz1cImJhY2tncm91bmRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzaWdudXAtZm9ybVwiPlxyXG4gICAgICAgIDxoMj5TaWdudSBVcDwvaDI+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+IFxyXG4gICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlRlcm1zXCIgaWQ9XCJjaGVja1wiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiVGVybXNcIj5JIEFncmVlIHRvIHRoZSBUZXJtcyAmIENvbmRpdGlvbnM8L2xhYmVsPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5CZWdpbm5lciAoNTEuMDAkKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5JbnRlcm1pZGlhdGUgKDY1LjAwJCk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+QWR2YW5jZSAoNzUuMDAkKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD4gICAgICAgXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bkNsb3NlRm9ybVwiPlg8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC9hc2lkZT4gYFxyXG5cclxuYnRuT3BlbkZvcm0uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1jb250YWluZXInKS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLGZvcm0pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGJ0bkNsb3NlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5DbG9zZUZvcm0nKTtcclxuICAgICAgICAgICAgbGV0IHNpZ251cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWdudXAnKTtcclxuICAgICAgICAgICAgYnRuQ2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2lnbnVwLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfSlcclxufSk7XHJcblxyXG5cclxuXHJcbiIsIi8vIFNtb290aCBzY3JvbGwgdG8gdGhlIHNlY3Rpb25cclxuXHJcbmxldCBzY3JvbGwgPSBuZXcgU21vb3RoU2Nyb2xsKCcubmF2YmFyIGFbaHJlZio9XCIjXCJdLCAuZm9vdGVyIGFbaHJlZio9XCIjXCJdLCAuZ29VcEJ0biBhW2hyZWYqPVwiI1wiXScsIHtcclxuXHRzcGVlZDogNDAwLFxyXG59KTtcclxuXHJcblxyXG4iLCIvL0xvZ2ljIGZvciBSV0QgbmF2YmFyIG1lbnVcclxuXHJcbmxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuTWVudScpO1xyXG5sZXQgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyIC5tZW51IC5idG5DbG9zZScpO1xyXG5cclxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyIC5tZW51Jykuc3R5bGUudHJhbnNmb3JtPSBcInRyYW5zbGF0ZVgoMClcIjtcclxufSkgXHJcblxyXG5idG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhciAubWVudScpLnN0eWxlLnRyYW5zZm9ybT0gXCJ0cmFuc2xhdGVYKDEwMDBweClcIjtcclxufSkgXHJcblxyXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyNSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMzApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb2dpZcWEJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhciAubWVudScpLnN0eWxlLnRyYW5zZm9ybT0gXCJ0cmFuc2xhdGVYKDApXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiBcclxuIiwiLy8gIEZhZGluZyBoZWFkZXIgdGV4dCBvbiBzY3JvbGxcclxuXHJcbmxldCBoZXJvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvIC50ZXh0LWJveCcpO1xyXG5sZXQgaGVpZ2h0ID0gaGVyb1NlY3Rpb24uY2xpZW50SGVpZ2h0O1xyXG5cclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaGVyb1NlY3Rpb24uc3R5bGUub3BhY2l0eSA9IDEgLSAoKHdpbmRvdy5wYWdlWU9mZnNldC0yMDApIC8gKGhlaWdodCkgLSAwLjEpO1xyXG59IiwiLy8gVHlwaW5nIGluIEhlYWRlciBTZWN0aW9uXHJcblxyXG5sZXQgb3B0aW9ucyA9IHtcclxuICAgIHN0cmluZ3M6IFtcInRoZSBvbmx5IHBsYWNlIHlvdSBoYXZlIHRvIGxpdmUuXCJdLFxyXG4gICAgdHlwZVNwZWVkOiAzMCxcclxuICAgIHN0YXJ0RGVsYXk6IDEwMCxcclxuICAgIGJhY2tEZWxheTogNTAwMCxcclxuICAgIGJhY2tTcGVlZDogMjAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc2h1ZmZsZTogdHJ1ZSxcclxuICAgIHNob3dDdXJzb3I6IHRydWUsXHJcbiAgY3Vyc29yQ2hhcjogJ3wnLFxyXG4gIH1cclxuICAgXHJcbiAgbGV0IHR5cGVkID0gbmV3IFR5cGVkKFwiLnRleHQtYm94IGgxIHNwYW5cIiwgb3B0aW9ucyk7Il19
