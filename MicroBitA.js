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

/** 
 * Forever function is always looking out for a digital read on P1 or if A button is pressed.
 *  if this happens, it will sitch the servo angle to 180 and switch LEDs to a happy face
 *  Alternatively, if B button is pressed or the digital read = 1, angle will switch back to 0 degrees 
 */
 basic.forever(function () {
     if (pins.digitalReadPin(DigitalPin.P1) == 0 || input.buttonIsPressed(Button.A)) {
         servos.P0.setAngle(180)
         basic.showIcon(IconNames.Happy)
     }
     if (input.buttonIsPressed(Button.B) || pins.digitalReadPin(DigitalPin.P1) == 1) {
         servos.P0.setAngle(0)
         basic.showIcon(IconNames.Surprised)
     }
 })
 
 