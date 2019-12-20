// Lol @ the name tho.

class NodeBox{
    constructor(){
        this.nodeBox=[];
    }

    set(nodeBox){
        this.nodeBox=nodeBox;
    }

    get(x, y){
        return this.nodeBox[y][x];
    }
}

class Node {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.visited = false;
        this.div;
        this.divChild
        this.prev;
    }

    setDiv(div){
        this.div = div;
        this.divChild = document.createElement('div');
        this.divChild.style.display = 'block';
        this.divChild.style.width = "20px";
        this.divChild.style.height = "20px";
        this.div.appendChild(this.divChild);
    }

    visit(){
        this.visited = true;
    }

    animateVisit(){
        // this.div.setAttribute('style', 'background-color: ' + color);
        // let div = document.createElement('div');
        this.divChild.className += "visitedNode";
        
        
        // this.div.className += "visitedNode";
    }

    animatePath(){
        this.divChild.className += " pathNode";
    }
}