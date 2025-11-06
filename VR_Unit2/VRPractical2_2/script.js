let scene;
let car;
let rocket;
let sun; 
let dude;
let pokemonball;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  car = document.querySelector("#car");
  rocket = document.querySelector("#rocket");
  sun = document.querySelector("#sun");
  dude = document.querySelector("#dude");
  pokemonball = document.querySelector("#pokemonball");

  car.x = 0.01;
  car.dx = 0.02;
  rocket.y = 0.01
  rocket.dy = 0.03;
  sun.o = 0
  sun.do = 1
  dude.g = 0.01
  dude.dg = 0.005
  pokemonball.r = 0.1
  pokemonball.dr = 0.08

  loop();
})





function loop(){

  car.x += car.dx;
  car.setAttribute("position",{x:car.x, y:0, z:0});
  
  rocket.y += rocket.dy;
  rocket.setAttribute("position",{x:0, y:rocket.y, z:0});
  window.requestAnimationFrame(loop);

  sun.o += sun.do;
  sun.setAttribute("opacity", sun.o / 1000);

  dude.g += dude.dg;
  dude.setAttribute("scale", {x:0 + dude.g, y:0 + dude.g, z:0 + dude.g} );

  pokemonball.r += pokemonball.dr;
  pokemonball.setAttribute("rotation", {x:0, y:pokemonball.r, z:0} );


}



let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);