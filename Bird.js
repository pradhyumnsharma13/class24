class Bird{
constructor(x,y,w,h){
var options = {
restitution: 0.8, 
friction:1,
density : 1 

}
this.body= Matter.Bodies.rectangle (x,y,w,h,options)
this.width = w;
this.height = h;
World.add(world, this.body);
}
display(){
var pos = this.body.position
pos.x= mouseX
pos.y=mouseY
var angle = this.body.angle
push();
translate(pos.x, pos.y);
rotate(angle);
rectMode(CENTER);
fill(" red ");
rect(0, 0, this.width, this.height);
pop();

}































}