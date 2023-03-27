let song,amp,level
function preload() {
  song =loadSound('https://cdn.pixabay.com/audio/2022/08/20/audio_55aa207a92.mp3');
// song= loadSound('https://cdn.pixabay.com/download/audio/2023/01/28/audio_a153587dd5.mp3');//filename=phonk-136933.mp3
 //song= loadSound('https://assets.editor.p5js.org/62316d91ad2f6600243abedc/eb36f330-0bc7-4a84-9315-8a792028fced.mp3');
}
function setup(){
  createCanvas(window.innerWidth,window.innerHeight)
 
  amp = new p5.Amplitude()
   getAudioContext().resume();
}
function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
function draw(){
  background(255)
 level= amp.getLevel()
 
  value= map(level,0,1,0,360);
 
  translate(width/2,height/2);
  strokeWeight(10)
  arc(0,0,window.width/2,window.width/2,0,value/30)
  rotate(PI)
   stroke(255,0,0,value);

  //fill(level);
  line(100,100,value,value)
   arc(value+60,value+60,150,150,0,value/30)
     
     arc(0,0,100,100,0,value/15)
  rotate(PI/2)
  line(100,100,value,value)
  
}
