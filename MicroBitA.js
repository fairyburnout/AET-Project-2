/**
 * Author: Em Dryer
 * MicroBit A
 */

// sets radio group (to be used later)
 radio.setGroup(200)

 // initializes servo to 0 degrees
 servos.P0.setAngle(0)

 basic.forever(function () {
     // if button A is pressed or a digital read is recieved on P0, set angle to 180 degrees
    if (pins.digitalReadPin(DigitalPin.P0) == 1 || input.buttonIsPressed(Button.A)) {
         servos.P0.setAngle(180)
     }
     // if button B is pushed, reset to 0 degrees
     if (input.buttonIsPressed(Button.B)) {
         servos.P0.setAngle(0)
     }
 })
 
 