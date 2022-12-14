img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;
function preload() {
	world_start = loadSound("world_start.wav");
	img = loadImage("mario05.png");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(650,400);
	video = createCapture(VIDEO);
    video.size(600, 300);
	canvas.parent('canvas');
	instializeInSetup(mario);

    posenet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function gotPoses(){
	if(results.length > 0)
	{
		noseX = results[0].pose.nose.y;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX +" noseY = " + noseY);
	}
}


function modelLoaded(){
	console.log('Model Loadedd!');
}

function draw() {
	background("#D3D3D3");
	if(noseX < 300)
	{
		marioX = marioX - 1;
	}
	if(noseX > 300)
	{
		marioX = marioX + 1;
	}
	if(noseY < 150)
	{
        marioY = marioY - 1;
	}
	image(img, marioX, marioY, 40, 70);
	game()
}






