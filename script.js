
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
    for (let r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Function to create columns
function createColumns(colNum) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < colNum; j++) {
            let col = document.createElement("div");
            rows[j].appendChild(col).className = "gridCol";
        };
    };
};