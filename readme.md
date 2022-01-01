# amp-sim

Amplifier Simulator with wad.js and webaudio-controls.js.

## Plug in

You'll need to plug your guitar/bass as the microphone input, either using usb or line input jack. 

I have found different results when using both different hardware and sofware. Windows and Chromebook both give excellent results using USB.

### Chromebook - Lenovo Duet
Works great either usb type-a guitar cord in my dock, or analog* cable via the included usbc heahphone jack.
Allows simultanious use of you tube, etc. 

### Windows 10 - ASUS Zenbook
usb type-a works great. Analog* cable is mediocre due to no amplification. 
I could not get simultanious use of you tube, etc. 

### Linux ??? - ASUS Zenbook, Dell Inspiron
unable to get browser to use the usb input, just the Analog* cable, which is mediocre due to no amplification.

* = 1/4" trs to 1/8" ts 
the analog cable is noisy in all cases - I need a performance qualtity version, not home audio quality.


## Run the app
[Run in the browser](https://darkoverlordofdata.com/amp-sim/). Installs as a chrome app, or install the electron desktop application.

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



## implements

    volume
    reverb
    gain
    chorus
    phaser
    compressor