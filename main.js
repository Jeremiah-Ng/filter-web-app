noseX=0;
noseY=0;
eyeLeftY=0;
eyeRightY=0;
eyeLeftX=0;
eyeRightX=0;
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/65kCzXfD/moustache.png")
}
function setup(){
canvas=createCanvas(400,325);
canvas.center();

video=createCapture(VIDEO);
video.size(400, 325);
video.hide();

posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotPoses);
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    console.log("nose x = "+results[0].pose.nose.x);
    console.log("nose y = "+results[0].pose.nose.y);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    eyeRightX=results[0].pose.rightEye.x;
    eyeRightY=results[0].pose.rightEye.y;
    eyeLeftX=results[0].pose.leftEye.x;
    eyeLeftY=results[0].pose.leftEye.y;
}
}
function modelloaded(){
    console.log("Posenet Initialized");
}
function draw(){
image(video,0,0,400,325);

image(clown_nose, noseX-50, noseY-10,100,70)
}
function snapshot1(){
    save("image.png")
}
function stay(){
    document.getElementById("title1").style.backgroundColor="#5bc0de";
}