let continuity = 0
input.onButtonPressed(Button.A, function () {
    continuity = pins.digitalReadPin(DigitalPin.P0)
    if (continuity == 0) {
        basic.showIcon(IconNames.Cow)
    } else {
        basic.showIcon(IconNames.No)
    }
})
