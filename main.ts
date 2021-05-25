// Refer to the DESMOS graph, here:
// https://www.desmos.com/calculator/bt7rxexus6
// 
// For Simplicity:
// A is X scaling
// B is Y scaling
// C is y
function ramp (firstPosition: number, secondPosition: number, timeToRamp: number, elapsedTime: number) {
    A = timeToRamp
    B = Math.abs(firstPosition - secondPosition)
    C = firstPosition
    X = elapsedTime
    Y = ((3*B*Math.pow((X/A), 3)) - (2*B*Math.pow((X/A), 3)) + C)
}
function runArm (num: number, num2: number, num3: number, num4: number, num5: number) {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, Math.map(num, 0, 270, 0, 180), 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, Math.map(num2, 0, 270, 0, 180), 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, Math.map(num3, 0, 270, 0, 180), 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, Math.map(num4, 0, 270, 0, 180), 64)
    makerbit.runMotor(MakerBitMotor.B, num5)
    basic.pause(2000)
}
let C = 0
let B = 0
let A = 0
let Y = 0
let X = 0
makerbit.stopMotor(MakerBitMotor.B)
basic.pause(1000)
led.enable(false)
makerbit.setLedPins(makerbit.level(PinLevel.Low))
let ServoA = [92, 92, 92, 92, 92, 92]
let ServoB = [0, 60, 60, 100, 100]
let ServoC = [0, 0, 30, 50, 50]
let ServoD = [0, 0, 0, 35, 35]
let Hand = [100, 100, 0, 0, 100]
basic.forever(function () {
    serial.writeString("")
    basic.pause(1000)
})
