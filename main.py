input.onButtonPressed(Button.A, function () {
    let continuity = pins.digitalReadPin(DigitalPin.P0)
    if (continuity == 1) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})

