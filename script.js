const grid = document.querySelector("#grid");
const rangeInput = document.querySelector("#sizeSlider");
let gridSize = 16;
let squareSize = 500 / gridSize;
window.mouseDown = false;

createGrid(gridSize);
addInk();

rangeInput.addEventListener(
  "change",
  function () {
    while (grid.firstChild) {
      grid.removeChild(grid.lastChild);
    }
    gridSize = rangeInput.value;
    createGrid(gridSize);
    addInk();
  },
  false
);

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    let div = document.createElement("div");
    grid.appendChild(div);
    div.classList.add("row");
    for (let i = 0; i < gridSize; i++) {
      let square = document.createElement("div");
      div.appendChild(square);
      square.classList.add("square");
    }
  }
}

function addInk() {
  const squares = document.querySelectorAll("div.square");
  squares.forEach((square) => {
    // and for each one we add a 'click' listener
    square.addEventListener("mouseover", () => {
      if (window.mouseDown) {
        square.style.backgroundColor = "black";
      }
    });
  });
}

document.onmousedown = function () {
  window.mouseDown = true;
};
document.onmouseup = function () {
  window.mouseDown = false;
};
