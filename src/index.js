// const schema = {
// 	foo: {
// 		type: 'number',
// 		maximum: 100,
// 		minimum: 1,
// 		default: 50
// 	},
// 	bar: {
// 		type: 'string',
// 		format: 'url'
// 	}
// };

// const store = new Store({schema});

// console.log(store.get('foo'));
// //=> 50

// store.set('foo', '1');


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
	console.log('Stop mic')
	voice.stop()

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


}

