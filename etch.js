let container = document.querySelector(".container");
let gridBtn = document.querySelector("#gridbtn");

let gridDimensions = 360;
let gridSize;
let borderSize;
let squareSize;
let rowSize;

gridBtn.addEventListener("click" , () => {
    let desiredSize = prompt("Enter desired grid squares per side");
    gridSize = +desiredSize;
    calculateGridDimensions();
    createGrid();
    console.log(gridSize);
});


function calculateGridDimensions(){

    borderSize = (1 * gridSize) ;
    squareSize = (gridDimensions- borderSize) /gridSize;
    rowSize = gridDimensions/gridSize
    console.log(squareSize);

}


function createGrid(){

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
}

