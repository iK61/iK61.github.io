class Snake {
    constructor(r,v){
        this.radius = r;
        this.velocity = v;
        this.positions = [{x:0,y:0}];
        this.mass = 1;
        this.color ="black";      
    }
    UpdateColor(c){
        this.color = c;
    }
    GetLength(){
        return this.positions.length;
    }
    AddMass(){
        let last = this.positions[this.GetLength()-1];
        this.positions.push({x:last.x,y:last.y});
        this.mass++;
        // console.log("mass gained");
    }
    Shrink(m){
        // debugger;
        //if no mass specified shrink all
        let l = this.GetLength();
        if(m===undefined){
            this.positions.splice(0,l-1);
            return;
        }
        this.positions.splice(l-m,m);
    }  
    /**
     * @param {CanvasRenderingContext2D} 
     */
    Draw(rc,snakeGame){
        if (rc.constructor.name != "CanvasRenderingContext2D"){
            throw "not a canvas";
        }
        let {radius } = this;
        rc.fillStyle= this.color;
        if(snakeGame.settings.scaleEnabled){
            radius = radius * snakeGame.settings.scale;
        }
        for(const p of this.positions){
            rc.beginPath();
            rc.arc(p.x, p.y, radius, 0, 2* Math.PI);
            rc.fill();
            rc.closePath();
        }
    }
    GetHeadPosition(){
        return this.positions[0];
    }
    SetHeadPosition(x,y){
        if (typeof x == "number" && !Number.isNaN(x)) { this.positions[0].x = x; }
        if (typeof y == "number" && !Number.isNaN(y)) { this.positions[0].y = y; }
    }
}
// export default Snake;