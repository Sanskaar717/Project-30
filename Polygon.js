class Polygon{

    constructor(x,y){

        var ops = {
            density : 10
        }
 
   this.body = Bodies.rectangle(100,250,45,45,ops);
   this.width = 45;
   this.height = 45;
   this.image = loadImage("polygon.png");
   World.add(myWorld,this.body);
    }
 
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;  
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("#87CEEA");
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
 
 }