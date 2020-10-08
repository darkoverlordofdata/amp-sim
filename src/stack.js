/**
 * stack.js
 * 
 * a stack of amps
 * 
 * 
 */

Wad.logs.verbosity = 1
var guitar
var amplifier

// effect default flag values

var overdrive_output_gain = 0.5		//0 to 1+
var overdrive_drive = 0.7			//0 to 1
var overdrive_curve_amount = 1		//0 to 1
var overdrive_algorithm_index = 0	//0 to 5, selects one of our drive algorithms
var overdrive_bypass = 1

var delay_feedback = 0.45    		//0 to 1+
var delay_delay_time = 100    		//1 to 10000 milliseconds
var delay_wet_level = 0.5     		//0 to 1+
var delay_dry_level = 1       		//0 to 1+
var delay_cutoff = 20000      		//cutoff frequency of the built in lowpass-filter. 20 to 22050
var delay_bypass = 1

var tremelo_intensity = 0.3    		//0 to 1
var tremelo_rate = 5           		//0.001 to 8
var tremelo_stereo_phase = 0    		//0 to 180
var tremelo_bypass = 1				

var moog_filter_cutoff = 0.065    	//0 to 1
var moog_filter_resonance = 3.5   	//0 to 4
var moog_filter_buffer_size = 4096 	//256 to 16384				
var moog_filter_bypass = 1				

var wah_wah_automode = true       	//true/false
var wah_wah_base_frequency = 0.5     //0 to 1
var wah_wah_excursion_octaves = 2    //1 to 6
var wah_wah_sweep = 0.2             //0 to 1
var wah_wah_resonance = 10          //1 to 100
var wah_wah_sensitivity = 0.5       //-1 to 1
var wah_wah_bypass = 1				

var filter_frequency = 800         	//20 to 22050
var filter_Q = 1                   	//0.001 to 100
var filter_gain = 0                	//-40 to 40 (in decibels)
var filter_filter_type = "lowpass" 	//lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch, allpass
var filter_bypass = 1

var cabinet_makeup_gain = 1       	//0 to 20
var cabinet_impulse_path = "impulses/impulse_guitar.wav"    
var cabinet_bypass = 0				

var compressor_threshold = -20    	//-100 to 0
var compressor_makeup_gain = 1     	//0 and up (in decibels)
var compressor_attack = 1         	//0 to 1000
var compressor_release = 250      	//0 to 3000
var compressor_ratio = 4          	//1 to 20
var compressor_knee = 5           	//0 to 40
var compressor_automakeup = false 	//true/false
var compressor_bypass = 0

var phaser_rate = 0.1              	//0.01 to 8 is a decent range, but higher values are possible
var phaser_depth = 0.6              //0 to 1
var phaser_feedback = 0.7           //0 to 1+
var phaser_stereo_phase = 40        //0 to 180
var phaser_base_modulation_frequency = 700  //500 to 1500
var phaser_bypass = 0

var chorus_rate = 1.5         		//0.01 to 8+
var chorus_feedback = 0.4     		//0 to 1+
var chorus_depth = 0.7        		//0 to 1
var chorus_delay = 0.0045     		//0 to 1
var chorus_bypass = 0

var gain_gain = 10
var gain_bypass = 0

document.getElementById('start').addEventListener('click', () => {
	guitarInit()
	guitar.play()

	/**
	 * ?? to change volume, filter, panning, delay, rate ??
	 * 
	 * guitar.stop()
	 * guitar.play({ volume: new_volume })
	 * 
	 */
})


function guitarInit() 
{
	/**
	 * Guitar with effect pedals plugged into 'mic'
	 */
	guitar = new Wad({
		source  : 'mic',
		tuna   : {
			Overdrive : {
				outputGain: 	overdrive_output_gain, 
				drive: 			overdrive_drive,
				curveAmount: 	overdrive_curve_amount,
				algorithmIndex: overdrive_algorithm_index,       
				bypass: 		overdrive_bypass
			},
			Delay: {
				feedback: 		delay_feedback,
				delayTime: 		delay_delay_time,
				wetLevel: 		delay_wet_level,
				dryLevel: 		delay_dry_level,
				cutoff: 		delay_cutoff,
				bypass: 		delay_bypass
			},
			Tremolo: {
				intensity: 		tremelo_intensity,
				rate: 			tremelo_rate,
				stereoPhase: 	tremelo_stereo_phase,
				bypass: 		tremelo_bypass				
			},
			MoogFilter: {
				cutoff: 		moog_filter_cutoff,
				resonance: 		moog_filter_resonance,
				bufferSize: 	moog_filter_buffer_size,
				bypass: 		moog_filter_bypass				
			},
			WahWah: {
				automode: 		wah_wah_automode,
				baseFrequency: 	wah_wah_base_frequency, 
				excursionOctaves: wah_wah_excursion_octaves,
				sweep: 			wah_wah_sweep,
				resonance: 		wah_wah_resonance,
				sensitivity: 	wah_wah_sensitivity,
				bypass: 		wah_wah_bypass				
			},
			Filter: {
				frequency: 		filter_frequency,
				Q: 				filter_Q,
				gain: 			filter_gain,
				filterType: 	filter_filter_type,
				bypass: 		filter_bypass
			},
			Cabinet: {
				makeupGain: 	cabinet_makeup_gain,
				impulsePath: 	cabinet_impulse_path,
				bypass: 		cabinet_bypass				
			},
			Compressor: {
				threshold: 		compressor_threshold,
				makeupGain: 	compressor_makeup_gain,
				attack: 		compressor_attack,
				release: 		compressor_release,
				ratio: 			compressor_ratio,
				knee: 			compressor_knee,
				automakeup: 	compressor_automakeup,
				bypass: 		compressor_bypass
			},
			Phaser: {
				rate: 			phaser_rate,
				depth: 			phaser_depth,
				feedback: 		phaser_feedback,
				stereoPhase: 	phaser_stereo_phase,
				baseModulationFrequency: phaser_base_modulation_frequency,
				bypass: 		phaser_bypass
			},
			Chorus : {
				rate: 			chorus_rate,
				feedback: 		chorus_feedback,
				depth: 			chorus_depth,
				delay: 			chorus_delay,
				bypass: 		chorus_bypass
			},
			Gain: {
				gain: 			gain_gain,
				bypass: 		gain_bypass 
			},			
		},
	})

	/**
	 * Main Amp Use to set volume and tone - low/mid/hi 
	 */

	 /**
	  * 
	  * 
		
	  * 
	  */
	var q = 3;
	amplifier = new Wad.Poly({
		compressor : {
			attack    : .003, // The amount of time, in seconds, to reduce the gain by 10dB. This parameter ranges from 0 to 1.
			knee      : 30,   // A decibel value representing the range above the threshold where the curve smoothly transitions to the "ratio" portion. This parameter ranges from 0 to 40.
			ratio     : 12,   // The amount of dB change in input for a 1 dB change in output. This parameter ranges from 1 to 20.
			release   : .25,  // The amount of time (in seconds) to increase the gain by 10dB. This parameter ranges from 0 to 1.
			threshold : -24	  // The decibel value above which the compression will start taking effect. This parameter ranges from -100 to 0.
		},

		filter: [
			{type : 'lowpass', frequency : 100, q : 5 },
			{type : 'bandpass', frequency : 1150, q : 5 }
			{type : 'highpass', frequency : 1500, q : 5 }
		]	  
		
	})
	amplifier.setVolume(0.5) 
	amplifier.add(guitar)
}

