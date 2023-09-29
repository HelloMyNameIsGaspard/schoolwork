let isEditing = false;

function editBiography() {
    isEditing = !isEditing;
    const editForm = document.getElementById("editForm");

    if (isEditing) {
        editForm.style.display = "block";
    } else {
        editForm.style.display = "none";
    }
}

function saveBiography() {
    const newName = document.getElementById("newName").value;
    const newAge = document.getElementById("newAge").value;
    const newNationality = document.getElementById("newNationality").value;

    // Update the displayed information
    document.getElementById("name").textContent = newName;
    document.getElementById("age").textContent = newAge;
    document.getElementById("nationality").textContent = newNationality;

    // Hide the edit form
    document.getElementById("editForm").style.display = "none";

    // You can add code here to save the modified data to a database or local storage
}