function convertToBinary() {
    const decimalInput = document.getElementById("decimalInput").value;
    const binaryOutput = document.getElementById("binaryOutput");

    if (!isNaN(decimalInput) && Number.isInteger(parseFloat(decimalInput))) {
        const binaryValue = (parseInt(decimalInput)).toString(2);
        binaryOutput.textContent = binaryValue;
    } else {
        binaryOutput.textContent = "Invalid decimal input!";
    }
}

function convertToDecimal() {
    const binaryInput = document.getElementById("binaryInput").value;
    const decimalOutput = document.getElementById("decimalOutput");

    if (/^[01]+$/.test(binaryInput)) {
        const decimalValue = parseInt(binaryInput, 2);
        decimalOutput.textContent = decimalValue;
    } else {
        decimalOutput.textContent = "Invalid binary input!";
    }
}