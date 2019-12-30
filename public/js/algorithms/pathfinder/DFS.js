function DFS(startNode, endNode, size, wallNodes){
    let stack = new Stack();
    let visitArray = [];
    let prev = startNode;
    stack.push(startNode);
    let a=500;
    while(!stack.isEmpty()){
        console.log(a)
        a--;
        if(a<0) {
            console.log(visitArray);
            return;
        }
        let node = stack.pop();
        node.visit();
        // if(node.prev != prev){
        
        console.log(node)
        node.prev = prev;
        prev = node;
        visitArray.push(node);
        console.log(node != startNode)
        
        // }
        if(node == endNode){
            console.log("Found")
            return [visitArray, true];
        }
        // console.log(node);
        let neighborNodes = getAllNeighborNodes(node);
        for (let n of neighborNodes){
            if(n.visited == false && n.isWall() == false){
                stack.push(n);
                // n.prev = node;
                // visitArray.push(n);
                
            }
        }
    }
    console.log("Not Found")
    return [visitArray, false];
}

// Fix this
function sortShortestDFS(startNode, endNode){
    var path = [];
    var node = endNode;
    let temp = node;
    path.push(node);
    a=200;
    console.log("G")
    while(node != startNode && a-->0){
        console.log("23")
        node = node.prev;
        while(Math.abs(node.prev.x-temp.x)>1 || Math.abs(node.prev.y-temp.y)>1){
            node = node.prev;
            console.log("45")
            console.log(node);
            console.log(temp);
            a--;
            if(a<0) return;
        }
        path.push(node);
        temp = node;
    }
    // console.log(path)
    return path;
}