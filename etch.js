let container = document.querySelector(".container");

let gridDimensions = 360;
let gridSize = 50;
let borderSize = (1 * gridSize) ;
let squareSize = (gridDimensions- borderSize) /gridSize;
rowSize = gridDimensions/gridSize
console.log(squareSize);


// Creating a row


for(let j = 0; j<gridSize; j++){

    let row = document.createElement("div");
    
    row.style.height = `${rowSize}px`//Will this be height or width depending on flex direction
    row.style.width = `${gridDimensions}px`;
    row.style.margin = "0px";
    row.style.padding = "0px";
    row.style.display = "flex";

    container.appendChild(row);

    //  Creating squares

    for(let i = 0; i< gridSize; i++){

        let square = document.createElement("div");
    
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.border = "1px solid lightgray";
        square.style.margin = "0px";
    
        row.appendChild(square);

        square.addEventListener("mouseenter", hover);
    
    }

}

function hover(e){
    e.target.style.backgroundColor = "pink";
}