function radioSendData () {
    radio.sendValue("1", input.magneticForce(Dimension.X))
    radio.sendValue("2", input.magneticForce(Dimension.Y))
    radio.sendValue("3", input.magneticForce(Dimension.Z))
    for (let index = 0; index <= extVars.length - 1; index++) {
        radio.sendValue(convertToText(index + 4), extVars[index])
    }
}
function joinAllPars () {
    thisString = "" + input.magneticForce(Dimension.X) + "," + input.magneticForce(Dimension.Y) + "," + input.magneticForce(Dimension.Z)
    for (let value of extVars) {
        thisString = "" + thisString + "," + value
    }
    return thisString
}
let thisString = ""
let extVars: number[] = []
LSM6DSO.power(LSM6DSO.POWER_ONOFF.ON)
radio.setGroup(1)
basic.forever(function () {
    extVars = LSM6DSO.get()
    radioSendData()
    basic.pause(25)
    led.toggle(0, 0)
})
