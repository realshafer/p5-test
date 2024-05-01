let sound1, sound2, sound3, sound4, playButton, stopButton, player, file;

function setup() {
  sound1 = loadSound('bleeps/assets/bleeps1.mp3');
  sound2 = loadSound('bleeps/assets/bleeps2.mp3');
  sound3 = loadSound('bleeps/assets/bleeps3.mp3');
  sound4 = loadSound('bleeps/assets/bleeps4.mp3');
  sound5 = loadSound('bleeps/assets/bleeps5.mp3');
  sound6 = loadSound('bleeps/assets/bleeps6.mp3');
  sound7 = loadSound('bleeps/assets/bleeps7.mp3');
  sound8 = loadSound('bleeps/assets/bleeps8.mp3');
  sound9 = loadSound('bleeps/assets/bleeps9.mp3');
  sound10 = loadSound('bleeps/assets/bleeps10.mp3');

  playButton = createButton('play');
  playButton.style('font-size', '30px');
  playButton.style('background-color','#00E938');
  playButton.style('color','#000000');
  playButton.style('padding','1em');
  playButton.position(10,10);
  playButton.mousePressed(function playSound(){
    file = random(0,10);
    if (file < 1) {
      player = sound1;
    } else if (file > 1 && file < 2) {
      player = sound2;
    } else if (file > 2 && file < 3) {
      player = sound3;
    } else if (file > 3 && file < 4) {
      player = sound4;
    } else if (file > 4 && file < 5) {
      player = sound5;
    } else if (file > 5 && file < 6) {
      player = sound6;
    } else if (file > 6 && file < 7) {
      player = sound7;
    } else if (file > 7 && file < 8) {
      player = sound8;
    } else if (file > 8 && file < 9) {
      player = sound9;
    } else if (file > 9) {
      player = sound10;
    }
    player.loop();
  })
  
  stopButton = createButton('stop');
  stopButton.style('font-size', '30px');
  stopButton.style('background-color','#F80F05');
  stopButton.style('color','#FDFAFA');
  stopButton.style('padding','1em');
  stopButton.position(10,120);
  stopButton.mousePressed(function stopSound(){
    player.stop();
  })
}
