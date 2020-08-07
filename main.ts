// led.stopAnimation()
input.onButtonPressed(Button.A, function () {
    step += 1
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    control.reset()
})
let step = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
let range = strip.range(0, 1)
let range1 = strip.range(1, 1)
let range2 = strip.range(2, 1)
let range3 = strip.range(3, 1)
let range4 = strip.range(4, 1)
let range5 = strip.range(5, 1)
let range6 = strip.range(6, 1)
let range7 = strip.range(7, 1)
let range8 = strip.range(8, 1)
basic.forever(function () {
    if (step < 1) {
        basic.showNumber(step)
        range.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (step == 1) {
        basic.showNumber(step)
        range1.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (step == 2) {
        basic.showNumber(step)
        range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (step == 3) {
        basic.showNumber(step)
        range3.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (step == 4) {
        basic.showNumber(step)
        range4.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (step == 5) {
        basic.showNumber(step)
        range5.showColor(neopixel.colors(NeoPixelColors.Indigo))
    } else if (step == 6) {
        basic.showNumber(step)
        range6.showColor(neopixel.colors(NeoPixelColors.Violet))
    } else if (step == 7) {
        basic.showNumber(step)
        range7.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (step == 8) {
        basic.showNumber(step)
        strip.showRainbow(1, 360)
    }
})
