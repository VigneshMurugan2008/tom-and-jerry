var bgImage;
var cat;
var mouse;




function preload() {
    //load the images here

    bgImage=loadImage("garden.png");
    catimg1 = loadAnimation("cat1.png,cat2.png,cat3.png,cat4.png")
    mouseimg1 = loadAnimation("mouse1.png,mouse2.png,mouse3.png,mouse4.png")
    catimg2 = loadAnimation ("cat2.png,cat3.png")
    mouseimg2 = loadAnimation ("mouse2.png,mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createCanvas(200,400)
    mouse = createCanvas(400,200)

}

function draw() {

    background(bgImage);
    //(Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.addAnimation ("catRunning",catimg2);
        cat.changeAnimation ("catRunning");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here