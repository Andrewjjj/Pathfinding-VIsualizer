function DFS(startNode, endNode, size, wallNodes){
    let stack = new Stack();
    let visitArray = [];
    let prev = startNode;
    stack.push(startNode);
    while(!stack.isEmpty()){
        let node = stack.pop();
        node.visit();
        node.prev = prev;
        visitArray.push(node);
        prev = node;
        if(node == endNode){
            return visitArray;
        }
        // console.log(node);
        let neighborNodes = getNeighborNodes(node);
        for (let n of neighborNodes){
            if(n.visited == false){
                stack.push(n);
                // n.prev = node;
                // visitArray.push(n);
                
            }
        }
    }
    return visitArray;
}