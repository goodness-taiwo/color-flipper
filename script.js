// Step 1: Create array of hex characters
let hexCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

console.log("Hex characters:", hexCharacters);
console.log("Total characters:", hexCharacters.length);

// Step 2: select elements
let button = document.getElementById("flipBtn");
let colorCodeDisplay = document.getElementById("colorCode");
let colorHistoryList = document.getElementById("colorHistory");

// Array to store the last 5 colors
let colorHistory = [];

console.log("Button:", button);
console.log("Color display:", colorCodeDisplay);

// Step 3: Function to generate random hex color
function generateRandomHex() {
    let hexColor = "#";

     // Loop 6 times to get 6 random characters
     for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexCharacters.length);
        hexColor = hexColor + hexCharacters[randomIndex];
    }
    
    return hexColor;
}

// Test the function
console.log("Random color:", generateRandomHex());
console.log("Another random color:", generateRandomHex());
console.log("One more:", generateRandomHex());

// Function to update color history display
function updateColorHistory() {
    let historyItems = colorHistoryList.querySelectorAll("li");
    
    // Clear all history items first
    historyItems.forEach(item => {
        item.textContent = "";
        item.style.backgroundColor = "transparent";
    });
    
    // Update with current history (most recent first)
    for (let i = 0; i < colorHistory.length && i < 5; i++) {
        historyItems[i].textContent = colorHistory[i];
        historyItems[i].style.backgroundColor = colorHistory[i];
    }
}

// Step 4: Add event listener to button
button.addEventListener("click", function() {
    console.log("Button clicked!");

    // Generate a random hex color
    let newColor = generateRandomHex();
    console.log("New color:", newColor);

    // Add to history (at the beginning)
    colorHistory.unshift(newColor);
    
    // Keep only the last 5 colors
    if (colorHistory.length > 5) {
        colorHistory = colorHistory.slice(0, 5);
    }

    //change the background color
    document.body.style.backgroundColor = newColor;


    // Update the color code display
    colorCodeDisplay.textContent = newColor;

    // make button same color as the new color
    button.style.backgroundColor = newColor;
    
    // Update color history display
    updateColorHistory();

})

// Step 5: Add event listener to copy button
let copyButton = document.getElementById("copyBtn");


// Bonus: Click hex code to copy it
copyButton.addEventListener("click", function() {
    let colorText = colorCodeDisplay.textContent;
    
    // Copy to clipboard
    navigator.clipboard.writeText(colorText);
    
    // Show feedback
    alert("Copied " + colorText + " to clipboard!");
});

// Step 6: Add event listener to reset button
let resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", function() {
    console.log("Reset button clicked!");

    // Reset the background color
    document.body.style.backgroundColor = "#0A0A0A";

    // Reset the color code display
    colorCodeDisplay.textContent = "#0A0A0A";

    // Reset the button color
    button.style.backgroundColor = "#FFFFFF";

    // Reset the copy button color
    copyButton.style.backgroundColor = "#FFFFFF";

    // Reset the reset button color
    resetButton.style.backgroundColor = "#FFFFFF";

    // Reset the button text
    button.textContent = "Flip Color";
    copyButton.textContent = "Copy Color";
    resetButton.textContent = "Reset";

    // Clear color history
    colorHistory = [];
    updateColorHistory();
})

// Step 7: Add event listener to color history
colorHistoryList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI" && event.target.textContent) {
        let selectedColor = event.target.textContent;
        console.log("Color history item clicked:", selectedColor);
        
        // Apply the selected color
        document.body.style.backgroundColor = selectedColor;
        colorCodeDisplay.textContent = selectedColor;
        button.style.backgroundColor = selectedColor;
    }
})