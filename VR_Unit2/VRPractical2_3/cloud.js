class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let round = document.createElement("a-sphere");
    round.setAttribute("color","white");
    round.setAttribute("position","0 1.5 0");
    round.setAttribute("radius","1.7");
    this.obj.append( round );
   
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}