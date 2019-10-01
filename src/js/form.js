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



