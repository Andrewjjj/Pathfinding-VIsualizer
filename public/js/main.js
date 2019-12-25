// import { resolve } from "path";

// import { BFS } from "BFS.js";
// import {Queue} from "/algorithms/Queue.js";

var START_NODE = [12,7];
var END_NODE = [18,7];
var startNode;
var endNode;

const nodeBox = new NodeBox();
console.log("Start")
init();

function init(){
    initializeGrid();
    setupStartEndNode();
}

function initializeGrid(){
    const gridContainer = document.getElementById('grid-container');
    var nodeContainer=[];
    for(let row=0; row<14; row++){
        let rowContainer = createGridRow();
        let nodeRow=[];
        for(let col=0; col<30; col++){
            let node = new Node(col, row);
            let div = createGridPiece();
            rowContainer.appendChild(div);
            node.setDiv(div);
            nodeRow.push(node);
        }
        nodeContainer.push(nodeRow);
        gridContainer.appendChild(rowContainer);
    }
    nodeBox.set(nodeContainer);
}

function setupStartEndNode(){
    // console.log(START_NODE);
    startNode = nodeBox.get(START_NODE[0], START_NODE[1]);
    endNode = nodeBox.get(END_NODE[0],END_NODE[1]);
    // const startNodeDiv = getDivAtIndex(startNode.x, startNode.y);
    // const endNodeDiv = getDivAtIndex(endNode.x, endNode.y);
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

var qq;
function startBFS(){
    // let startIdx = [startNode.x, startNode.y];
    // let endIdx = [endNode.x, endNode.y];
    let visitArray = BFS(startNode, endNode, null, null);
    let pathArray = shortestPath(startNode, endNode);
    // for(let e of visitArray){
    //     await sleep(20);
    //     e.animateVisit();
    // }
    // for(let e of pathArray){
    //     await sleep(20);
    //     e.animatePath();
    // }
    
    animate(visitArray, pathArray)
    console.log("BROKEN")
}

function startDFS(){
    let visitArray = DFS(startNode, endNode, null, null);
    qq=visitArray;
    let pathArray = shortestPath(startNode, endNode);
    animate(visitArray, pathArray);
}

async function animate(visitArray, pathArray){
    for(let e of visitArray){
        await sleep(20);
        e.animateVisit();
    }
    for(let e of pathArray){
        await sleep(20);
        e.animatePath();
    }
}



function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
// async function animateVisitNode(visitArray){

// }

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