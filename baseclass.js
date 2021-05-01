class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        rotate(angle);
        fill(100);
        rect(this.x,this.y,this.width,this.height);
        pop();
      }
}