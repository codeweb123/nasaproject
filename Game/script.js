'use strict'

//select elements
const player0El = document.querySelector
const score0 = document.querySelector('#score-0') // # is selector for id
const score1 = document.getElementById('score-1') 
const current0El = document.getElementById('current-0')
const current1El = document.getElementById('current-1')
// also can use .getElementById to select by id 
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn-new')
const btnRoll = document.querySelector('.btn-roll')
const btnHold = document.querySelector('.btn-hold')

//starting conditions of the game
score0.textContent = 0
score1.textContent = 0
diceEl.classList.add('hidden')

const scores = [0,0] //p;ayer 1 and player 2 start at 0
let currentScore = 0
let activePlayer = 0

//rolling dice functionality
btnRoll.addEventListener('click', function() {
    const dice = Math.trunc(Math.random() * 6) + 1
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`  
//if player 0 rolls a 1, switch to player 2 and reset the game to 0.
    if(dice !== 1) {
        currentScore += dice
        document.getElementById(`current-${activePlayer}`).textContent = currentScore
    } else {
        document.getElementById(`current-${activePlayer}`).textContent = 0
        activePlayer = activePlayer === 0 ? 1 : 0
        currentScore = 0
    }
})




