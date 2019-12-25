// import { resolve } from "path";

// import { BFS } from "BFS.js";
// import {Queue} from "/algorithms/Queue.js";

var START_NODE = [12,7];
var END_NODE = [18,7];
var startNode;
var endNode;

var startDragVar = false;
var startDragWall = false;

const nodeBox = new NodeBox();
console.log("Start")
init();

function init(){
    try{
        initializeGrid();
        setupStartEndNode();

    } catch(err){console.log(err)}
}

function initializeGrid(){
    const gridContainer = document.getElementById('grid-container');
    var nodeContainer=[];
    for(let row=0; row<14; row++){
        let rowContainer = createGridRow();
        let nodeRow=[];
        for(let col=0; col<30; col++){
            let node = new Node(col, row);
            let div = createGridPiece(row, col);
            div.addEventListener("mousedown", switchWall);
            div.addEventListener("dragenter", switchWallDrag);
            div.addEventListener("mouseup", switchWallExit);
            rowContainer.appendChild(div);
            node.setDiv(div);
            nodeRow.push(node);
        }
        nodeContainer.push(nodeRow);
        gridContainer.appendChild(rowContainer);
    }
    nodeBox.set(nodeContainer);
}
function switchWall(e){
    // e.preventDefault();
    let div = e.srcElement.parentElement;
    startDragVar = true;
    let y = div.getAttribute("rownum");
    let x = div.getAttribute("colnum");
    let node = nodeBox.get(x, y);
    node.switchWall();
    // if(node )
}
var qq;
function switchWallDrag(e){
    // e.preventDefault();
    console.log("DragEnter")
    let div = e.srcElement.parentElement;
    console.log(div.classList);
    if(div.classList.contains("grid-box")){
        console.log("YEs!")
        let y = div.getAttribute("rownum");
        let x = div.getAttribute("colnum");
        console.log(x, y);
        let node = nodeBox.get(x, y);
        node.switchWall();
    }
    else{
        console.log("NOPE!")
    }
}

function switchWallExit(e){
    startDragVar = false;
}

function setupStartEndNode(){
    // console.log(START_NODE);
    startNode = nodeBox.get(START_NODE[0], START_NODE[1]);
    endNode = nodeBox.get(END_NODE[0],END_NODE[1]);
    // const startNodeDiv = getDivAtIndex(startNode.x, startNode.y);
    // const endNodeDiv = getDivAtIndex(endNode.x, endNode.y);
    startNode.startNode = true;
    endNode.endNode = true;
    setNodeColor(startNode, '#7DCEA0');
    setNodeColor(endNode, "#BB8FCE");
}

function setNodeColor(node, color){
    node.div.setAttribute('style', 'background-color: ' + color);
}

function getDivAtIndex(x, y){
    const gridContainer = document.getElementById('grid-container');
    return gridContainer.children[y].children[x];
}

function reset(){
    for(let nodeRow of nodeBox.nodeBox){
        for(let node of nodeRow){
            console.log(node);
            node.reset();
        }
    }
}


async function startBFS(){
    // let startIdx = [startNode.x, startNode.y];
    // let endIdx = [endNode.x, endNode.y];
    let visitArray = BFS(startNode, endNode, null, null);
    let pathArray = shortestPath(startNode, endNode);
    for(let e of visitArray){
        await sleep(20);
        e.animateVisit();
    }
    for(let e of pathArray){
        await sleep(20);
        e.animatePath();
    }
    console.log("BROKEN")
}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
// async function animateVisitNode(visitArray){

// }

function createGridPiece(row, col){
    const div = document.createElement('div');
    div.setAttribute('class', 'grid-box');
    div.setAttribute('rowNum', row);
    div.setAttribute('colNum', col);
    return div;
}

function createGridRow(){
    const div = document.createElement('div');
    div.setAttribute('class', 'grid-row');
    return div;
}

class dragApp {
    static dragStart(e){

    }
}