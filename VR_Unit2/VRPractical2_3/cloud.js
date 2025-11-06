class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let circle1 = document.createElement("a-sphere");
    circle1.setAttribute("color","white");
    circle1.setAttribute("position","0 0 0");
    circle1.setAttribute("radius","1");
    this.obj.append( circle1 );

    let circle2 = document.createElement("a-sphere");
    circle2.setAttribute("color","white");
    circle2.setAttribute("position","1 0.2 0");
    circle2.setAttribute("radius","1.2");
    this.obj.append( circle2 );

    let circle3 = document.createElement("a-sphere");
    circle3.setAttribute("color","white");
    circle3.setAttribute("position","-1 0.2 0");
    circle3.setAttribute("radius","1.2");
    this.obj.append( circle3 );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}