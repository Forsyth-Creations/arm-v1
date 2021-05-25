makerbit.stopMotor(MakerBitMotor.B)
basic.pause(1000)
led.enable(false)
makerbit.setLedPins(makerbit.level(PinLevel.Low))
basic.forever(function () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, Math.map(90, 0, 270, 0, 180), 64)
})
