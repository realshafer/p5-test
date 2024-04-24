let osc, freq, playButton, stopButton;

function setup() {
  let cnv = createCanvas(100, 100);
  // cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
  osc.freq(440);
  osc.amp(1);
  
  playButton = createButton('play');
  playButton.style('font-size', '30px');
  playButton.style('background-color','#00E938');
  playButton.style('color','#000000');
  playButton.style('padding','1em');
  playButton.position(10,10);
  playButton.mousePressed(function playOscillator(){
    osc.freq(random(500,6000))
    osc.start();
  })
  
  stopButton = createButton('stop');
  stopButton.style('font-size', '30px');
  stopButton.style('background-color','#F80F05');
  stopButton.style('color','#FDFAFA');
  stopButton.style('padding','1em');
  stopButton.position(10,120);
  stopButton.mousePressed(function stopOscillator(){
    osc.stop();
  })
}
