hp_music=music.mp3;
pp_music=music2.mp3;
function preload(){
    loadSound(hp_music);
    loadSound(pp_music);
}
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
}
function draw(){
    image(video , 0, 0, 300, 300); 
}