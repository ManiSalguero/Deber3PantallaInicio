//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
var mani;
var fondo;

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {
  fondo= loadImage("assets/fondo-1.png"); 
  

//create an animation from a sequence of numbered images
//pass the first and the last file name and it will try to find the ones in between
mani = loadAnimation("assets/mani-01.png", "assets/mani-16.png");
  

}

function setup() {
  createCanvas(790,540);
}

function draw() {
  background(fondo);  

  animation(mani, 230, 450);
}  
  
  
  
  
  
  