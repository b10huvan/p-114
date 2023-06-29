moustacheX=0;
moustacheY=0;

function preload() {

    moustache_nose = loadImage('https://i.postimg.cc/7YsxL81G/moustache.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("moustache x = " + results[0].pose.moustache.x);
        console.log("moustache y = " + results[0].pose.moustache.y);
    }
}


function modelLoaded() {
    console.log('Posenet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    //fill(225,0,0);
    //stroke(225,0,0);
    //circle(noseX, noseY, 20);
    image(moustache-nose, moustacheX, moustacheY, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}