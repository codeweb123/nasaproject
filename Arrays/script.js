//forEach loops over entire array and cannot break out of it.


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

//Looping over each element in array using For Of
for (const movement of movements) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`)
    } else {
        console.log(`YOu withdrew ${Math.abs(movement)}`)
    }
}

//Looping over each element in array using the index
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`)
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
    }
}


//Looping over using forEach uses a CALLBACK function and you pass in the arguments.
movements.forEach(function(movement) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`)
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`)
    }
})


// forEach can be used with index and array as well.
movements.forEach(function(movement, i, array) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`)
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
    }
})

//Created my Own!!!

const animals = ['whale', 'horse', 'turtle', 'lizard']

animals.forEach(function(el) {
	if(el === 'whale' || el === 'horse') {
        console.log(`Hi, I'm a mammal called a ${el}.`)
    } else {
        console.log(`Hi, I'm a reptile called a ${el}.`)
    }
  }
)



