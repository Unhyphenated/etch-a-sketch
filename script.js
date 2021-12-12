// Declaring variables and constants
const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset")

// Function that creates a specific number of divisions
function makeGrid() {
    // Loop to create divisions within grid
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        grid.appendChild(div);
    }
};

// Function that changes number of pixels based on user input
function changeGrid() {
    grid.innerHTML = "";
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 2fr)`
        );

    grid.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput.value}, 2fr)`
    );

    for (let i = 0; i < userInput.value * userInput.value; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        grid.appendChild(div);
    }
    console.log(userInput.value);
};

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// Function that changes pixel color when mouse hovers over it
const pixel = document.querySelector("div");
pixel.addEventListener("mouseover", function(event) {
    
    event.target.style.backgroundColor = getRandomColor();
});

// Changes grid according to user input value
userInput.addEventListener("change", changeGrid);

// Resets page
resetButton.addEventListener("click", function() {
    grid.innerHTML = "";
    userInput.value = "";
    grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    makeGrid();
});

makeGrid();