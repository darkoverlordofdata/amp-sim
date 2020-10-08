# amp-sim

inspired by https://pedals.io

Amplifier Simulator using wad.js.

## issues in Linux
Ostensibly, this is cross platform. Practically speaking, it works like crap in Linux (pedals.io has the same issue). This is because the microphone is not handled well in Linux. The only exception I found was deepin, which works great. I believe this is at least partly because deepin has seperate instrumentation for internal and external microphone, as windows does.

    distro          yes     no
    ======          ===     ==
    deepin          x
    rebornos        x
    popos                   x
    kubuntu                 x
    elementaryos            x

    