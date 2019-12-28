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
            return
        }
        let node = stack.pop();
        node.visit();
        if(!(Math.abs(prev.x-node.x)>1^Math.abs(prev.y-node.y)>1)){
            node.prev = prev;
        }
        visitArray.push(node);
        prev = node;
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