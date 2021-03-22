const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var drops=[]
var maxDrops = 100
function preload(){
    
}

function setup(){

canvas = createCanvas(300,600)
engine = Engine.create();
world = engine.world;
    umbrella = new Umbrella(100,495,50)
    ground = new Ground(150,550,300,10)
    for(var i = 0; i<maxDrops; i++){
        var drop = new Drop(random(0,400),random(0,400),1)
        drops.push(drop)
    }

}

function draw(){
    background(0);

    Engine.update(engine);

    umbrella.display()
    ground.display()
    for(var i = 0; i<drops.length; i++){
        drops[i].display()
        drops[i].updateY()
    }
}   

