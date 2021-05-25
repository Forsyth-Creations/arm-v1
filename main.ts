function ramp () {
	
}
function r2 (x: number, y: number) {
	
}
function runArm (num: number, num2: number, num3: number, num4: number, num5: number) {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, Math.map(num, 0, 270, 0, 180), 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, Math.map(num2, 0, 270, 0, 180), 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, Math.map(num3, 0, 270, 0, 180), 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, Math.map(num4, 0, 270, 0, 180), 64)
    makerbit.runMotor(MakerBitMotor.B, num5)
    basic.pause(2000)
}
// Named function
function add (x: number, y: number) {
    return x + y
}
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
	
})
