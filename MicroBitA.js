/**
 * Author: Em Dryer
 * MicroBit A
 */

/**  Initializing setup: 
 *      set radio group to 200 
 *      Initialize servo angle to 0 
 *      Show checkmark icon on LEDs
 * */ 
 radio.setGroup(200)
 servos.P0.setAngle(0)
 basic.showIcon(IconNames.Yes)

/** Function is looking out for strings via radio signals from Microbit B
 *      If "wolf" is recieved, set servo to 180 degrees (upset!)
 *      If "grandma" is recieved, set servo to 0 degrees (happy!)
 */ 
 radio.onReceivedString(function (receivedString) {
    if (receivedString == "wolf") {
        servos.P0.setAngle(180)
    }
    if (receivedString == "grandma") {
        servos.P0.setAngle(0)
    }
})


/** Forever function is connected to buttons and circuitry
 *      If button A is pressed OR digital read on pin 1 = 0, 
 *          send string "far" and happy LEDs
 *      If button B is pressed OR digital read on  pin 1 = 1,
 *          send string "close" and suprised LEDs
 */
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || pins.digitalReadPin(DigitalPin.P1) == 0) {
        radio.sendString("far")
        basic.showIcon(IconNames.Happy)
    }
    if (input.buttonIsPressed(Button.B) || pins.digitalReadPin(DigitalPin.P1) == 1) {
        radio.sendString("close")
        basic.showIcon(IconNames.Surprised)
    }
})

 