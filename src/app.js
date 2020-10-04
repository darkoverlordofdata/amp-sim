// let heading = document.querySelector('h1');
// heading.textContent = 'CLICK ANYWHERE TO START'
// document.body.addEventListener('click', init);

Wad.logs.verbosity = 1
var voice
var tuner

// pedal effect flags
var overdriveBypass = 1
var delayBypass = 1
var tremeloBypass = 1
var moogBypass = 1
var wahWahBypass = 1
var filterBypass = 1
var cabinetBypass = 0
var compressorBypass = 0
var phaserBypass = 0
var chorusBypass = 0
var gainBypass = 0

document.getElementById('start').addEventListener('click', () => {
	voiceInit()
	console.log('Play mic')
	voice.play()
	// console.log('Stop mic')
	// voice.stop()

})


function voiceInit() 
{
	// set up canvas context for visualizer
	voice = new Wad({
		source  : 'mic',
		tuna   : {
			Overdrive : {
				outputGain: 0.5,         //0 to 1+
				drive: 0.7,              //0 to 1
				curveAmount: 1,          //0 to 1
				algorithmIndex: 0,       //0 to 5, selects one of our drive algorithms
				bypass: overdriveBypass
			},
			Delay: {
				feedback: 0.45,    //0 to 1+
				delayTime: 100,    //1 to 10000 milliseconds
				wetLevel: 0.5,     //0 to 1+
				dryLevel: 1,       //0 to 1+
				cutoff: 20000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
				bypass: delayBypass
			},
			Tremolo: {
				intensity: 0.3,    //0 to 1
				rate: 5,           //0.001 to 8
				stereoPhase: 0,    //0 to 180
				bypass: tremeloBypass				
			},
			MoogFilter: {
				cutoff: 0.065,    //0 to 1
				resonance: 3.5,   //0 to 4
				bufferSize: 4096, //256 to 16384				
				bypass: moogBypass				
			},
			WahWah: {
				automode: true,                //true/false
				baseFrequency: 0.5,            //0 to 1
				excursionOctaves: 2,           //1 to 6
				sweep: 0.2,                    //0 to 1
				resonance: 10,                 //1 to 100
				sensitivity: 0.5,              //-1 to 1
				bypass: wahWahBypass				
			},
			Filter: {
				frequency: 800,         //20 to 22050
				Q: 1,                   //0.001 to 100
				gain: 0,                //-40 to 40 (in decibels)
				filterType: "lowpass",  //lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch, allpass
				bypass: filterBypass
			},


			Cabinet: {
				makeupGain: 1,                                 //0 to 20
				impulsePath: "impulses/impulse_guitar.wav",    //path to your speaker impulse
				bypass: cabinetBypass				
			},
			Compressor: {
				threshold: -20,    //-100 to 0
				makeupGain: 1,     //0 and up (in decibels)
				attack: 1,         //0 to 1000
				release: 250,      //0 to 3000
				ratio: 4,          //1 to 20
				knee: 5,           //0 to 40
				automakeup: false, //true/false
				bypass: compressorBypass
			},
			Phaser: {
				rate: 0.1,                     //0.01 to 8 is a decent range, but higher values are possible
				depth: 0.6,                    //0 to 1
				feedback: 0.7,                 //0 to 1+
				stereoPhase: 40,               //0 to 180
				baseModulationFrequency: 700,  //500 to 1500
				bypass: phaserBypass
			},
			Chorus : {
				rate: 1.5,         //0.01 to 8+
				feedback: 0.4,     //0 to 1+
				depth: 0.7,        //0 to 1
				delay: 0.0045,     //0 to 1
				bypass: chorusBypass          //the value 1 starts the effect as bypassed, 0 or 1
			},
			Gain: {
				gain: 10,
				bypass: gainBypass          //the value 1 starts the effect as bypassed, 0 or 1
			},			
		},
	// reverb  : {
		//     wet : .4
		// },
		// filter: [
		// 	{type : 'lowpass', frequency : 600, q : 1, env : {frequency : 800, attack : 0.5}},
		// 	{type : 'highpass', frequency : 1000, q : 5}
		// ],		
		// filter  : {
		//     type      : 'highpass',
		//     frequency : 700
		// },
		// panning : -.2
	})

	tuner = new Wad.Poly()
	// tuner.setVolume(0) // mute the tuner to avoid feedback
	tuner.add(voice)

//   heading.textContent = 'Stacks of Amps';

}

// use Wad for audioContext
var audioCtx = Wad.audioContext
var voiceSelect = document.getElementById("voice");
var source;
var stream;

// grab the mute button to use below

var mute = document.querySelector('.mute');

//set up the different audio nodes we will use for the app

var analyser = audioCtx.createAnalyser();
analyser.minDecibels = -90;
analyser.maxDecibels = -10;
analyser.smoothingTimeConstant = 0.85;
// set up canvas context for visualizer

var canvas = document.querySelector('.visualizer');
var canvasCtx = canvas.getContext("2d");

var intendedWidth = document.querySelector('.wrapper').clientWidth;

canvas.setAttribute('width', intendedWidth);

var visualSelect = document.getElementById("visual");

var drawVisual;


function visualize() {
  WIDTH = canvas.width;
  HEIGHT = canvas.height;


  var visualSetting = visualSelect.value;
  console.log(visualSetting);

  if(visualSetting === "sinewave") {
    analyser.fftSize = 2048;
    var bufferLength = analyser.fftSize;
    console.log(bufferLength);
    var dataArray = new Uint8Array(bufferLength);

    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

    var draw = function() {

      drawVisual = requestAnimationFrame(draw);

      analyser.getByteTimeDomainData(dataArray);

      canvasCtx.fillStyle = 'rgb(200, 200, 200)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

      canvasCtx.beginPath();

      var sliceWidth = WIDTH * 1.0 / bufferLength;
      var x = 0;

      for(var i = 0; i < bufferLength; i++) {

        var v = dataArray[i] / 128.0;
        var y = v * HEIGHT/2;

        if(i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height/2);
      canvasCtx.stroke();
    };

    draw();

  } else if(visualSetting == "frequencybars") {
    analyser.fftSize = 256;
    var bufferLengthAlt = analyser.frequencyBinCount;
    console.log(bufferLengthAlt);
    var dataArrayAlt = new Uint8Array(bufferLengthAlt);

    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

    var drawAlt = function() {
      drawVisual = requestAnimationFrame(drawAlt);

      analyser.getByteFrequencyData(dataArrayAlt);

      canvasCtx.fillStyle = 'rgb(0, 0, 0)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

      var barWidth = (WIDTH / bufferLengthAlt) * 2.5;
      var barHeight;
      var x = 0;

      for(var i = 0; i < bufferLengthAlt; i++) {
        barHeight = dataArrayAlt[i];

        canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
        canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/2);

        x += barWidth + 1;
      }
    };

    drawAlt();

  } else if(visualSetting == "off") {
    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
    canvasCtx.fillStyle = "red";
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  }

}

analyser.connect(audioCtx.destination);
visualize();


// event listeners to change visualize and voice settings

visualSelect.onchange = function() {
  window.cancelAnimationFrame(drawVisual);
  visualize();
};

voiceSelect.onchange = function() {
  voiceChange();
};

mute.onclick = voiceMute;

function voiceMute() {
  if(mute.id === "") {
    // gainNode.gain.value = 0;
    mute.id = "activated";
    mute.innerHTML = "Unmute";
  } else {
    // gainNode.gain.value = 0.9;
    mute.id = "";
    mute.innerHTML = "Mute";
  }
}
