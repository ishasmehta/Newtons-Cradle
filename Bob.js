class Bob{
    constructor(xPos,yPos,radius){
        var options = {
            restitution: 1,
            friction: 0,
            density: 0.8
        }
        this.body = Bodies.circle(xPos,yPos,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var posx = this.body.position.x;
        var posy = this.body.position.y;
        push();
        translate(posx,posy);
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}