// use Wad for audioContext
var audioCtx = Wad.audioContext
var guitarSelect = document.getElementById("guitar")
var source
var stream

// grab the mute button to use below

var mute = document.querySelector('.mute')

//set up the different audio nodes we will use for the app

var analyser = audioCtx.createAnalyser()
analyser.minDecibels = -90
analyser.maxDecibels = -10
analyser.smoothingTimeConstant = 0.85
// set up canvas context for visualizer

var canvas = document.querySelector('.visualizer')
var canvasCtx = canvas.getContext("2d")

var intendedWidth = document.querySelector('.wrapper').clientWidth

canvas.setAttribute('width', intendedWidth)

var visualSelect = document.getElementById("visual")

var drawVisual


function visualize() {
  WIDTH = canvas.width
  HEIGHT = canvas.height


  var visualSetting = visualSelect.value
  console.log(visualSetting)

  if(visualSetting === "sinewave") {
    analyser.fftSize = 2048
    var bufferLength = analyser.fftSize
    console.log(bufferLength)
    var dataArray = new Uint8Array(bufferLength)

    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT)

    var draw = function() {

      drawVisual = requestAnimationFrame(draw)

      analyser.getByteTimeDomainData(dataArray)

      canvasCtx.fillStyle = 'rgb(200, 200, 200)'
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT)

      canvasCtx.lineWidth = 2
      canvasCtx.strokeStyle = 'rgb(0, 0, 0)'

      canvasCtx.beginPath()

      var sliceWidth = WIDTH * 1.0 / bufferLength
      var x = 0

      for(var i = 0; i < bufferLength; i++) {

        var v = dataArray[i] / 128.0
        var y = v * HEIGHT/2

        if(i === 0) {
          canvasCtx.moveTo(x, y)
        } else {
          canvasCtx.lineTo(x, y)
        }

        x += sliceWidth
      }

      canvasCtx.lineTo(canvas.width, canvas.height/2)
      canvasCtx.stroke()
    }

    draw()

  } else if(visualSetting == "frequencybars") {
    analyser.fftSize = 256
    var bufferLengthAlt = analyser.frequencyBinCount
    console.log(bufferLengthAlt)
    var dataArrayAlt = new Uint8Array(bufferLengthAlt)

    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT)

    var drawAlt = function() {
      drawVisual = requestAnimationFrame(drawAlt)

      analyser.getByteFrequencyData(dataArrayAlt)

      canvasCtx.fillStyle = 'rgb(0, 0, 0)'
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT)

      var barWidth = (WIDTH / bufferLengthAlt) * 2.5
      var barHeight
      var x = 0

      for(var i = 0; i < bufferLengthAlt; i++) {
        barHeight = dataArrayAlt[i]

        canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)'
        canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/2)

        x += barWidth + 1
      }
    }

    drawAlt()

  } else if(visualSetting == "off") {
    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT)
    canvasCtx.fillStyle = "red"
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT)
  }

}

analyser.connect(audioCtx.destination)
visualize()


// event listeners to change visualize and guitar settings

visualSelect.onchange = function() {
  window.cancelAnimationFrame(drawVisual)
  visualize()
}

guitarSelect.onchange = function() {
  guitarChange()
}

mute.onclick = guitarMute

function guitarMute() {
  if(mute.id === "") {
    // gainNode.gain.value = 0
    mute.id = "activated"
    mute.innerHTML = "Unmute"
  } else {
    // gainNode.gain.value = 0.9
    mute.id = ""
    mute.innerHTML = "Mute"
  }
}
