class Polygon {

constructor(x,y,width,height){

var options = {
restitution : 0,
friction : 1
}
this.image = loadImage("images/hexagon.png")
this.body = Bodies.rectangle(x,y,width,height)
World.add(world,this.body)
}

display(){
push()
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,80,80)
pop()
}
}