noseX=0;
noseY=0;
marioX=325;
marioY=325;
img="";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
    img=loadImage("mario.png")
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(1200,300);
	posenet=ml5.posenet(video,modelLoaded);
}

function draw() {
	game()
}

function modelLoaded(){
	console.log('model is loaded');
}




