function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    // Fetch form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate name (should not be empty)
    if (name === '') {
        displayError('Name is required.');
        return;
    }

    // Validate email
    if (!isValidEmail(email)) {
        displayError('Invalid email address.');
        return;
    }

    // Validate password (min length 6)
    if (password.length < 6) {
        displayError('Password should be at least 6 characters long.');
        return;
    }

    // Validate password match
    if (password !== confirmPassword) {
        displayError('Passwords do not match.');
        return;
    }

    // If all validations pass, submit the form (in real scenario, you would send data to server here)
    alert('Registration successful!');
    document.getElementById('registrationForm').reset(); // Reset form fields
}

function displayError(message) {
    const errorMessages = document.getElementById('errorMessages');
    const p = document.createElement('p');
    p.textContent = message;
    errorMessages.appendChild(p);
}

function isValidEmail(email) {
    // Very basic email validation
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}
