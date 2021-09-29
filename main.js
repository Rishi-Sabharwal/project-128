song1="";
song2="";

leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;


function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+" leftWristY = "+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        righttWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX+" rightWristY = "+rightWristY);
    }
}

function draw(){
    image(video, 0, 0, 600, 500)
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}