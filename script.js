// Step 1: Create array of hex characters
let hexCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

console.log("Hex characters:", hexCharacters);
console.log("Total characters:", hexCharacters.length);

// Step 2: select elements
let button = document.getElementById("flipBtn");
let colorCodeDisplay = document.getElementById("colorCode");

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

// Step 4: Add event listener to button
button.addEventListener("click", function() {
    console.log("Button clicked!");

    // Generate a random hex color
    let newColor = generateRandomHex();
    console.log("New color:", newColor);

    //change the background color
    document.body.style.backgroundColor = newColor;

    // Update the color code display
    colorCodeDisplay.textContent = newColor;
    colorCodeDisplay.style.color = newColor;
})