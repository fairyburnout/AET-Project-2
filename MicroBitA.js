/**
 * Author: Em Dryer
 * MicroBit A
 */

// set radio group to 200 (number subject to change)
 radio.setGroup(200)

 // function runs forever looking for a digital read on P0
 basic.forever(function () {
     if (pins.digitalReadPin(DigitalPin.P0) == 1) {
         // if digital read is detected, send string "turn" to MicroBit B
         radio.sendString("turn")
     }
 })
 