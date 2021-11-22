/**Author: Emily Weller
 * Microbit B
 */

/**Initializing setup:
 * set radio group to 200
 * initialize servo angle to 90
 */
 radio.setGroup(200)
 servos.P0.setAngle(90)

 /**Function:
  * on receiving a radio signal with the string "far"
  * set servo angle to 90
  * on receiving a radio signal with the string "close"
  * set servo angle to 0
  */
 radio.onReceivedString(function (receivedString) {
    if (receivedString == "far") {
        servos.P0.setAngle(90)
    }
    if (receivedString == "close") {
        servos.P0.setAngle(0)
    }
})

/**Function:
 * if the circuit is incomplete and the read on digital pin P0 is 0
 * send string "grandma"
 * if the circuit is complete and the read on digital pin P0 is 1
 * send string "wolf"
 */
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        radio.sendString("grandma")
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        radio.sendString("wolf")
    }
})