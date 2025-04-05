 //Initial toggling between pages
 document.addEventListener("DOMContentLoaded", () => {
    //Get all the pages selectors and buttons for the toggling
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
    //Ensure that only the login page shows first until a user click on signup
    loginPage.style.display = "none";
    createBankAccountPage.style.display = "none";
     //if signup button is clicked from login, show signup page
    toSignupBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        //remove the login page and render the signup page
      loginPage.style.display = "none";
      signupPage.style.display = "flex";
    });
    //if login button is clicked from signup page, removes signup page and render login page
    toLoginBtn?.addEventListener("click", (e) => {
        e.preventDefault();
      signupPage.style.display = "none";
      loginPage.style.display = "flex";
    });
    //if signupNav is clicked
    signupNav?.addEventListener("click", (e)=>{
        e.preventDefault();
        loginPage.style.display = "none";
        signupPage.style.display = "flex";
        createBankAccountPage.style.display = "none";
    });
    //if loginNav is clicked
    loginNav?.addEventListener("click", (e)=>{
        e.preventDefault();
        signupPage.style.display = "none";
        loginPage.style.display = "flex";
        createBankAccountPage.style.display = "none";
    })
    //if createAccountButton is clicked
    createAccountButton?.addEventListener('click',(e)=>{
           e.preventDefault();
           signupPage.style.display = "none";
           loginPage.style.display = "none";
           createBankAccountPage.style.display = "flex";
    })


  });
 