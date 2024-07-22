const container = document.getElementById("container")

let gridSize = 16;

let cellSize = 500/gridSize;

// Default Color

let color = "orange";


for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.backgroundColor = "White";
        grid.style.boxSizing = "border-box";
        grid.style.width = `${cellSize}px`;
        grid.style.height = `${cellSize}px`;
        grid.style.border = "1px solid gray"
        container.appendChild(grid);
    }
}

const hoveringEffect = document.querySelectorAll(".grid")

hoveringEffect.forEach((cellGrid) => {
    cellGrid.addEventListener("mouseenter", () => {
        cellGrid.style.backgroundColor = color ;
    })
})

const gridSizeBtn = document.getElementById("grid-size")
gridSizeBtn.addEventListener('click', () => {
    gridSize = prompt("You can select grid size from 1 to 100");

    while (gridSize < 1 || gridSize > 100) {
        gridSize = prompt("You can select grid size from 1 to 100");
    }

    const cells = document.querySelectorAll(".grid");
    for (let i = 0; i < cells.length; i++) {
        cells[i].remove("grid")
    }
    
    cellSize = 500/gridSize;
    
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.style.backgroundColor = "White";
            grid.style.boxSizing = "border-box";
            grid.style.width = `${cellSize}px`;
            grid.style.height = `${cellSize}px`;
            grid.style.border = "1px solid gray"
            container.appendChild(grid);
        }
    }

    const hoveringEffect = document.querySelectorAll(".grid")

    hoveringEffect.forEach((cellGrid) => {
        cellGrid.addEventListener("mouseenter", () => {
            cellGrid.style.backgroundColor = color ;
        })
    })
});


const randomColorBtn = document.getElementById("random-color")

randomColorBtn.addEventListener('click', () => {
    const hoveringEffect = document.querySelectorAll(".grid")
    hoveringEffect.forEach((cellGrid) => {
        cellGrid.addEventListener("mouseenter", () => {
        color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
        cellGrid.style.backgroundColor = color ;
        })
    })
})