const container = document.getElementById("container")

let gridSize = 16;

console.log(gridSize);

let cellSize = 500/gridSize;

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
