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
	video.size(800,400);
	video.parent('game_console');
	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on('pose',gotPoses);
}

function draw() {
	game()
}

function modelLoaded(){
	console.log('model is loaded');
}

function gotPoses(results){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
}




