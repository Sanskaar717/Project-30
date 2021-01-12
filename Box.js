class Box{

    constructor(x,y,width,height){
        
   var options = {
     isStatic : false,
     density : 0.1
   }
 
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;
   this.visibility = 255;
    }
 
    display(){
      if(this.body.speed<2){
        var pos = this.body.position;
        var angle = this.body.angle;  
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke(2);
        strokeWeight(3);
        fill("#87CEEA");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }
        else{
          World.remove(myWorld,this.body);
          push();
          this.visibility = this.visibility - 5;
          tint(255,this.visibility);
          rect(this.body.position.x,this.body.position.y,65,65);
          pop();
        }
    }
 
 }