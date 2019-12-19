
var START_NODE = [10,10];
var END_NODE = [30,10];


init();

function init(){
    initializeGrid();
    // console.log(START_NODE)
    setupStartEndNode();
}

function initializeGrid(){
    const gridContainer = document.getElementById('grid-container');

    for(let row=0; row<20; row++){
        let rowContainer = createGridRow();
        for(let col=0; col<40; col++){
            let node = createGridPiece();
            rowContainer.appendChild(node);
        }
        gridContainer.appendChild(rowContainer);
    }
}

function setupStartEndNode(){
    // console.log(START_NODE);
    const startNode = getDivAtIndex(START_NODE);
    const endNode = getDivAtIndex(END_NODE);
    setDivColor(startNode, '#7DCEA0');
    setDivColor(endNode, "#BB8FCE");
}

function setDivColor(div, color){
    div.setAttribute('style', 'background-color: ' + color);
}

function getDivAtIndex(pos){
    const gridContainer = document.getElementById('grid-container');
    const pos_x = pos[0];
    const pos_y = pos[1];
    return gridContainer.children[pos_y].children[pos_x];
}



function createGridPiece(){
    const div = document.createElement('div');
    div.setAttribute('class', 'grid-box');
    return div;
}

function createGridRow(){
    const div = document.createElement('div');
    div.setAttribute('class', 'grid-row');
    return div;
}