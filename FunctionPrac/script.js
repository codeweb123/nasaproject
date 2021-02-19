'use strict'

const bookings = []

const createBooking = function(flightNum, numPassengers = 1, price = 199) {
    
    const booking = {
        flightNum,
        numPassengers,
        price
    }
console.log(booking)
bookings.push(booking)
}

createBooking('LH123')

const flight = 'LH234'
const jonas = {
    name: 'Jiyon Trammell',
    passport: 26371835
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999'
}

checkIn(flight, jonas)
