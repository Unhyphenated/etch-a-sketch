// Declaring variables and constants
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cols = document.getElementsByClassName("gridCol")

// Default grid function
defaultGrid();
function defaultGrid() {
    createRows(16);
    createColumns(16);
}

// Function to create rows
function createRows(rowNum) {
    // Creates divisions with the class gridRow 
        // These divisions are empty and will later be filled by cols
    for (let r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Function to create columns
function createColumns(colNum) {
    // First loop iterates the total number of rows, it cycles through each division with gridRow as a class, within each cycle, each division is selected and made active
    for (let i = 0; i < rows.length; i++) {
        // Second loop creates a division that is styled within the division that is active 
        for (let j = 0; j < colNum; j++) {
            let col = document.createElement("div");
            rows[j].appendChild(col).className = "gridCol";
        };
    };
};