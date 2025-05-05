
//import needed files
 import {signupHandler} from "./api/userEntry.js";
 import { loginHandler } from "./api/login.js";
 import {sendRecoveryEmailHandler} from './api/sendRecoveryEmail.js';
 import { resetPasswordHandler } from './api/resetPassword.js';
 import { createAccountHandler } from './api/createAccount.js';
import { searchAccountHandler } from "./api/searchAccount.js";
import { depositHandler } from "./api/deposit.js";
import { transactionsHandler } from "./api/transactions.js";
import { withdrawHandler } from "./api/withdraw.js";
function showCustomAlert(title = "Alert", message = "") {
  document.getElementById('alertTitle').textContent = title;
  document.getElementById('alertMessage').textContent = message;

  const alertBox = document.getElementById('customAlert');
  alertBox.classList.remove('hidden');
  setTimeout(() => alertBox.classList.add('show'), 10); // trigger animation
}

function closeCustomAlert() {
  const alertBox = document.getElementById('customAlert');
  alertBox.classList.remove('show');
  setTimeout(() => alertBox.classList.add('hidden'), 400);
}
//Initial toggling between pages
 document.addEventListener("DOMContentLoaded", () => {
      
    //Get all the pages selectors and buttons for the toggling
 /*    getAccounts().then(accounts => {
      console.log("Fetched accounts:", accounts);
    }); */
    //get the logo container
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
    //get the okay to close button
    const okayToClose = document.getElementById('okay-close');
    //ifokayToclose is clicked, call the funtion
    okayToClose?.addEventListener('click',()=>{
          closeCustomAlert();
    })

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
    //get forgotPin link
    const forgotPinLink = document.getElementById('forgot-pin-link');
    //get forgot pin page
    const  forgotPinPage = document.getElementById('forgot-pin-page-id');
    //get pin recovery page
    const pinRecoveryPage = document.getElementById('pin-recovery-page-id');
    //get password recovery page
    const passwordRecoveryPage = document.querySelector('.password-recovery-page');
    //get staffdashboard
    const staffDashboard = document.querySelector('.staff-dashboard');
    //get base button so you turn it off
    const transaction = document.getElementById('transactions');
    //get withdrawal page id
    const withdrawalPage = document.getElementById('withdrawal-page-id');
    //get open account button
  
    const openAccountButton = document.querySelector('.open-account-btn');
    //get forgotPin form
    const forgotPinForm = document.getElementById('forgot-pin-form-id');
    //get pin recovery form
    const pinRecoveryForm = document.getElementById('pin-recovery-form');

    //get create-account-form
    const createAccountForm = document.getElementById('create-account-form');
    //get withdrawal form
    const withdrawalForm = document.getElementById('withdrawal-form');
    //get the back arrow
    const createBankAccountPageBackArrow = document.getElementById('create-bank-account-back-arrow');
    //get search account button
    const searchAccountForm=document.querySelector('.search-users');
    //get search results
    const searchResults=document.getElementById('searchResults');
    //get deposit results
    const depositResults=document.getElementById('depositResults');
    //get transaction page
    const transactionsPage = document.getElementById('transactions-page-id');
    //get transactions backarrow
     const transactionsBackArrow = document.getElementById('transactions-back-arrow');
     //get with drawal
     const withdraw = document.getElementById('withdrawal-id');
     //get view transaction
     const viewTransaction = document.getElementById('view-transaction-id');
     //get the details button
     const viewDetails = document.getElementById('details-id');
     //get transactions page container id
     const tpcId = document.getElementById('tpc-id');
     


  
    //get all the message bars
    const messageBar = document.querySelector('.message-bar');
    const signupMsg = document.getElementById('signup-msg');
    const loginMsg = document.getElementById('login-msg');
    const forgotPasswordMsg = document.getElementById('forgot-password-msg');
    const passwordRecoveryMessage = document.getElementById('password-recovery-message');
    const createAccountMessage = document.getElementById('create-account-message');
    const staffDashboardMessage = document.getElementById('staff-dashboard-message');
    const withdrawalMessage = document.getElementById('withdrawal-message-id');
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
     else if(user.role === "moderator"){
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
   //toggle create bank account page.
   createBankAccountPageBackArrow?.addEventListener('click',()=>{
     userDashboard.style.display = "flex",
     createBankAccountPage.style.display = "none"; 
    
  })
  //toggle transactions with the userdashboard page
  transactionsBackArrow?.addEventListener('click', ()=>{
    userDashboard.style.display = "flex";
    transactionsPage.style.display="none";
    
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
    createAccountMessage.style.display = "none";
    staffDashboardMessage.style.display = "none";
    transactionsPage.style.display="none";
    forgotPinPage.style.display="none";
    pinRecoveryPage.style.display="none";
    withdrawalPage.style.display = "none";
    withdrawalMessage.style.display="none";
    

    

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
      withdrawalPage.style.display = "none";
      transactionsPage.style.display = "none";

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
      withdrawalPage.style.display = "none";
      transactionsPage.style.display = "none";


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
        withdrawalPage.style.display = "none";
        transactionsPage.style.display="none";


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
        withdrawalPage.style.display = "none";
        transactionsPage,style.display = "none";




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
      transactionsPage.style.display = "none";
      withdrawalPage.style.display = "none";

      window.location.reload();
 

    })
    //if createAccountButton is clickeds
    createAccountButton?.addEventListener('click',(e)=>{
           e.preventDefault();
           signupPage.style.display = "none";
           loginPage.style.display = "none";
           createBankAccountPage.style.display = "flex";
           userDashboard.style.display = "none";
           forgotPasswordPage.style.display = "none";
           passwordRecoveryPage.style.display = "none";
           staffDashboard.style.display = "none";
           withdrawalPage.style.display = "none";




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
           withdrawalPage.style.display = "none";




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
        transactionsPage.style.display="none";
        forgotPinForm.style.display="none";
        pinRecoveryForm.style.display="none";
        withdrawalPage.style.display = "none";

      })
      forgotPinLink?.addEventListener('click', (e)=>{
        e.preventDefault();
        forgotPasswordPage.style.display = "none";
        signupPage.style.display = "none";
        createBankAccountPage.style.display = "none";
        loginPage.style.display = "none";
        userDashboard.style.display = "none";
        passwordRecoveryPage.style.display="none";
        staffDashboard.style.display = "none";
        transactionsPage.style.display="none";
        forgotPinPage.style.display = "flex";
        pinRecoveryPage.style.display = "none";
        withdrawalPage.style.display = "none";
      })
      //if withdraw is clicked on
      withdraw?.addEventListener('click', ()=>{
        forgotPasswordPage.style.display = "none";
        signupPage.style.display = "none";
        createBankAccountPage.style.display = "none";
        loginPage.style.display = "none";
        userDashboard.style.display = "none";
        passwordRecoveryPage.style.display="none";
        staffDashboard.style.display = "none";
        transactionsPage.style.display="none";
        forgotPinPage.style.display = "none";
        pinRecoveryPage.style.display = "none";
        withdrawalPage.style.display ="flex";
      })

    //create a  sign up handler
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
      //check to see if all fields are fields
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
        
        //Handle fraud detection here
       
        if(user.role === "user")
         {
          //turn of all pages and leave the user dashboard
          loginPage.style.display = "none";
/*           signupPage.style.display = "none";
 */          userDashboard.style.display = "flex";
           signupNav.style.display = "none";
          loginNav.style.display = "none";
          /*forgotPasswordPage.style.display = "none";
          passwordRecoveryPage.style.display = "none";
          staffDashboard.style.display = "none";
          signupNav.style.display = "none";
          loginNav.style.display = "none"; */
          logout.style.display = "block";


         } 
         else if(user.role === "moderator")
         {
          loginPage.style.display = "none";
          /*           signupPage.style.display = "none";
           */          
/*           userDashboard.style.display = "";
 */                     signupNav.style.display = "none";
                    loginNav.style.display = "none";
                    /*forgotPasswordPage.style.display = "none";
                    passwordRecoveryPage.style.display = "none";
                    staffDashboard.style.display = "none";
                    signupNav.style.display = "none";
                    loginNav.style.display = "none"; */
                    logout.style.display = "block";
                    staffDashboard.style.display = "flex";
          
          
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
      //check to see if the user has an account
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
        showCustomAlert(`You have successfully created an account. Check ${user.email}`);
        createAccountMessage.style.display="none";

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
    //search account handler
    const { searchAccount } = searchAccountHandler({
      onLoadingChange: (isLoading)=>{
        spinnerOverlay.style.display = isLoading ? 'flex' : 'none';

      },
      onErrorChange: (err)=>{
        staffDashboardMessage.style.display = "none";
        searchResults.innerHTML = `
        <p class="green center">No accounts matching the account number provided</p>
        `

      },
      onSuccess: (account)=>{
        //show the account details we found
        searchResults.innerHTML = `
        
            <div class="left-abstract">
              <img src="../assets/left-abstract.png" alt="left abstract"/>
            </div>
            <div class="account-info">
            <h3>Account Information</h3> 
            </div>
            <div class="name">
              <h4>Account Name:</h4>
              <p>${account.accountName}</p>
            </div>
            <div class="name">
              <h4>Account Number:</h4>
              <p>${account.accountNumber}</p>
            </div>
            <div class="view-details-link">
      <button class="view-link">
        Deposit
      </button>
    </div>
          
        `
        //Show search results and hide deposit
         // Show search results, hide deposit results
  searchResults.style.display = 'flex';
  depositResults.style.display = 'none';

       //if deposit is clicked
       document.querySelector('.view-link')?.addEventListener('click',()=>{
        depositResults.innerHTML = `
    
        <div id="deposit-page-account-back-arrow" class="back-arrow">
          
        </div>
         <div class="left-abstract">
              <img src="../assets/left-abstract.png" alt="left abstract"/>
            </div>
        <div class="deposit-form-container">
           <form id="deposit-form">
           <input type = "number" name="amount" placeholder="Enter deposit amount" required/>
           <div class="deposit-button-container">
           <button class="deposit-button">Deposit</button>
           </div>
           </form>
           </div>
          
        `
          // Toggle view
    searchResults.style.display = 'none';
    depositResults.style.display = 'flex';
    //if deposit button is clicked or enter is hit on the form
    

       const depositForm = document.getElementById('deposit-form');
       const depositAmountInput = depositForm.querySelector('input[name="amount"]');

       depositForm?.addEventListener('submit', (e)=>{
        e.preventDefault();
        //do deposit handler in here
        const { deposit } = depositHandler({
            onLoadingChange: (isLoading)=>{
              spinnerOverlay.style.display = isLoading ? 'flex' : 'none';

            },
            onErrorChange: (err)=>{
              staffDashboardMessage.style.color = "red";
              staffDashboardMessage.style.borderTop = "4px solid red";
              staffDashboardMessage.innerText = err || '';
              staffDashboardMessage.style.display = "block";
            },
            onSuccess: (account)=>{
              
              //Might replace with a more beautiful= message dialog if there is more time
             /*  staffDashboardMessage.style.color = "green";
              staffDashboardMessage.style.borderTop = "4px solid green";
              staffDashboardMessage.innerText = 'Transaction was successful';*/
              staffDashboardMessage.style.display = "none"  
              showCustomAlert("Transaction was successful.");
              depositAmountInput.value = "";

            }
        })
        //let us get the form information
        const depositAmount = depositAmountInput.value.trim();
          deposit(account.accountName,account.accountNumber, depositAmount);
          
       })
               //if depositPageBack arrow is clicked

        document.getElementById('deposit-page-account-back-arrow')?.addEventListener('click',()=>{
          depositResults.style.display = "none";
          searchResults.style.display = "flex";
          
         })
        
       })
       
        staffDashboardMessage.style.display = "none";
      }
      
      

    })
       //handle the search form event
     searchAccountForm?.addEventListener('submit',(e)=>{
      e.preventDefault();
      const accountNumber = searchAccountForm.querySelector('input[name="search"]').value.trim();
      if(!accountNumber)
      {
        staffDashboardMessage.style.color = "red";
        staffDashboardMessage.style.borderTop = "4px solid red";
        staffDashboardMessage.innerText = "Enter the account number";
        staffDashboardMessage.style.display = "block";
      }
      else{
        searchAccount(accountNumber);
      }

     }) 
     //handle the transaction handler 
     const { transactions } = transactionsHandler({
               onLoadingChange: (isLoading)=>{
                spinnerOverlay.style.display = isLoading ? 'flex' : 'none';

               },
               onErrorChange: (err)=>{
                if(err)
                {
                showCustomAlert(err || 'No transactions yet');
                }

               },
               onSuccess: (userTransactions)=>{
              
                // I will display the transactions dynamically
                

                 if(userTransactions.length !== 0)
                 {
                const tpcHTML = userTransactions.map(({accountName, transactionDate,  amount: { $numberDecimal }, type})=>{
                  const sign = type === 'deposit'? '+' : '-';
                  const pounds = parseFloat($numberDecimal)
                  .toLocaleString('en-GB', {
                    style:    'currency',
                    currency: 'GBP'
                  });
                  // Convert ISO date into a human‐friendly format
    const niceDate = new Date(transactionDate)
      .toLocaleDateString('en-GB', {
        day:   'numeric',
        month: 'short',
        year:  'numeric'
      }); // e.g. "28 Apr 2025"
                return `<div class= "transactions-bar white">
              <div class="left-side">
                <div class="left-logo-container">
                    <img src="../assets/subContainer.png" alt="transaction logo"/>
                </div>
                <div class="beside-left-logo">
                  <p>Transaction<br/>${accountName}</p>
                </div>

              </div>
              <div class="date">
                   <p>${niceDate}</p>
              </div>
              <div class="amount">
                     <p>${sign}${pounds}</p>
              </div>
            </div>`;
              

               }).join('');
               //inject this into your container
               tpcId.innerHTML = tpcHTML;
              }
              else{
                tpcId.innerHTML = `<p class="White">No Transactions made</p>`
              }
              }
               
              
     })
     //if view transaction is clicked
     viewTransaction?.addEventListener('click', ()=>{
          userDashboard.style.display = "none";
          transactionsPage.style.display = "flex";
          transactions();
     })

     //handle withdrawal
      const { withdrawFunction } = withdrawHandler({
             onLoadingChange: (isLoading)=>{
              spinnerOverlay.style.display = isLoading ? 'flex' : 'none';

             },
             onErrorChange: (error)=>{
               if(error)
               {
                withdrawalMessage.style.display = "block";
                withdrawalMessage.style.color = "red";
                withdrawalMessage.style.borderTop = "4px solid red";
                withdrawalMessage.textContent = error || '';
                withdrawalMessage.style.display = "block";
               }
              
             },
             onLock: (withdrawalLockUntil)=>{
              const lockUntil = new Date(withdrawalLockUntil).getTime();
              const now = new Date().getTime();
              console.log(lockUntil);
              console.log(now);
            
               if (lockUntil > now) {
                const overlay = document.getElementById("signup-lock-overlay");
                const countdownText = document.getElementById("signup-countdown-text");
                     overlay.style.display = "flex";
  
                  withdrawalForm.querySelector('button[type="submit"]').disabled = true;
            
                const countdownInterval = setInterval(() => {
                  const timeLeft = lockUntil - new Date().getTime();
                  
            
                   if (timeLeft <= 0) {
                    clearInterval(countdownInterval);
                    overlay.style.display = "none";
                    withdrawalForm.querySelector('button[type="submit"]').disabled = false;
                  } else {
                    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
                    const seconds = Math.floor((timeLeft / 1000) % 60);
                    countdownText.innerText = `Login locked. Please wait ${minutes}m ${seconds}s.`;
                  } 
                }, 1000);
              }  
             },
             onSuccess: (json)=>{
              showCustomAlert("Transaction was successful.");

             }
      });
      withdrawalForm?.addEventListener('submit',(e)=>{
             e.preventDefault();
             const pinField = withdrawalForm.querySelector('input[name="pin"]');
             const withdrawalAmountField = withdrawalForm.querySelector('input[name="amount"]');
             const pin = pinField.value.trim();
             const withdrawalAmount = withdrawalAmountField.value.trim();
             withdrawFunction(withdrawalAmount,pin);

      })

  

  });
 