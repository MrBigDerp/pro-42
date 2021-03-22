class Umbrella {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.1,
          'friction':0.3,
          'density':1.0,
          "isStatic":true
      }
      this.image = loadImage("images/walking_1.png")
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
      stroke("green");
      strokeWeight(4);
      fill(255);
      image(this.image, 0, -40, this.radius*2, this.radius*2);
      pop();
    }
  };