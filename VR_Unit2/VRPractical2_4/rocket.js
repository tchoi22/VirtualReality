
class Rocket{
  constructor(x,y,z){

    this.y = 0.01;
    this.yd = 0.03

    this.obj = document.createElement("a-entity");

    let coneTop = document.createElement("a-cone");
    coneTop.setAttribute("radius-top","0");
    coneTop.setAttribute("radius-bottom","0.5");
    coneTop.setAttribute("height","1");
    coneTop.setAttribute("color","red");
    coneTop.setAttribute("position","0 .5 -2");
    this.obj.append( coneTop );
  
    let body = document.createElement("a-cylinder");
    body.setAttribute("radius","0.5");
    body.setAttribute("height","3");
    body.setAttribute("color","gray");
    body.setAttribute("position","0 -1.5 -2");
    this.obj.append( body );

    let fins1 = document.createElement("a-triangle");
    fins1.setAttribute("width","7");
    fins1.setAttribute("height","3");
    fins1.setAttribute("color","red");
    fins1.setAttribute("position",".5 -2 -2");
    fins1.setAttribute("side","double");
    this.obj.append( fins1 );

    let fins2 = document.createElement("a-triangle");
    fins2.setAttribute("width","7");
    fins2.setAttribute("height","3");
    fins2.setAttribute("color","red");
    fins2.setAttribute("position","-.5 -2 -2");
    fins2.setAttribute("side","double");
    this.obj.append( fins2 );
    
    let fire = document.createElement("a-cone");
    fire.setAttribute("radius-top","0");
    fire.setAttribute("radius-bottom","0.25");
    fire.setAttribute("height","2");
    fire.setAttribute("color","orange");
    fire.setAttribute("position","0 -3.5 -2");
    fire.setAttribute("rotation","-180 0 0");
    this.obj.append( fire );

    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

}
}
