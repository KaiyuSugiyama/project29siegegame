class Slingshot {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);    
    }
    display(){
      

        if(this.sling.bodyA) {
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            push();
            World.add(world,polygon);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            //console.log(pointA.x)
            //console.log(this.sling.bodyA.x);
            pop();
        }
    }
    fly() {
        this.sling.bodyA = null;
    }
}