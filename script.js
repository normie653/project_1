document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for form submission
    var loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            var password = document.getElementById("password").value;

            // Check if password is correct
            if (password === "talwar.in.salwar") {
                // Redirect to the options page
                window.location.href = "options.html";
            } else {
                alert("Incorrect password. Please try again.");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var showPasswordCheckbox = document.getElementById("show-password-checkbox");
    var passwordInput = document.getElementById("password");

    if (showPasswordCheckbox && passwordInput) {
        showPasswordCheckbox.addEventListener("change", function() {
            if (showPasswordCheckbox.checked) {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        });
    }
});
