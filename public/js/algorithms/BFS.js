// import { Queue } from "Queue";
// import { Stack } from "Stack";

function BFS(startNode, endNode, size, wallNodes){
    let visitArray=[]; 
    let queue = new Queue();
    queue.enqueue(startNode);
    startNode.visit();
    while(true){
        let queueLen = queue.length();
        console.log("Queue Len: " + queueLen);
        while(queueLen != 0){
            let node = queue.dequeue();
            var neighborNodes = getNeighborNodes(node);
            console.log(neighborNodes);
            for(let n of neighborNodes){
                if(n.visited == false){
                    queue.enqueue(n);
                    n.visit();
                    n.prev = node;
                    visitArray.push(n);
                    if(n == endNode){
                        return visitArray;
                    }
                }
            }
            queueLen--;
        } 
    }
}

function shortestPath(startNode, endNode){
    var path = [];
    var node = endNode;
    path.push(node);
    while(node != startNode){
        node = node.prev;
        path.push(node);
    }
    return path;
}


function getNeighborNodes(node, wallNodes){
    let neighborsList=[];
    let MAX_HEIGHT = 20-1;
    let MAX_WIDTH = 40-1;
    // Turns Clockwise
    if(node.x != 0){
        // if(node.y != MAX_HEIGHT){
        //     if(nodeBox.get(node.x-1, node.y+1).visited == false){
        //         neighborsList.push(nodeBox.get(node.x-1, node.y+1));
        //     }
        // }
        if(nodeBox.get(node.x-1, node.y).visited == false){
            neighborsList.push(nodeBox.get(node.x-1, node.y));
        }
        // if(node.y != 0){
        //     if(nodeBox.get(node.x-1, node.y-1).visited == false){
        //         neighborsList.push(nodeBox.get(node.x-1, node.y-1));
        //     }
        // }
        
    }
    if(node.y != 0){
        if(nodeBox.get(node.x, node.y-1).visited == false){
            neighborsList.push(nodeBox.get(node.x, node.y-1));
        }
    }
    if(node.x != MAX_WIDTH){
        // if(node.y != 0){
        //     if(nodeBox.get(node.x+1, node.y-1).visited == false){
        //         neighborsList.push(nodeBox.get(node.x+1, node.y-1));
        //     }
        // }
        if(nodeBox.get(node.x+1, node.y).visited == false){
            neighborsList.push(nodeBox.get(node.x+1, node.y));
        }
        // if(node.y != MAX_HEIGHT){
        //     if(nodeBox.get(node.x+1, node.y+1).visited == false){
        //         neighborsList.push(nodeBox.get(node.x+1, node.y+1));
        //     }
        // }
    }
    if(node.y != MAX_HEIGHT){
        if(nodeBox.get(node.x, node.y+1).visited == false){
            neighborsList.push(nodeBox.get(node.x, node.y+1));
        }
    }
    return neighborsList;
}

