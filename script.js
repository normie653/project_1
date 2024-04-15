document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for form submission
    var loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            var password = document.getElementById("password").value;

            // Check if password is correct
            if (password === "elladeverma") {
                // Redirect to the options page
                window.location.href = "options.html";
            } else {
                alert("Incorrect password. Please try again.");
            }
        });
    }
});
