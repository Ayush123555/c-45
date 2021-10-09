class Player{
  constructor(x,y,width,height){
      var options={
          isStatic:'false'
      }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height
    this.image("images/images-removebg-preview(2).png")
    this.body.addImage(this.image)
    World.add(world,this.body)

  }

  display(){
  var pos=this.body.position
  rectMODE(CENTER)
  rect(pos.x,pos.y,20,20)

  }
}