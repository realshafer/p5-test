let sound;

function preload(){
  sound1 = loadSound('assets/bleeps1.mp3');
  sound2 = loadSound('assets/bleeps2.mp3');
  sound3 = loadSound('assets/bleeps3.mp3');
  sound4 = loadSound('assets/bleeps4.mp3');
  sound5 = loadSound('assets/bleeps5.mp3');
  sound6 = loadSound('assets/bleeps6.mp3');
  sound7 = loadSound('assets/bleeps7.mp3');
  sound8 = loadSound('assets/bleeps8.mp3');
  sound9 = loadSound('assets/bleeps9.mp3');
  sound10 = loadSound('assets/bleeps10.mp3');
  chooseSound();
}

function setup(){
  let cnv = createCanvas(500,500);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.8);
}

function draw(){
  background(220);

  let spectrum = fft.analyze();
  noStroke();
  fill(255, 0, 255);
  for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h )
  }

  let wave = fft.waveform();
  noFill();
  beginShape();
  stroke(20);
  for (let i = 0; i < wave.length; i++){
    let x = map(i, 0, wave.length, 0, width);
    let y = map( wave[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();

  text('tap to play', 20, 20);
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    chooseSound();
    sound.loop();
  }
}

function chooseSound(){
    file = random(0,10);
    if (file < 1) {
      sound = sound1;
    } else if (file > 1 && file < 2) {
      sound = sound2;
    } else if (file > 2 && file < 3) {
      sound = sound3;
    } else if (file > 3 && file < 4) {
      sound = sound4;
    } else if (file > 4 && file < 5) {
      sound = sound5;
    } else if (file > 5 && file < 6) {
      sound = sound6;
    } else if (file > 6 && file < 7) {
      sound = sound7;
    } else if (file > 7 && file < 8) {
      sound = sound8;
    } else if (file > 8 && file < 9) {
      sound = sound9;
    } else if (file > 9) {
      sound = sound10;
    }
    // function togglePlay() {
    //   if (sound.isPlaying()) {
    //     sound.pause();
    //   } else {
    //     sound.loop();
    //   }
    // }
}