let container = document.querySelector(".container");
let gridBtn = document.querySelector("#gridbtn");

let gridDimensions = 360;
let gridSize;
let borderSize;
let squareSize;
let rowSize;

gridBtn.addEventListener("click" , () => {

    reset();
    let desiredSize = prompt("Enter desired grid squares per side");
    
    if(desiredSize > 100){
        desiredSize = 100;
    }
    else if (desiredSize < 0 || !Number(desiredSize)){
        desiredSize = 2;
    }

    gridSize = desiredSize;
    calculateGridDimensions();
    createGrid();
    console.log(gridSize);
    console.log('Button pressed');
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
        let square = e.target;
        let darkness = Number(square.getAttribute("data-darkness"));

        let r_value = Math.floor(Math.random() * 256);
        let g_value = Math.floor(Math.random() * 256);
        let b_value = Math.floor(Math.random() * 256);

        if(darkness < 10){
            darkness += 1;
            square.setAttribute("data-darkness", darkness);
            let opacity = darkness/10
            square.style.backgroundColor = `rgba(${r_value}, ${g_value}, ${b_value}, ${opacity})`;
        }
    }
}

function reset(){
    container.innerHTML = "";
}

gridSize = 16;
calculateGridDimensions();
createGrid();
