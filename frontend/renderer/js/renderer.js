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
    //Ensure that only the login page shows first until a user click on signup
    loginPage.style.display = "none";
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
    signupNav?.addEventListener("click", (e)=>{
        e.preventDefault();
        loginPage.style.display = "none";
        signupPage.style.display = "flex";
    });
    loginNav?.addEventListener("click", (e)=>{
        e.preventDefault();
        signupPage.style.display = "none";
        loginPage.style.display = "flex";
    })


  });
 