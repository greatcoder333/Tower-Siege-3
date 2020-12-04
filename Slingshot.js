class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(polygon){
        this.sling.bodyA = polygon
        }

    display(){

        if(this.sling.bodyA != null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            if(pointA.x < 220){
                strokeWeight(10);
                stroke(48,22,8)
                line(pointA.x -20, pointA.y, pointB.x +20, pointB.y);
                line(pointA.x -20, pointA.y, pointB.x -20, pointB.y);
            }
            else {
                strokeWeight(10);
                stroke(48,22,8)
                line(pointA.x +20, pointA.y, pointB.x +20, pointB.y);
                line(pointA.x +20, pointA.y, pointB.x -20, pointB.y);

            }
        }
    }
     
}