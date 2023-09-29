function authenticate() {
    const usernameInput = document.getElementById("username").value.trim(); // Trim input
    const passwordInput = document.getElementById("password").value.trim();

    // Replace 'username' and 'password' with your desired values
    const validUsername = 'username';
    const validPassword = 'password';

    if (usernameInput === validUsername && passwordInput === validPassword) {
        // Authentication successful, show the converter section
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("converter").style.display = "block";
    } else {
        // Authentication failed, display an error message
        alert("Authentication failed. Please check your username and password.");
    }
}

function convertToDecimal() {
    const binaryInput = document.getElementById("binaryInput").value.trim(); // Trim input
    const decimalOutput = document.getElementById("decimalOutput");

    // Check if the input is a valid binary number
    if (/^[01]+$/.test(binaryInput)) {
        const decimalValue = parseInt(binaryInput, 2);
        decimalOutput.textContent = decimalValue;
    } else {
        decimalOutput.textContent = "Invalid binary input!";
    }
}

function convertToBinary() {
    const decimalInput = document.getElementById("decimalInput").value.trim(); // Trim input
    const binaryOutput = document.getElementById("binaryOutput");

    // Check if the input is a valid decimal number
    if (/^\d+$/.test(decimalInput)) {
        const binaryValue = (parseInt(decimalInput)).toString(2);
        binaryOutput.textContent = binaryValue;
    } else {
        binaryOutput.textContent = "Invalid decimal input!";
    }
}