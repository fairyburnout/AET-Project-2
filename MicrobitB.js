/**Author: Emily Weller
 * Microbit B
 */

/**Initializing setup:
 * set radio group to 201
 * initialize servo angle to 90
 */

radio.setGroup(201)
servos.P0.setAngle(90)

/**forever function waits for a read from pin 0 to send a signal to microbit a*/
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        radio.sendNumber(0)
    }
})

/**basically
 * if an alligator clip is connected to pin 0
 * then the microbit will send a signal
 */