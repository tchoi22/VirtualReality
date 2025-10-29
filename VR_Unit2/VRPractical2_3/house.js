class House {
  constructor(x, y, z) {
    this.obj = document.createElement("a-entity");
    
    let walls = document.createElement("a-box");
    walls.setAttribute("position", "0 1 0");
    walls.setAttribute("width", "2");
    walls.setAttribute("height", "2");
    walls.setAttribute("depth", "2");
    walls.setAttribute("color", "White");
    this.obj.append(walls);
    
    let roof = document.createElement("a-cone");
    roof.setAttribute("position", "0 2.5 0");
    roof.setAttribute("height", "1");
    roof.setAttribute("color", "Brown");
    this.obj.append(roof);
    
    let door = document.createElement("a-box");
    door.setAttribute("position", "0 0.75 1.01");
    door.setAttribute("width", "0.6");
    door.setAttribute("height", "1.5");
    door.setAttribute("depth", "0.1");
    door.setAttribute("color", "Brown");
    this.obj.append(door);

    let window1 = document.createElement("a-box");
    window1.setAttribute("position", "-.7 1.2 1.01");
    window1.setAttribute("width", "0.4");
    window1.setAttribute("height", "0.4");
    window1.setAttribute("depth", "0.1");
    window1.setAttribute("color", "#87CEEB");
    this.obj.append(window1);

    let window2 = document.createElement("a-box");
    window2.setAttribute("position", "0.7 1.2 1.01");
    window2.setAttribute("width", "0.4");
    window2.setAttribute("height", "0.4");
    window2.setAttribute("depth", "0.1");
    window2.setAttribute("color", "#87CEEB");
    this.obj.append(window2);

    this.obj.setAttribute("position", {x: x, y: y, z: z});
    scene.append(this.obj);
  }
}