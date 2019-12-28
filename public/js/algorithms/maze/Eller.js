function EllersAlgorithm(width, height){
    let visitArray=[];
    for(let y=1; y<height-1; y++){
        let nodeSetNumber = 0;
        if(y%2==1){
            let temp = nodeBox.get(1, y);
            if(y==1){
                for(let x=1; x<width-1; x+=2){
                    let node = nodeBox.get(x,y);
                    let betweenNode = getNodesInBetween(node, temp);
                    temp = node;
                    node.wall = false;
                    node.setNumber = nodeSetNumber;
                    visitArray.push(node);
                    if(Math.random()*2>0.5){
                        betweenNode.wall = false;
                        visitArray.push(betweenNode);
                    }
                    else{
                        nodeSetNumber++;
                    }
                }
            }
            else if (y==height-2){
                for(let x=1; x<width-1; x++){
                    let node = nodeBox.get(x,y);
                    node.wall = false;
                    visitArray.push(node);
                }
            }
            else{
                for(let x=1; x<width-1; x+=2){
                    let node = nodeBox.get(x,y);
                    let aboveNode = nodeBox.get(x, y-1);
                    node.wall = false;
                    visitArray.push(node);
                    if(aboveNode.wall == false){
                        node.setNumber = aboveNode.setNumber;
                    }
                    else{
                        node.setNumber = nodeSetNumber++;
                    }
                }
                for(let x=1; x<width-1; x+=2){
                    let node = nodeBox.get(x,y);
                    if(node.wall == true){
                        node.wall = false;
                        visitArray.push(node);
                        node.setNumber = nodeSetNumber++;
                    }
                }
                let prev = nodeBox.get(1, y);
                for(let x=1; x<width-1; x++){
                    let node = nodeBox.get(x,y);
                    let betweenNode = getNodesInBetween(node, prev);
                    if(node.setNumber != prev.setNumber && Math.random()*2>0.5){
                        betweenNode.wall = false;
                        visitArray.push(betweenNode);
                        node.setNumber = prev.setNumber;
                    }
                }
            }
        }
        else{
            for(let x=1; x<width-1; x+=2){
                let aboveNode = nodeBox.get(x, y-1);
                let node = nodeBox.get(x,y);
                if(Math.random()*2>0.5){
                    if(aboveNode.wall == false){
                        node.wall = false;
                        visitArray.push(node);
                        node.setNumber = aboveNode.setNumber;
                    }
                }
            }
        }
    }
    return visitArray;
}