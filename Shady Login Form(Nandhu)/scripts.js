document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Simulate checking credentials
      if (email === "nandhuvenkat18@gmail.com" && password === "987654321") {
        errorMessage.textContent = "Login successful!";
        errorMessage.style.color = "green";
      } else {
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.color = "red";
      }
    });
  });
  