const grid = document.querySelector("#grid");

function createGrid(size) {
    grid.replaceChildren();

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.classList.add("square");

        square.style.flex = `0 0 ${100 / size}%`;

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "#1f2937";
        });

        grid.appendChild(square);
    }
}

createGrid(16);
const sizeButton = document.querySelector("#size-button");

sizeButton.addEventListener("click", () => {
    const input = prompt("Enter a grid size between 1 and 100:");

    if (input === null) {
        return;
    }

    const newSize = Number(input);

    if (
        !Number.isInteger(newSize) ||
        newSize < 1 ||
        newSize > 100
    ) {
        alert("Please enter a whole number between 1 and 100.");
        return;
    }

    createGrid(newSize);
});