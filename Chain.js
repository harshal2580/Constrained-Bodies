class Chain{
    constructor(bodyA, bodyB) {
        var options ={
            bodyA:bird.body,
            bodyB:cLog.body,
            stifness:0.04,
            length:10
        }

        this.chain = Constraint.create(options);
    World.add(world, this.chain);

    }
    display(){
        var pointA = bird.body.position;
        var pointB = cLog.body.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}