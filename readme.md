# amp-sim

Amplifier Simulator with wad.js and webaudio-controls.js. Tuna.js is used for effects.

## Plug in

You'll need to plug your guitar/bass into the microphone input, either using usb or line input jack. 

If you are using usb, you're on your own. I'm using line input, and on a laptop, the line input is often combined with your headphones for use as a headset. I plug a trrs splitter adapter into the headset jack. Then I plug my headphones into the headphone adapter, and connect the microphone adapter to my guitar using a 1/4" trs to 1/8" ts adapter. If you're using a desktop with a sound card, you may not need the splitter, you should be able to connect your guitar directly to line input. 

On linux, I like to set my micrphone input level to 36% to avoid clipping, and I set my headphone volume to about 66%. On windows you can use control panel to fine tune, but I find that the standard settings are fine.

## Run the app
[Run in the browser](https://darkoverlordofdata.com/amp-sim/) or install the electron desktop application.

### install
* you may need to install nodejs. On windows, go to https://nodejs.org/en/download/. On linux, check for nodejs and npm in your package manager.
* you may need to install install git. On windows, go to https://git-scm.com/download/win. On linux, check for git in your package manager.

At the command line, enter 

```
git clone https://github.com/darkoverlordofdata/amp-sim.git
cd amp-sim
npm install
npm start
```

## Turn on the amp

On the top right, click the Power switch to turn on the amp. The status light on the left side will turn to green.

On the left there is a volume control set to 50%. Change it to what you find comfortable.

Thats it for controls so far. The blank area between the power switch and status light is planned be a visualization of an oscilliscope. There will also be controls for each effect, but that is still being envisioned while I experiment with tuna.js

Internally, it is using:

* Overdrive (disabled)
* Delay (disabled)
* Tremolo (disabled)
* MoogFilter (disabled)
* WahWah (disabled)
* Filter (disabled)
* Cabinet (enabled)
* Compressor (enabled)
* Phaser (enabled)
* Chorus (enabled)
* Gain (enabled)

## issues in Linux
This is written using the Web Audio API, so it's supposed to be cross platform. But practically speaking, the external microphone pickup sounds like crap in many Linux distro's. So far, deepin and rebornos are the only distros I've found usable.


