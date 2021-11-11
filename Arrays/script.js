//Array methods- functions attached to objects.
//forEach loops over entire array and cannot break out of it.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

//Looping over each element in array using For Of
for (const movement of movements) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`)
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`)
    }
}
//

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
const children = ['madi', 'claire', 'savannah', 'macy']

children.forEach(function(el, i) {
    if(el === 'madi') {
        //console.log(`Number ${i + 1}:`  + el.charAt(0).toUpperCase() + el.slice(1))
        console.log(`Number ${i + 1}:`  + el[0].toUpperCase() + el.slice(1))
        //console.log(`Number ${i + 1}: ${el}.`)
    } else {
        console.log(`Number ${i + 1}:`  + el.charAt(0).toUpperCase() + el.slice(1))
    }
    }
)
//New Map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound streling'],
]) 

currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`)
})

//New Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique)
currenciesUnique.forEach(function(value, key, map){
    console.log(`${key}: ${value}`)
})

// reduce method
function list(names){
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
   }

   function isValidWalk(walk) {
    let dx = 0
    let dy = 0
    let dt = walk.length
  
    for (let i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy++; break
        case 's': dy--; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
  
    return dt === 10 && dx === 0 && dy === 0

//SLICE- does not change original array
let arr = ['a', 'b', 'c', 'd', 'e'];
arr.slice(2);
arr.slice(2, 4);
//SLICE right before the number position.
arr.slice(-2);
arr.slice(1, -2);

//SPLICE- mutates original array
arr.splice(2); 
//returns cut off part
//original arr is mutated!!
arr.splice(-1);
arr.splice(1, 2);
//(position, # of elements we want to delete)

//REVERSE 
let arr = ['a', 'b', 'c', 'd', 'e'];
arr.reverse()
const arr2 = ['j', 'i', 'h'];
//CONCAT
const letters = arr.concat(arr2);
([...arr], ...arr2])
//returns same array
console.log(letters.join(' - '));











