document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Check if username and password are correct
        if (username === 'gaspard' && password === 'password') {
            // Redirect to the dashboard page
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid username or password');
        }
    });

    // Rest of the code for binary converter remains the same.
});