function authenticate() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // Replace with your desired username and password
    const validUsername = 'gaspard';
    const validPassword = 'password';

    if (usernameInput === validUsername && passwordInput === validPassword) {
        window.location.href = 'biography.html'; // Redirect to Biography page
    } else {
        alert("Authentication failed. Please check your username and password.");
    }
}