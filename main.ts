LSM6DSO.power(LSM6DSO.POWER_ONOFF.ON)
basic.forever(function () {
    serial.writeNumbers(LSM6DSO.get())
    basic.pause(100)
})
