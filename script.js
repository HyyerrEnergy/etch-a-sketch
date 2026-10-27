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