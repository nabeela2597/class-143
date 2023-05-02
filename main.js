function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(300,300);
	video.parent('game');

	posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose',gotPoses())

}

function modelLoaded(){
	console.log('model has been loaded')
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results)
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
}






