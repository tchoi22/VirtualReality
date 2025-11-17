/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "x--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "x-----x--------------x--------------x--x-----------x--x-----x-----------x-----------x--x--x",
  "x--xxxxxxx--xxxx--xxxxxxxxxx--x--xxxx--xxxx--xxxxxxx--x--xxxxxxx--x--xxxx--xxxx--xxxx--x--x",
  "x--------x--x-----x-----x--x--x-----x--x-----x--x--------x--------x--------x--------------x",
  "x--xxxx--xxxx--xxxx--xxxx--xxxxxxx--x--x--xxxx--xxxxxxx--xxxxxxxxxxxxxxxx--xxxxxxx--x--x--x",
  "x--x--x--x-----x--------x--x--x-----x--x-----------------x-----x--x--x-----x--------x--x--x",
  "x--x--x--x--xxxxxxx--xxxx--x--xxxx--x--xxxxxxx--xxxx--x--xxxx--x--x--xxxxxxxxxx--x--xxxxxxx",
  "x--x--------x--------x--------x-----------x--------x--x-----------x--x-----x-----x-----x--x",
  "xxxxxxx--x--xxxx--xxxx--x--xxxxxxxxxxxxx--x--xxxx--x--x--xxxxxxx--x--xxxx--x--xxxxxxx--x--x",
  "x--------x--x--x--x--x--x-----x-----x--x-----x--x--x--x--x--x--x-----x--x--x-----x--x-----x",
  "x--xxxx--xxxx--x--x--x--x--x--x--xxxx--xxxxxxx--xxxxxxx--x--x--xxxx--x--x--xxxx--x--xxxxxxx",
  "x--x--x-----------x-----x--x--x--x--------------x--x--x-----------x-----------------x-----x",
  "x--x--xxxxxxx--x--xxxx--x--x--x--x--x--xxxxxxx--x--x--xxxx--x--xxxxxxxxxxxxxxxx--xxxx--x--x",
  "x--------x--x--x-----x--x--x-----x--x--x--------x-----x--x--x--x-----x--------x--------x--x",
  "x--xxxxxxx--xxxx--xxxx--xxxx--x--x--xxxxxxx--xxxxxxx--x--x--xxxxxxx--xxxxxxx--x--xxxx--xxxx",
  "x--x-----x-----------------x--x-----x-----x-----x--------------x--x--x--x-----x--x-----x--x",
  "x--x--xxxx--xxxx--x--xxxxxxxxxxxxxxxx--x--x--xxxxxxxxxxxxx--xxxx--x--x--xxxx--xxxxxxx--x--x",
  "x--------x--x-----x-----x--------x--x--x--x-----------------x-----x--x--x--------x-----x--x",
  "x--xxxxxxxxxxxxxxxx--x--x--xxxxxxx--xxxx--x--xxxxxxx--x--xxxx--xxxx--x--x--x--xxxx--x--x--x",
  "x--------x--------x--x-----x-----x--------x--x--------x--x--------------x--x-----x--x-----x",
  "x--xxxxxxxxxxxxx--xxxxxxxxxxxxx--xxxxxxx--x--x--x--xxxx--x--xxxxxxx--x--x--xxxx--x--xxxx--x",
  "x-----x--------x-----x-----x-----------------x--x-----x-----x-----x--x--x--x-----x--x-----x",
  "x--xxxx--xxxxxxx--x--xxxx--xxxxxxx--x--x--xxxxxxxxxxxxxxxxxxx--xxxxxxxxxxxxx--xxxxxxx--xxxx",
  "x--x--x--x--x--x--x--------x-----x--x--x--x-----x-----x--------x--------x-----x--------x--x",
  "x--x--x--x--x--x--xxxx--xxxxxxx--xxxx--xxxx--xxxxxxx--xxxxxxx--xxxxxxx--x--xxxx--xxxxxxx--x",
  "x--------x--x--------x-----------x--x--x--x-----------x-----x-----x-----x--------------x--x",
  "xxxx--xxxx--x--xxxx--xxxx--xxxx--x--x--x--xxxxxxx--xxxx--xxxx--xxxx--xxxx--xxxxxxxxxx--x--x",
  "x--x-----x-----x--x-----x--x-----x--------x-----x--------x-----x-----x--x-----x-----x--x--x",
  "x--xxxx--xxxx--x--x--x--xxxxxxx--xxxxxxx--x--xxxx--xxxx--x--xxxx--xxxx--xxxx--xxxx--xxxx--x",
  "x--------x--x--x-----x--x--x-----x--------------x--x--x--x--x--x--x--x--x--------------x--x",
  "xxxx--xxxx--x--xxxx--x--x--x--xxxxxxx--xxxxxxx--xxxx--x--x--x--x--x--x--x--xxxxxxxxxxxxx--x",
  "x-----------x-----x--x--x-----x--------x-----------x-----x--x--x-----------x--------x-----x",
  "xxxxxxx--x--xxxx--x--xxxxxxxxxx--xxxxxxxxxx--x--x--xxxx--x--x--xxxx--x--x--xxxxxxx--x--xxxx",
  "x-----x--x--x-----x--x--x--x--x-----x-----x--x--x--------x-----------x--x--x-----x--x-----x",
  "xxxx--x--x--xxxx--xxxx--x--x--xxxxxxx--xxxx--xxxx--x--xxxxxxx--x--xxxx--x--x--xxxx--x--xxxx",
  "x--x-----x-----------x--x-----------------x--x-----x-----x-----x-----x--x-----------x-----x",
  "x--x--x--xxxxxxx--x--x--x--xxxx--xxxxxxxxxxxxxxxx--x--xxxxxxxxxx--x--x--xxxx--xxxx--x--xxxx",
  "x-----x--x--x--x--x--------x-----x--x-----x-----x--x--x--------x--x--x--x-----x--x-----x--x",
  "x--x--xxxx--x--xxxx--xxxxxxxxxx--x--x--x--x--xxxxxxxxxxxxx--xxxx--xxxxxxx--x--x--x--xxxx--x",
  "x--x--x-----x--x--------x-----x--x--x--x-----x--------x--------x--x--------x-----x--x-----x",
  "xxxx--x--x--x--xxxx--xxxxxxx--x--x--xxxx--x--xxxxxxx--xxxxxxx--xxxxxxx--xxxxxxx--xxxx--x--x",
  "x--------x--x-----x--x--x-----x-----x--x--x--x-----x--x--x--------x-----x--x-----------x--x",
  "xxxx--x--x--x--x--xxxx--x--x--xxxxxxx--x--xxxx--xxxx--x--x--xxxxxxx--xxxx--x--xxxx--x--xxxx",
  "x--x--x--x-----x--x-----x--x--------------------------------x--x--x-----x-----x--x--x-----x",
  "x--xxxxxxxxxxxxxxxxxxx--xxxx--x--xxxxxxxxxx--x--xxxx--x--x--x--x--xxxxxxxxxxxxx--xxxxxxx--x",
  "x-----------x--------------x--x--x-----x--x--x--x--x--x--x-----------x-----------x--x--x--x",
  "xxxx--xxxxxxxxxxxxx--x--xxxxxxx--x--x--x--xxxx--x--x--xxxxxxxxxx--xxxxxxx--xxxxxxx--x--x--x",
  "x--------------------x-----x-----x--x-----x-----x-----x--------x--------x--x--------------x",
  "x--xxxxxxxxxxxxx--xxxxxxx--x--xxxx--x--xxxxxxxxxxxxx--x--xxxx--xxxx--x--x--x--xxxx--x--xxxx",
  "x--------x--x--x--x--------x-----x--x-----x-----------x-----x--------x-----------x--x--x--x",
  "xxxxxxxxxx--x--x--xxxx--xxxx--xxxx--x--x--x--xxxx--xxxx--xxxxxxxxxxxxx--x--xxxx--xxxx--x--x",
  "x--------x-----------x-----x--x--x--x--x--x-----x--x-----x-----------x--x--x--------x-----x",
  "xxxx--x--xxxx--xxxxxxx--xxxx--x--x--xxxx--x--x--xxxx--xxxxxxxxxx--x--xxxxxxx--xxxxxxx--x--x",
  "x-----x-----x--x--------------------x--x--x--x--x-----------------x--x--x-----------x--x--x",
  "x--xxxx--xxxx--xxxxxxx--x--xxxx--xxxx--xxxx--x--xxxx--x--xxxxxxx--xxxx--x--x--x--x--x--x--x",
  "x--x--x--x-----------x--x-----x--x--x--------x-----x--x--x--x-----x-----x--x--x--x--x--x--x",
  "xxxx--x--x--xxxxxxxxxx--xxxxxxx--x--xxxx--xxxxxxx--xxxx--x--xxxx--x--xxxx--x--xxxxxxxxxxxxx",
  "x--x-----x-----x--x--x--x-----------x--x--x--------x-----------x--------x--x-----x-----x--x",
  "x--x--x--x--x--x--x--xxxx--x--xxxxxxx--x--xxxxxxx--xxxx--x--x--x--xxxxxxx--x--xxxxxxx--x--x",
  "x-----x-----x--------x-----x-----------x--x--------x-----x--x--x--x--------x--------------x",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--x",

]

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
  }
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
  }

})