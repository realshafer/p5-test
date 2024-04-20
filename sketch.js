let osc, freq, playButton, stopButton;

function setup() {
  let cnv = createCanvas(100, 100);
  // cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
  osc.freq(440);
  osc.amp(1);
  
  playButton = createButton('play');
  playButton.position(10,10);
  playButton.mousePressed(function playOscillator(){
    osc.freq(random(500,6000))
    osc.start();
  })
  
  stopButton = createButton('stop');
  stopButton.position(10,30);
  stopButton.mousePressed(function stopOscillator(){
    osc.stop();
  })
}