
//import needed files
 import {signupHandler} from "./api/userEntry.js";
 import { loginHandler } from "./api/login.js";
//Initial toggling between pages
 document.addEventListener("DOMContentLoaded", () => {
      
    //Get all the pages selectors and buttons for the toggling
 /*    getAccounts().then(accounts => {
      console.log("Fetched accounts:", accounts);
    }); */
    const loginPage = document.querySelector(".login-page");
    const signupPage = document.querySelector(".signup-page");
    const toSignupBtn = document.getElementById("toSignup-button");
    const toLoginBtn = document.getElementById("toLogin-button");
    //Get the signup form id
    const signupForm = document.getElementById('signup-form-id');
    //get the login form id
    const loginForm = document.getElementById('login-form-id');

    //get the link buttons as well
    const signupNav = document.querySelector(".signup-nav");
    const loginNav = document.querySelector(".login-nav");
    //get create account elements
    const createBankAccountPage = document.querySelector(".create-bank-account-page");
    const createAccountButton = document.getElementById("create-account");
    const userDashboardButton = document.getElementById('user-dashboard-link');
    const userDashboard = document.querySelector('.user-dashboard');
    //get all the message bars
    const messageBar = document.querySelector('.message-bar');
    const signupMsg = document.getElementById('signup-msg');
    const loginMsg = document.getElementById('login-msg');
    //load the spinner
    const spinnerOverlay = document.getElementById('spinner-overlay');
    //get role
  

    //Ensure that only the login page shows first until a user click on signup


  
    createBankAccountPage.style.display = "none";
    signupPage.style.display = "none";
    loginPage.style.display = "flex";
    userDashboardButton.style.display = "block";
    userDashboard.style.display = "none";
    messageBar.style.display = "none";
    signupMsg.style.display="none";
   /*  messageBar.style.color = "green";
    messageBar.style.borderTop = "4px solid green";
    messageBar.innerText = "Sign Up successfull"; */

     //if signup button is clicked from login, show signup page
    toSignupBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        //remove the login page and render the signup page
      loginPage.style.display = "none";
      signupPage.style.display = "flex";
      createBankAccountPage.style.display = "none";
      userDashboard.style.display = "none";
    });
    //if login button is clicked from signup page, removes signup page and render login page
    toLoginBtn?.addEventListener("click", (e) => {
        e.preventDefault();
      signupPage.style.display = "none";
      loginPage.style.display = "flex";
      createBankAccountPage.style.display = "none";
      userDashboard.style.display = "none";
    });
    //if signupNav is clicked
    signupNav?.addEventListener("click", (e)=>{
        e.preventDefault();
        loginPage.style.display = "none";
        signupPage.style.display = "flex";
        createBankAccountPage.style.display = "none";
        userDashboard.style.display = "none";
    });
    //if loginNav is clicked
    loginNav?.addEventListener("click", (e)=>{
        e.preventDefault();
        signupPage.style.display = "none";
        loginPage.style.display = "flex";
        createBankAccountPage.style.display = "none";
        userDashboard.style.display = "none";

    })
    //if createAccountButton is clicked
    createAccountButton?.addEventListener('click',(e)=>{
           e.preventDefault();
           signupPage.style.display = "none";
           loginPage.style.display = "none";
           createBankAccountPage.style.display = "flex";
           userDashboard.style.display = "none";

    })
    userDashboardButton?.addEventListener('click', (e)=>{
           e.preventDefault();
           signupPage.style.display = "none";
           loginPage.style.display = "none";
           createBankAccountPage.style.display = "none";
           userDashboard.style.display = "flex";

    })
    //create a sign up handler
    const { signup } = signupHandler({
      onLoadingChange: (isLoading) => {
        // Optional: you can add a spinner here
          spinnerOverlay.style.display = isLoading ? 'flex' : 'none';
      },
      onErrorChange: (err) => {
        signupMsg.style.display = "block";
        signupMsg.style.color = "red";
        signupMsg.style.borderTop = "4px solid red";
        signupMsg.textContent = err || '';
      },
      onSuccess: (user) => {
        signupMsg.style.display = "block";
        signupMsg.style.color = "green";
        signupMsg.style.borderTop = "4px solid green";
        signupMsg.textContent = `We have sent a link to, ${user.username || user.email || 'user'}!`;
        setTimeout(() => {
          signupMsg.style.display = 'none';  // Hide the error message
        }, 5000);
      }
    });
    //Sign up button clicked
    signupForm?.addEventListener('submit', (e)=>{
      e.preventDefault();
      // get and check to see if all fields are fields
      var firstName = signupForm.querySelector('input[name="firstname"]').value.trim();
      var lastName = signupForm.querySelector('input[name="lastname"]').value.trim();
      var email = signupForm.querySelector('input[name="email"]').value.trim();
      var password = signupForm.querySelector('input[name="password"]').value.trim();
      var role = signupForm.querySelector('select[name="role"]').value.trim();
      
      if(!firstName || !lastName || !email || !password)
      {
        signupMsg.style.color = "red";
        signupMsg.style.borderTop = "4px solid red";
        signupMsg.innerText = "Fill in all fields";
          signupMsg.style.display = "block";
          
      }
      else{
           var username = firstName +" "+ lastName;
           signup(username, email, password, role);
           //clear the input fields
             signupForm.querySelector('input[name="firstname"]').value = '';
             signupForm.querySelector('input[name="lastname"]').value = '';
             signupForm.querySelector('input[name="email"]').value = '';
             signupForm.querySelector('input[name="password"]').value = '';
          }

    })
    //create a login handler
     //create a sign up handler
     const { login} = loginHandler({
      onLoadingChange: (isLoading) => {
        // Optional: you can add a spinner here
          spinnerOverlay.style.display = isLoading ? 'flex' : 'none';
      },
      onErrorChange: (err) => {
        loginMsg.style.display = "block";
        loginMsg.style.color = "red";
        loginMsg.style.borderTop = "4px solid red";
        loginMsg.textContent = err || '';
      },
      onLock: (loginLockUntil)=>{
          


           const lockUntil = new Date(loginLockUntil).getTime();
            const now = new Date().getTime();
            console.log(lockUntil);
            console.log(now);
          
             if (lockUntil > now) {
              const overlay = document.getElementById("signup-lock-overlay");
              const countdownText = document.getElementById("signup-countdown-text");
                   overlay.style.display = "flex";

                loginForm.querySelector('button[type="submit"]').disabled = true;
          
              const countdownInterval = setInterval(() => {
                const timeLeft = lockUntil - new Date().getTime();
                
          
                 if (timeLeft <= 0) {
                  clearInterval(countdownInterval);
                  overlay.style.display = "none";
                  loginForm.querySelector('button[type="submit"]').disabled = false;
                } else {
                  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
                  const seconds = Math.floor((timeLeft / 1000) % 60);
                  countdownText.innerText = `Login locked. Please wait ${minutes}m ${seconds}s.`;
                } 
              }, 1000);
            }  
          
      },
      onSuccess: (user) => {
        loginMsg.style.display = "block";
        loginMsg.style.color = "green";
        loginMsg.style.borderTop = "4px solid green";
        loginMsg.textContent = `login is working now, ${user.username || user.email || 'user'}!`;
        console.log("User role is", user.role);
        //Handle fraud detection here
       
        if(user.role === "user")
         {
          //turn of all pages and leave the user dashboard
          loginPage.style.display = "none";
          signupPage.style.display = "none";
          userDashboard.style.display = "flex";
          signupNav.style.display = "none";
          loginNav.style.display = "none";

         } 
        setTimeout(() => {
          loginMsg.style.display = 'none';  // Hide the error message
        }, 5000);
      }
    });
    //if the login button is clicked
    loginForm?.addEventListener('submit', (e)=>{
      e.preventDefault();
      // get and check to see if all fields are fields
      var email = loginForm.querySelector('input[name="email"]').value.trim();
      var password = loginForm.querySelector('input[name="password"]').value.trim();
      
      if(!email || !password)
      {
        loginMsg.style.color = "red";
        loginMsg.style.borderTop = "4px solid red";
        loginMsg.innerText = "Enter email and password";
          loginMsg.style.display = "block";
          
      }
      else{
           
           login(email, password);
           //clear the input fields
            
          }

    })
    

  });
 