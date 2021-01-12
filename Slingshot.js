class Slingshot{

    constructor(bodyA,pointB){
        var con = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.05,
            length : 10
          }

          this.pointB = pointB;
          this.sling = Constraint.create(con);
          World.add(myWorld,this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
         push(); 
         stroke("#3FE0D0");
         strokeWeight(7);
         line(pointA.x,pointA.y,pointB.x,pointA.y);
        }
    }
}