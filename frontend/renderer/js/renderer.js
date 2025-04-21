
//import needed files
 import {signupHandler} from "./api/userEntry.js";
 import { loginHandler } from "./api/login.js";
 import {sendRecoveryEmailHandler} from './api/sendRecoveryEmail.js';
 import { resetPasswordHandler } from './api/resetPassword.js';
 import { createAccountHandler } from './api/createAccount.js';
//Initial toggling between pages
 document.addEventListener("DOMContentLoaded", () => {
      
    //Get all the pages selectors and buttons for the toggling
 /*    getAccounts().then(accounts => {
      console.log("Fetched accounts:", accounts);
    }); */
    //get the logo container
    const loginContainer = document.querySelector(".logo-container");
    const loginPage = document.querySelector(".login-page");
    const signupPage = document.querySelector(".signup-page");
    const toSignupBtn = document.getElementById("toSignup-button");
    const toLoginBtn = document.getElementById("toLogin-button");
    //Get the signup form id
    const signupForm = document.getElementById('signup-form-id');
    //get the login form id
    const loginForm = document.getElementById('login-form-id');
    //Get the forgot ID form
    const forgotPasswordForm = document.getElementById('forgot-password-id');
    //get password recovery form 
    const passwordRecoveryForm = document.getElementById('password-recovery-form');
   

    //get the link buttons as well
    const logout = document.querySelector(".logout");
    const signupNav = document.querySelector(".signup-nav");
    const loginNav = document.querySelector(".login-nav");
    //get create account elements
    const createBankAccountPage = document.querySelector(".create-bank-account-page");
    const createAccountButton = document.getElementById("create-account");
    const userDashboardButton = document.getElementById('user-dashboard-link');
    const userDashboard = document.querySelector('.user-dashboard');
    //get the forgot password page
    const forgotPasswordPage = document.querySelector('.forgot-password-page');
    //get forgot password link from the login page
    const forgotPasswordLink = document.querySelector('.forgot-password');
    const passwordRecoveryPage = document.querySelector('.password-recovery-page');
    const staffDashboard = document.querySelector('.staff-dashboard');
    //get base button so you turn it off
    const viewTransaction = document.querySelector('.base-button');
    //get open account button
    const openAccountButton = document.querySelector('.open-account-btn');
    //get create-account-form
    const createAccountForm = document.getElementById('create-account-form');

  
    //get all the message bars
    const messageBar = document.querySelector('.message-bar');
    const signupMsg = document.getElementById('signup-msg');
    const loginMsg = document.getElementById('login-msg');
    const forgotPasswordMsg = document.getElementById('forgot-password-msg');
    const passwordRecoveryMessage = document.getElementById('password-recovery-message');
    const createAccountMessage = document.getElementById('create-account-message');
    //load the spinner
    const spinnerOverlay = document.getElementById('spinner-overlay');
    //get role
  

    //where we control the entry page

   //display login or appropriate role page
   let user = JSON.parse(localStorage.getItem('user'));
   if(user)
   {
    signupNav.style.display = "none";
    loginNav.style.display = "none";
    logout.style.display = "block";

     if(user.role === "user")
     {
      userDashboard.style.display = "flex";
      loginPage.style.display = "none";
      staffDashboard.style.display = "none";
      

     }
     else if(user.role === "staff"){
         staffDashboard.style.display = "flex";
         userDashboard.style.display = "none";
         loginPage.style.display = "none";
     }
    }
   else
   {
     loginPage.style.display="flex";
     staffDashboard.style.display = "none";
     userDashboard.style.display = "none";
     logout.style.display = "none";

     
   }

   loginContainer?.addEventListener('click', ()=>{
    /* if(user)
      {
       signupNav.style.display = "none";
       loginNav.style.display = "none";
       logout.style.display = "block";
   
        if(user.role === "user")
        {
         userDashboard.style.display = "flex";
         loginPage.style.display = "none";
         staffDashboard.style.display = "none";
         
   
        }
        else if(user.role === "staff"){
            staffDashboard.style.display = "flex";
            userDashboard.style.display = "none";
            loginPage.style.display = "none";
        }
       }
      else
      {
        loginPage.style.display="none";
        staffDashboard.style.display = "none";
        userDashboard.style.display = "none";
        logout.style.display = "none";
      
        
      }
     
        */
   })
  
     createBankAccountPage.style.display = "none";
     signupPage.style.display = "none";
    userDashboardButton.style.display = "block";
    messageBar.style.display = "none";
    signupMsg.style.display="none";
    forgotPasswordMsg.style.display="none";
    forgotPasswordPage.style.display = "none";
    passwordRecoveryMessage.style.display = "none";
    passwordRecoveryPage.style.display = "none";
    viewTransaction.style.display = "none";
    createAccountMessage.style.display = "none";

    

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
      forgotPasswordPage.style.display = "none";
      passwordRecoveryPage.style.display = "none";
      staffDashboard.style.display = "none";

    });
    //if login button is clicked from signup page, removes signup page and render login page
    toLoginBtn?.addEventListener("click", (e) => {
        e.preventDefault();
      signupPage.style.display = "none";
      loginPage.style.display = "flex";
      createBankAccountPage.style.display = "none";
      userDashboard.style.display = "none";
      forgotPasswordPage.style.display = "none";
      passwordRecoveryPage.style.display = "none";
      staffDashboard.style.display = "none";


    });
    //if signupNav is clicked
    signupNav?.addEventListener("click", (e)=>{
        e.preventDefault();
        loginPage.style.display = "none";
        signupPage.style.display = "flex";
        createBankAccountPage.style.display = "none";
        userDashboard.style.display = "none";
        forgotPasswordPage.style.display = "none";
        passwordRecoveryPage.style.display = "none";
        staffDashboard.style.display = "none";


    });
    //if loginNav is clicked
    loginNav?.addEventListener("click", (e)=>{
        e.preventDefault();
        signupPage.style.display = "none";
        loginPage.style.display = "flex";
        createBankAccountPage.style.display = "none";
        userDashboard.style.display = "none";
        forgotPasswordPage.style.display = "none";
        passwordRecoveryPage.style.display = "none";
        staffDashboard.style.display = "none";



    })
    //if logout is clicked
    logout?.addEventListener("click",(e)=>{
      e.preventDefault();
    
      localStorage.removeItem('user');
      signupPage.style.display = "none";
      loginPage.style.display = "flex";
      createBankAccountPage.style.display = "none";
      userDashboard.style.display = "none";
      forgotPasswordPage.style.display = "none";
      passwordRecoveryPage.style.display = "none";
      staffDashboard.style.display = "none"; 
      loginNav.style.display = "block";
      signupNav.style.display ="block";
      logout.style.display = "none";

    })
    //if createAccountButton is clicked
    createAccountButton?.addEventListener('click',(e)=>{
           e.preventDefault();
           signupPage.style.display = "none";
           loginPage.style.display = "none";
           createBankAccountPage.style.display = "flex";
           userDashboard.style.display = "none";
           forgotPasswordPage.style.display = "none";
           passwordRecoveryPage.style.display = "none";
           staffDashboard.style.display = "none";



    })
    //if user dashboard is clicked
    userDashboardButton?.addEventListener('click', (e)=>{
           e.preventDefault();
           signupPage.style.display = "none";
           loginPage.style.display = "none";
           createBankAccountPage.style.display = "none";
           userDashboard.style.display = "flex";
           forgotPasswordPage.style.display = "none";
           passwordRecoveryPage.style.display = "none";
           staffDashboard.style.display = "none";



    })
    //if forgotpassword link is clicked
      forgotPasswordLink?.addEventListener('click', (e)=>{
        e.preventDefault();
        forgotPasswordPage.style.display = "flex";
        signupPage.style.display = "none";
        createBankAccountPage.style.display = "none";
        loginPage.style.display = "none";
        userDashboard.style.display = "none";
        passwordRecoveryPage.style.display="none";
        staffDashboard.style.display = "none";

    
    

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
        
        //Handle fraud detection here
       
        if(user.role === "user")
         {
          //turn of all pages and leave the user dashboard
          loginPage.style.display = "none";
          signupPage.style.display = "none";
          userDashboard.style.display = "flex";
          signupNav.style.display = "none";
          loginNav.style.display = "none";
          forgotPasswordPage.style.display = "none";
          passwordRecoveryPage.style.display = "none";
          staffDashboard.style.display = "none";
          signupNav.style.display = "none";
          loginNav.style.display = "none";
          logout.style.display = "block";


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
    //Forgot password handler
    const { sendRecoveryEmail } = sendRecoveryEmailHandler({
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
        //go to the password recovery page
        
            document.getElementById('populate-email').value = user.email;
            signupPage.style.display = "none";
           loginPage.style.display = "none";
           createBankAccountPage.style.display = "none";
           userDashboard.style.display = "none";
           forgotPasswordPage.style.display = "none";
           passwordRecoveryPage.style.display = "flex";
           staffDashboard.style.display = "none";
 
        /* forgotPasswordMsg.style.display = "block";
        forgotPasswordMsg.style.color = "green";
        forgotPasswordMsg.style.borderTop = "4px solid green";
        forgotPasswordMsg.textContent = `We have sent a link to, ${user.username || user.email || 'user'}!`;
        setTimeout(() => {
          forgotPasswordMsg.style.display = 'none';  // Hide the error message
        }, 5000) */;
      }
    });

    //if send recovery email is clicked
    forgotPasswordForm?.addEventListener('submit',(e)=>{
      e.preventDefault();
      var email = forgotPasswordForm.querySelector('input[name="email"]').value.trim();
      if(!email)
      {
        forgotPasswordMsg.style.color = "red";
        forgotPasswordMsg.style.borderTop = "4px solid red";
        forgotPasswordMsg.innerText = "Enter your email";
          forgotPasswordMsg.style.display = "block";
      }
      else{
        sendRecoveryEmail(email);
      }
    })
    //reset password handler
    const { resetPassword } = resetPasswordHandler({
      onLoadingChange: (isLoading) => {
        // Optional: you can add a spinner here
          spinnerOverlay.style.display = isLoading ? 'flex' : 'none';
      },
      onErrorChange: (err) => {
        passwordRecoveryMessage.style.display = "block";
        passwordRecoveryMessage.style.color = "red";
        passwordRecoveryMessage.style.borderTop = "4px solid red";
        passwordRecoveryMessage.textContent = err || '';
      },
      onSuccess: (user) => {
        //go to the password recovery page
        
            
            signupPage.style.display = "none";
           loginPage.style.display = "flex";
           createBankAccountPage.style.display = "none";
           userDashboard.style.display = "none";
           forgotPasswordPage.style.display = "none";
           passwordRecoveryPage.style.display = "none"; 
           staffDashboard.style.display = "none";
        /* forgotPasswordMsg.style.display = "block";
        forgotPasswordMsg.style.color = "green";
        forgotPasswordMsg.style.borderTop = "4px solid green";
        forgotPasswordMsg.textContent = `We have sent a link to, ${user.username || user.email || 'user'}!`;
        setTimeout(() => {
          forgotPasswordMsg.style.display = 'none';  // Hide the error message
        }, 5000) */;
      }
    })
    passwordRecoveryForm?.addEventListener('submit',(e)=>{
      e.preventDefault();
      var email = passwordRecoveryForm.querySelector('input[name="email"]').value.trim();
      var otp = passwordRecoveryForm.querySelector('input[name="otp"]').value.trim();
      var newPassword = passwordRecoveryForm.querySelector('input[name="password"]').value.trim();
      if(!email || !otp || ! newPassword)
      {
        passwordRecoveryMessage.style.color = "red";
        passwordRecoveryMessage.style.borderTop = "4px solid red";
        passwordRecoveryMessage.innerText = "Fill in the form";
        passwordRecoveryMessage.style.display = "block";


      }
      else{
          resetPassword(email, otp, newPassword);
      }
    })
    //let's deal with components after the user has logged in successfully
    //If open account button is clicked
    openAccountButton?.addEventListener('click',()=>{
      //toggle pages
      signupPage.style.display = "none";
      loginPage.style.display = "none";
      createBankAccountPage.style.display = "flex";
      userDashboard.style.display = "none";
      forgotPasswordPage.style.display = "none";
      passwordRecoveryPage.style.display = "none"; 
      staffDashboard.style.display = "none";

    })
    //Create account handler
     const { createAccount } = createAccountHandler({
      onLoadingChange: (isLoading)=>{
        spinnerOverlay.style.display = isLoading ? 'flex' : 'none';


      },
      onErrorChange: (err)=>{
        createAccountMessage.style.display = "block";
        createAccountMessage.style.color = "red";
        createAccountMessage.style.borderTop = "4px solid red";
        createAccountMessage.textContent = err || '';

      },
      onSuccess: (user)=>{
        createAccountMessage.style.display = "block";
        createAccountMessage.style.color = "green";
        createAccountMessage.style.borderTop = "4px solid green";
        createAccountMessage.textContent = `You have successfully created an account, please check ${user.email || 'user'}!`;
        setTimeout(() => {
          signupMsg.style.display = 'none';  // Hide the error message
        }, 5000);
      }
      
        
     })
    //if create account is clicked
    createAccountForm?.addEventListener('submit', (e)=>{
      e.preventDefault();
      const accountName = createAccountForm.querySelector('input[name = "accountName"]').value.trim();
      const idNumber = createAccountForm.querySelector('input[name="idNumber"]').value.trim();
      const address = createAccountForm.querySelector('input[name = "address"]').value.trim();
      const pin = createAccountForm.querySelector('input[name="pin"]').value.trim();
      if(!accountName||!idNumber||!address||!pin)
      {
        createAccountMessage.style.color = "green";
        createAccountMessage.style.borderTop = "4px solid green";
        createAccountMessage.innerText = "Fill in all fields";
        createAccountMessage.style.display = "block";

      }
      else{
        
        createAccount(accountName, idNumber, address, pin);
      }

      
    })

  });
 