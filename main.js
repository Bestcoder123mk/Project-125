noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
difference=0;
function draw(){
    background("#FFFF00");
    text("Anirudh",noseX,noseY);
    textSize(difference);
    fill("blue");
}
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Initialised");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);   
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
    }
}