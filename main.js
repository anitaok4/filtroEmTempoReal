var moustacheX = 0;
var moustacheY = 0;

function preload(){
bigode = loadImage("https://i.postimg.cc/qM2Ggcq8/cone-Bigode-PNG-1024x1024.png");
}

function setup(){
 canvas = createCanvas(300, 300)
 canvas.center()
 
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide();
   
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
   }
   
function gotPoses(results){
     if(results.length > 0){
        console.log(results)
        console.log( "moustache x = " + results[0].pose.nose.x)
        console.log( "moustache y = " + results[0].pose.nose.y)
        moustacheX = results[0].pose.nose.x-30;
        moustacheY = results[0].pose.nose.y-16
       }
   
   }

function modelLoaded(){
    console.log('poseNet is initialiazed')
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(bigode, moustacheX, moustacheY, 60, 60)
}

function takeSnapshot(){
    save('minhaImagem.png')
   }