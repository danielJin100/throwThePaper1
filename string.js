class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 300
        }
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }
    display(){
        var pointA = this.string.bodyA.position;
        var pointB = this.string.pointB;
        stroke(0);
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    } 
}