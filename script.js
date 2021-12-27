// Declaring variables and constants
const grid = document.querySelector(".gridContainer");
const inputNumber = document.getElementById("quantity");
const resetButton = document.querySelector("button");
const body = document.querySelector("body");

// Creating divisions and appending it to the div container
createGrid = () => {
    for(let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        grid.appendChild(div);
    };
};

// Changes size of grid 
updateGrid = () => {
    grid.innerHTML = ""
    grid.style.setProperty (
        "grid-template-columns", `repeat(${inputNumber.value}, 2fr)`
    );
    grid.style.setProperty (
        "grid-template-rows", `repeat(${inputNumber.value}, 2fr)`
    );
    for (let i = 0; i < inputNumber.value * inputNumber.value; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        grid.appendChild(div);
    };
};

// Return a random color
randomColor = () => {
    let code = "0123456789ABCDEF";
    let color = "#"; 
    for(let i = 0; i < 6; i++) {
        color += code[Math.floor(Math.random() * code.length)]
    }
    return color;
}

// When value is inputted, change the grid size
inputNumber.addEventListener("change", updateGrid);

// Change pixel to random color when cursor hovers over it
const pixel = document.querySelector("div");
pixel.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = randomColor();
});

resetButton.addEventListener("click", () => {
    grid.innerHTML = "";
    grid.style.setProperty (
        "grid-template-columns", `repeat(16, 2fr)`
    );
    grid.style.setProperty (
        "grid-template-rows", `repeat(16, 2fr)`
    );
    createGrid();
});

// Stores each grid pixel within a nodelist 
let square = document.getElementsByClassName("pixel");

light = () => {
    // Converts nodelist into array
    square = Array.from(square);
    for (let i = 0; i < square.length; i++) {
        square[i].classList.replace("pixel", "light");
    }

    grid.style.setProperty (
        "border", "2px solid black"
    )

    body.style.setProperty (
        "background-color", "white"
    )

    body.style.setProperty (
        "color", "black"
    )
}

dark = () => {
    square = Array.from(square);
    for (let i = 0; i < square.length; i++) {
        square[i].classList.replace("light", "pixel");
    }

    grid.style.setProperty (
        "border", "2px solid white"
    )

    body.style.setProperty (
        "background-color", "black"
    )

    body.style.setProperty (
        "color", "white"
    )
}

const darkMode = document.querySelector(".dark-mode");
darkMode.addEventListener("click", () => {
    dark();
})

const lightMode = document.querySelector(".light-mode");
lightMode.addEventListener("click", () => {
    light();
})

createGrid();