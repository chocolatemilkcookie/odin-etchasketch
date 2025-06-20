let container = document.querySelector(".container");

let gridSize = 16;
let squareSize = 360/gridSize;
console.log(squareSize);

for(let i = 0; i<= gridSize; i++){

    let square = document.createElement("div");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.border = "1px solid black";
    square.style.margin = "0px";

    container.appendChild(square);

}