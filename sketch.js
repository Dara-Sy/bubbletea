/* Bubble Tea Final Project - February 9, 2018
Created by Dara Sy

Movements of the bubbles were inspired by 
https://p5js.org/examples/objects-array-of-objects.html (a P5 example)

The structure of the constructor function is followed by Dan Shiffman's teaching here: 
https://www.youtube.com/watch?v=F3GeM_KrGjI 

I am inspired to create Bubble Tea, using a combination of objects, arrays, and constructor function. 

My blog post: https://thejourneytocoding.wordpress.com/2018/02/08/final-project-taste-the-bubble-tea/ 

*/ 

// arrays 
var menu = ["Taro", "Thai", "Lychee", "Milk Tea", "Earl Grey"] // array for flavor names 
var colors = ["lavender", "orange", "pink", "ivory", "linen"]; // array for flavor colors in the cup 
var bubbles = []; // empty array for the random positions of the bubbles in the cup 
var index = 0; // the start of the index of arrays, index counts from 0 

// global variables
var w = 710; // the width of the canvas 
var h = 400; // the height of the canvas 
var fr = 10; // the frame rate to see the bubbles move and change color 
var diam = 18; // the size of the bubbles 

//objects 
var cup = { // this is the literal objection notation for the cup (quad)
  x1: 250, // the quad parameters include 4 coordinates (x1, y1, x2, y2, x3, y3, x4, y4)
  y1: 170, 
  x2: 290,
  y2: 360,
  x3: 410,
  y3: 360,
  x4: 450,
  y4: 170
}

var straw = { // this is the literal objection notation for the straw (rect)
  x: 325,  // the rectangle coordinates include 1 coordinate and a width and length 
  y: 70, 
  w: 25, 
  l: 100
  
}

var words = { // this object literal notation includes a width and length for a text box, similar to a rectangle 
  w: 50, // width
  l: 200 //length 
}

function setup() {
  createCanvas(w, h); 
  frameRate(fr);
    
  }


function draw() {
  background(100);
  stroke(1);
  fill(colors[index]); // references change colors of the cup using array, which will take place with line 70 
  quad(cup.x1, cup.y1, cup.x2, cup.y2, cup.x3, cup.y3, cup.x4, cup.y4); // this is the cup
  fill("white"); // the straw is color white 
  stroke(1);
  rect(straw.x, straw.y, straw.w, straw.l); // this is the straw 
  fill("white"); // the text is color white 
  textSize(32); // the text is 32 in font size 
  text(menu[index], words.w, words.l); // this references change in words from menu array for the flavors of tea 

  for (var i = 0; i < 5; i++) { // for loop to identify the bubbles indices, calling a new instance for Bubble
   bubbles[i] = new Bubble();
   bubbles[i].move(); // this will call the new instance for the move function 
   bubbles[i].display(); // this will call the new instance for the display function 
  }
}
  
  function keyPressed() { // this changes the colors of the cup, when the key is pressed, an event change 
  index = index + 1; // by one short hand, this increments the indices for colors of the cup
  if(index === colors.length) { // this if statement will loop the indices from 0 to 4 and back to 0 in color index 
    index = 0; // this changes the color of the cup
  if(index === menu.length) { // this if statement will loop the indices from 0 to 4 and back to 0 in color index 
    index = 0; // this changes the name of the flavor 
    } 
  }
}

// constructor Bubble function 
function Bubble() { 
  this.x = random(335, 400); // this defines the this.x 
  this.y = random(290, 290); // this defines the this.y 
  this.x2 = random(400, 300); // this builds the this variables for the bubbles 
  this.y2 = random(340, 290); // the bubbles are placed in different coordinates at random 
  
  this.display = function() { // this calls the function to display the bubbles 
    noStroke();
    fill(random(255), random(255), random(255));
    ellipse(this.x, this.y, diam, diam);
    ellipse(this.x2, this.y2, diam, diam);
    
  }
  
  this.move = function() { // this calls the function to move the bubbles by 1 increment or 1 decrement at random coordinates 
    this.x = this.x + random(-1, 1); // referring back to line 19, I chose the frame rate 10, so we can see the movement of bubbles 
    this.y = this.y + random(-1, 1);
    this.x2 = this.x2 + random(-1, 1);
    this.y2 = this.y2 + random(-1, 1);
  }
} 

  
