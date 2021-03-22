class Drop {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius= radius;
    
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      stroke("blue");
      strokeWeight(4);
      fill("blue");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
    updateY(){
      if(this.body.position.y>= height-100){
        Matter.Body.setPosition(this.body,{x:random(0,400), y: random (0,400)})
      }
    }
  };