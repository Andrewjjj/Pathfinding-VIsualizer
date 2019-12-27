function DepthFirstSearchMaze(width, height){
    let startX = parseInt(Math.random()*width);
    let startY = parseInt(Math.random()*height);
    let node = nodeBox.get(startX, startY);
    let visitArray = createWall(width, height);
    while(node.startNode || node.endNode){
        startX = parseInt(Math.random()*width);
        startY = parseInt(Math.random()*height);
        node = nodeBox.get(startX, startY);
    }
    visitArray.push(node);

    

    // node.setWall();
}

function createWall(width, height){
    let x=0,y=0;
    let visitArray = [];
    while(x<width){
        let node = nodeBox.get(x,y);
        if(!node.startNode && !node.endNode){
            // nodeBox.get(x, y).setWall();
            visitArray.push(node);
        }
        x++;
    }
    while(y<height){
        let node = nodeBox.get(x,y);
        if(!node.startNode && !node.endNode){
            // nodeBox.get(x, y).setWall();
            visitArray.push(node);
        }
        y++;
    }
    while(x>0){
        let node = nodeBox.get(x,y);
        if(!node.startNode && !node.endNode){
            // nodeBox.get(x, y).setWall();
            visitArray.push(node);
        }
        x--;
    }
    while(y>0){
        let node = nodeBox.get(x,y);
        if(!node.startNode && !node.endNode){
            // nodeBox.get(x, y).setWall();
            visitArray.push(node);
        }
        y--;
    }
    return visitArray;

}