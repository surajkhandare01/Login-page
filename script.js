const avatar = document.getElementById("avatar");
const passwordField = document.getElementById("password");
const loginForm = document.getElementById("loginForm");
const errorText = document.getElementById("error");

passwordField.addEventListener("focus", () => {
  avatar.textContent = "🙈";
});

passwordField.addEventListener("blur", () => {
  avatar.textContent = "😐";
});


loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = passwordField.value.trim();

  const validUsername = "@surajkhandare";
  const validPassword = "#suraj01";

  if (username === validUsername && password === validPassword) {
    avatar.textContent = "😄";
    errorText.textContent = "";
    alert("Login successful!");
    
  } else {
    avatar.textContent = "😡";
    errorText.textContent = "Invalid username or password!";
  }
});
