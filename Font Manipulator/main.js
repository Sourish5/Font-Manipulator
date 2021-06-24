leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup()
{
    canvas = createCanvas(550,550);
    canvas.position(560,200);
    capture = createCapture(VIDEO);
    capture.size(550,500);
    capture.hide();
    posenet = ml5.poseNet(capture,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw()
{
    background('red');
  document.getElementById('display_difference').innerHTML = 'Font size of the text will be ' + difference + 'px';  
  fill('black');
  text('Sourish',200,200);
  textSize(difference);
}
function modelLoaded()
{
    console.log('Posenet is Loaded!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
     leftWristX = results[0].pose.leftWrist.x;
     rightWristx = results[0].pose.rightWrist.x;
     difference = floor(leftWristX - rightWristx);
    }
}