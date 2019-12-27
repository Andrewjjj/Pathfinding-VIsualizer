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

    let visitArray = [];
    // let visitArray2 = [];
    startQueue.enqueue(startQueue);
    endQueue.enqueue(endQueue);
    while(true){
        let queue1len = startQueue.length();
        let queue2len = startQueue.length();

        if(queue1len == 0 && queue2len == 0){
            return [visitArray, false];
        }

        while(queue1len != 0 || queue2len != 0){
            if(queue1len != 0){
                let node = startQueue.dequeue();
                let neighborNodes = getAllNeighborNodes(node);
                for (let n of neighborNodes){
                    if(n.visited1 == false){
                        startQueue.enqueue(n);
                        n.prev = node;
                        n.visited1 = true;
                        visitArray.push(n);
                        if(n.visited2 == true){
                            return [visitArray, true];
                        }
                    }
                }
            }
            if(queue2len != 0){
                let node = endQueue.dequeue();
                let neighborNodes = getAllNeighborNodes(node);
                for(let n of neighborNodes){
                    if(n.visited2 == false){
                        endQueue.enqueue(n);
                        n.visited2 = true;
                        node.prev = n;
                        visitArray.push(n);
                        if(n.visited1 == true){
                            return [visitArray, true];
                        }
                    }
                }
            }
        }
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

