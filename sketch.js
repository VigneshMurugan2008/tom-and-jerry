var bgImage;
var cat,catimg1,catimg2,catimg3;
var mouse,mouseimg1,mouseiimg2,mouseimg3;




function preload() {
    //load the images here

    bgImage=loadImage("garden.png");
    catimg1 = loadAnimation("cat1.png")
    mouseimg1 = loadAnimation("mouse1.png")
    catimg2 = loadAnimation ("cat2.png","cat3.png")
    mouseimg2 = loadAnimation ("mouse2.png","mouse3.png")

    catimg3 = loadAnimation ("cat4.png")
    mouseimg3 = loadAnimation ("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600)
    mouse = createSprite(200,600)
        
    cat.addAnimation("sleepingCat",catimg1)
    cat.scale=0.2
        mouse.addAnimation("teasing",mouseimg1)
        mouse.scale=0.5

}

function draw() {

    background(bgImage);
    //(Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.addAnimation ("catRunning",catimg3);
        cat.changeAnimation ("catRunning");
cat.x=300
cat.velocityX
          

   }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if (KeyCode === RIGHT_ARROW){

    mouse.addAnimation("mouseTeasing",mouseimg2)
    mouse.changeAnimation("mouseTeasing")
  mouse.frameDelay=25
}

if (KeyCode === LEFT_ARROW){

    mouse.addAnimation("mouseTeasing",mouseimg2)
    mouse.changeAnimation("mouseTeasing")
  mouse.frameDelay=25
.

}


}