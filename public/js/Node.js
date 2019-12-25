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
        this.distance = Infinity;
    }

    setDiv(div){
        this.div = div;
        this.divChild = document.createElement('div');
        this.divChild.style.display = 'block';
        this.divChild.style.width = "25px";
        this.divChild.style.height = "25px";
        this.div.appendChild(this.divChild);
    }

    visit(){
        this.visited = true;
    }

    animateQueue(){
        this.divChild.className += "queueNode";
    }

    animateVisit(){
        // this.div.setAttribute('style', 'background-color: ' + color);
        // let div = document.createElement('div');
        this.divChild.className += " visitedNode";
        
        // console.log("Animate");
        // this.div.className += "visitedNode";
    }

    animatePath(){
        this.divChild.className += " pathNode";
    }

    reset(){
        this.visited = false;
        this.divChild.className = "";
        this.prev = null;
        this.distance = Infinity;
    }
}