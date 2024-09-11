function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;   

    var password = document.getElementById("password").value;   

    var confirmPassword = document.getElementById("confirmPassword").value;
    var dateOfBirth = document.getElementById("dateOfBirth").value;   


    // Check for required fields
    if (name === "" || email === "" || password === "" || confirmPassword === "" || dateOfBirth === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    // Validate email address
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address.");
        return false;
    }

    // Validate password strength (basic example)
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Validate date of birth format (basic example)
    var dateOfBirthRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateOfBirthRegex.test(dateOfBirth)) {
        alert("Invalid date of birth format (YYYY-MM-DD).");
        return false;
    }

    // If all validations pass, submit the form
    return true;
}