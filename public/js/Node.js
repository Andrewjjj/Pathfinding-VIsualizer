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

class NodeAnimator {
    constructor(node, state){
        this.node = node;
        this.state = state;
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
        this.wall = false;
        this.startNode = false;
        this.endNode = false;
        this.distance = Infinity;
    }

    setDiv(div){
        this.div = div;
        this.divChild = document.createElement('div');
        this.divChild.style.display = 'block';
        this.divChild.style.width = "25px";
        this.divChild.style.height = "25px";
        this.divChild.className += " node";
        this.div.appendChild(this.divChild);
    }

    visit(){
        this.visited = true;
    }

    animateQueue(){
        this.divChild.className += "queueNode";
    }

    animateVisit(){
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

    switchWall(){
        if(this.startNode == false && this.endNode == false){
            this.wall = (this.wall != true);
            if(this.wall == true){
                this.divChild.className = this.divChild.className.replace(" node", " wallNode");
            }
            else{
                this.divChild.className = this.divChild.className.replace(" wallNode", " node");
            }
        }
    }

    isWall(){
        return (this.wall == true)
    }

    setWall(){
        this.divChild.className = this.divChild.className.replace(" node", " wallNode");
        this.wall = true;
    }

    setNormal(){
        this.divChild.className = this.divChild.className.replace(" wallNode", " node");
        this.wall = false;
    }
}