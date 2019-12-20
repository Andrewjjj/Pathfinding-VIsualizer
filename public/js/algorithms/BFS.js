// import { Queue } from "Queue";
// import { Stack } from "Stack";

function BFS(startNode, endNode, size, wallNodes){
    let visitArray=[]; 
    let queue = new Queue();
    queue.enqueue(startNode);
    startNode.visit();
    visitArray.push(startNode);
    // a=10;
    while(true){
        let queueLen = queue.length();
        console.log("Queue Len: " + queueLen);
        while(queueLen != 0){
            let node = queue.dequeue();
            // if(node == endNode) {
            //     console.log("Found!!");
            //     return visitArray;
            // }
            var neighborNodes = getNeighborNodes(node);
            console.log(neighborNodes);
            for(let n of neighborNodes){
                if(n.visited == false){
                    queue.enqueue(n);
                    n.visit();
                    visitArray.push(n);
                    if(n == endNode){
                        return visitArray;
                    }
                }
            }
            queueLen--;
        } 
    }

    // console.log();
    // queue.enqueue(neighborNodes);
    // for()

}
// function getNeighborCoord(initCoord){
//     let neighborsList=[];
//     let x = initCoord[0];
//     let y = initCoord[1];
//     // console.log
//     let MAX_HEIGHT = 20-1;
//     let MAX_WIDTH = 40-1;
//     if(x != 0){
//         if(y != MAX_HEIGHT){
//             neighborsList.push([x-1, y+1]);
//         }
//         neighborsList.push([x-1, y]);
//         if(y != 0){
//             neighborsList.push([x-1, y-1]);
//         }
        
//     }
//     if(y != 0){
//         neighborsList.push([x, y-1]);
//     }
//     if(x != MAX_WIDTH){
//         if(y != 0){
//             neighborsList.push([x+1, y-1]);
//         }
//         neighborsList.push([x+1, y]);
//         if(y != MAX_HEIGHT){
//             neighborsList.push([x+1, y+1]);
//         }
//     }
//     if(y != MAX_HEIGHT){
//         neighborsList.push([x, y+1]);
//     }
//     console.log("Neighbors List")
//     console.log(neighborsList);
//     return neighborsList;
// }

function getNeighborNodes(node, wallNodes){
    let neighborsList=[];
    let MAX_HEIGHT = 20-1;
    let MAX_WIDTH = 40-1;
    // Turns Clockwise
    if(node.x != 0){
        if(node.y != MAX_HEIGHT){
            if(nodeBox.get(node.x-1, node.y+1).visited == false){
                neighborsList.push(nodeBox.get(node.x-1, node.y+1));
            }
        }
        if(nodeBox.get(node.x-1, node.y).visited == false){
            neighborsList.push(nodeBox.get(node.x-1, node.y));
        }
        if(node.y != 0){
            if(nodeBox.get(node.x-1, node.y-1).visited == false){
                neighborsList.push(nodeBox.get(node.x-1, node.y-1));
            }
        }
        
    }
    if(node.y != 0){
        if(nodeBox.get(node.x, node.y-1).visited == false){
            neighborsList.push(nodeBox.get(node.x, node.y-1));
        }
    }
    if(node.x != MAX_WIDTH){
        if(node.y != 0){
            if(nodeBox.get(node.x+1, node.y-1).visited == false){
                neighborsList.push(nodeBox.get(node.x+1, node.y-1));
            }
        }
        if(nodeBox.get(node.x+1, node.y).visited == false){
            neighborsList.push(nodeBox.get(node.x+1, node.y));
        }
        if(node.y != MAX_HEIGHT){
            if(nodeBox.get(node.x+1, node.y+1).visited == false){
                neighborsList.push(nodeBox.get(node.x+1, node.y+1));
            }
        }
    }
    if(node.y != MAX_HEIGHT){
        if(nodeBox.get(node.x, node.y+1).visited == false){
            neighborsList.push(nodeBox.get(node.x, node.y+1));
        }
    }
    return neighborsList;
}

