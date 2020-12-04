class Box {

constructor(x,y,width,height){

var options = {
    restitution :0.4,
    friction :0.0
}
this.image = loadImage("images/Box.png")
this.Boxbody = Bodies.rectangle(x,y,width,height,options)
this.visibility = 255
this.width = width
this.height = height
World.add(world,this.Boxbody)
}

display(){

if (this.Boxbody.speed<2){
    var pos = this.Boxbody.position
    var angle = this.Boxbody.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    fill("pink")
    image(this.image,0,0,30,30)
    pop()
}
else{
    World.remove(world,this.Boxbody);
    push()
  tint(255,this.visibility)
  image(this.image,this.Boxbody.position.x,this.Boxbody.position.y,30,30)
  this.visibility = this.visibility -5
  pop()
}
}
score(){
if (this.visibility<0 && this.visibility>-1005){
score = score +1
}
}
}