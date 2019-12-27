function Dijkstra(startNode, endNode, size=null, wallNode=null) {
    let queue = new Queue();
    let visitArray=[];
    queue.enqueue(startNode);
    startNode.distance = 0;
    visitArray.push(startNode);
    while(true){
        let queueSize = queue.length();
        if(queueSize == 0) return [visitArray, false];
        let endNodeNeighbors = getAllNeighborNodes(endNode);
        while(queueSize--){
            let node = queue.dequeue();
            node.visit();

            // Goto the vertex with the shortest distance
            let neighborNodes = getAllNeighborNodes(node);
            //
            for(let n of neighborNodes){
                if(n.visited == false && n.isWall() == false){
                    if(node.distance + 1 < n.distance){
                        n.distance = node.distance + 1;
                        n.prev = node;
                    }
                    queue.enqueue(n);
                    n.visit();
                    visitArray.push(n);
                }
            }
        }
        // console.log(visitArray);
        if(neighborsAllVisited(endNode)){
            return [visitArray, true];
        }
    }
}

function neighborsAllVisited(node){
    let neighborNodes = getAllNeighborNodes(node);
    let count=0;
    for(let n of neighborNodes){
        if(n.visited == true) count++;
    }
    return count==4;
}

function getAllNeighborNodes(node, wallNodes){
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
        if(nodeBox.get(node.x-1, node.y)){
            neighborsList.push(nodeBox.get(node.x-1, node.y));
        }
        // if(node.y != 0){
        //     if(nodeBox.get(node.x-1, node.y-1).visited == false){
        //         neighborsList.push(nodeBox.get(node.x-1, node.y-1));
        //     }
        // }
        
    }
    if(node.y != 0){
        if(nodeBox.get(node.x, node.y-1)){
            neighborsList.push(nodeBox.get(node.x, node.y-1));
        }
    }
    if(node.x != MAX_WIDTH){
        // if(node.y != 0){
        //     if(nodeBox.get(node.x+1, node.y-1).visited == false){
        //         neighborsList.push(nodeBox.get(node.x+1, node.y-1));
        //     }
        // }
        if(nodeBox.get(node.x+1, node.y)){
            neighborsList.push(nodeBox.get(node.x+1, node.y));
        }
        // if(node.y != MAX_HEIGHT){
        //     if(nodeBox.get(node.x+1, node.y+1).visited == false){
        //         neighborsList.push(nodeBox.get(node.x+1, node.y+1));
        //     }
        // }
    }
    if(node.y != MAX_HEIGHT){
        if(nodeBox.get(node.x, node.y+1)){
            neighborsList.push(nodeBox.get(node.x, node.y+1));
        }
    }
    return neighborsList;
}
