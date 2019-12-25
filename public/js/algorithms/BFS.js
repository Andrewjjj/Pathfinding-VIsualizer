// import { Queue } from "Queue";
// import { Stack } from "Stack";

function BFS(startNode, endNode, size, wallNodes){
    let visitArray=[]; 
    let queue = new Queue();
    queue.enqueue(startNode);
    startNode.visit();
    // let safe=100;
    while(true){
        // console.log(queue.data);
        if(queue.length() == 0){
            console.log("No path Found")
            return [visitArray, false];
        }
        let queueLen = queue.length();
        // safe--;
        // if(safe < 0) return visitArray;
        // console.log("Queue Len: " + queueLen);
        while(queueLen != 0){
            let node = queue.dequeue();
            var neighborNodes = getNeighborNodes(node);
            // console.log(neighborNodes);
            for(let n of neighborNodes){
                console.log
                if(n.visited == false && n.isWall() == false){
                    queue.enqueue(n);
                    n.visit();
                    n.prev = node;
                    visitArray.push(n);
                    if(n == endNode){
                        return [visitArray, true];
                    }
                }
            }
            queueLen--;
        } 
        
    }
    // return visitArray;
}

function BidirectionalBFS(startNode, endNode, size, wallNodes){
    let startQueue = new Queue();
    let endQueue = new Queue();
    startQueue.enqueue(startQueue);
    endQueue.enqueue(endQueue);
    while(true){
        
        break;
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
    
    // TODO: Change this Later
    let MAX_HEIGHT = 14-1;
    let MAX_WIDTH = 30-1;
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

