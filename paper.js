class Paper{
    constructor(x,y,r){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':false
        }
        this.r = r;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(0,255,0);
        ellipse(0,0,this.r*2);
        pop();
      }
}