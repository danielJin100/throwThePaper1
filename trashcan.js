class Trashcan{
    constructor(x,y,width,height){
        this.base = new BaseClass(x-width/2,y,width,10);
        this.wall1 = new BaseClass(x-width,y-60,10,height);
        this.wall2 = new BaseClass(x,y-60,10,height);
    }
    display(){
        this.base.display();
        this.wall1.display();
        this.wall2.display();
    }
}