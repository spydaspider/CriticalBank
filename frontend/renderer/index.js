document.addEventListener("DOMContentLoaded", () => {
    const loginPage = document.querySelector(".login-page");
    const signupPage = document.querySelector(".signup-page");
    const toSignupBtn = document.getElementById("toSignup-button");
    const toLoginBtn = document.getElementById("toLogin-button");
  
    toSignupBtn?.addEventListener("click", () => {
      loginPage.style.display = "none";
      signupPage.style.display = "block";
    });
  
    toLoginBtn?.addEventListener("click", () => {
      signupPage.style.display = "none";
      loginPage.style.display = "block";
    });
  });
