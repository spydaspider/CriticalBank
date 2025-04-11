
//Initial toggling between pages
 document.addEventListener("DOMContentLoaded", () => {
      console.log("where are my api calls");
    //Get all the pages selectors and buttons for the toggling
 /*    getAccounts().then(accounts => {
      console.log("Fetched accounts:", accounts);
    }); */
    const loginPage = document.querySelector(".login-page");
    const signupPage = document.querySelector(".signup-page");
    const toSignupBtn = document.getElementById("toSignup-button");
    const toLoginBtn = document.getElementById("toLogin-button");
    //get the link buttons as well
    const signupNav = document.querySelector(".signup-nav");
    const loginNav = document.querySelector(".login-nav");
    //get create account elements
    const createBankAccountPage = document.querySelector(".create-bank-account-page");
    const createAccountButton = document.getElementById("create-account");
    const userDashboardButton = document.getElementById('user-dashboard-link');
    const userDashboard = document.querySelector('.user-dashboard');
    const messageBar = document.querySelector('.message-bar');

    //Ensure that only the login page shows first until a user click on signup

  
    createBankAccountPage.style.display = "none";
    signupPage.style.display = "none";
    loginPage.style.display = "flex";
    userDashboardButton.style.display = "none";
    userDashboard.style.display = "none";
    messageBar.style.display = "none";
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
    

  });
 