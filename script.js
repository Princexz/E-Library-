let allowedRegNumbers = [];
// const fs = require('fs');


// fs.readFile('./reg_number.json', 'utf8', (err, data) => {
//     if (err) {
//         allowedRegNumbers = err;
//     } allowedRegNumbers = data.regnumber;
// });

//Function to fetch data from JSON file
async function loadRegNumbers() {
    try {
        
        const response = await fetch('./reg_number.json');
        
        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        //console.log("Registration numbers loaded:",  data);
        allowedRegNumbers = data.regnumber;
        // console.log("Allowed Registration Numbers:", allowedRegNumbers);//Debugging line
    } catch (error) {
        console.error("Error loading registration numbers:", error);
    }
}

// Call the function to load registration numbers on page load
window.onload = loadRegNumbers;

// Function to validate registration number on form submission
function myFunction(event) {
    event.preventDefault(); // Prevent default form submission
    //loadRegNumbers();
    let regNumber = document.getElementById("regnumberId").value;
    
    const errorMessage = document.getElementById("error-message"); // Define error message element
   // window.location.href = "home.html"; // Redirect to main content

    // console.log(regNumber)
     // Check if the entered registration number is in the allowed list
    if (allowedRegNumbers.includes(regNumber)) {
        errorMessage.textContent = ""; // Clear any previous error messages
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to main content
        return true;
    } else {
        errorMessage.textContent = "Invalid registration number."; // Display error message
        return false; // Prevent form submission if validation fails
    }
}