'use strict'

//select elements
const player0El = document.querySelector('.player-0')
const player1El = document.querySelector('.player-1')
const score0 = document.querySelector('#score-0') // # is selector for id
const score1 = document.getElementById('score-1') 
const current0El = document.getElementById('current-0')
const current1El = document.getElementById('current-1')
// also can use .getElementById to select by id 
const cardEl = document.querySelector('.card')
const btnNew = document.querySelector('.btn-new')
const btnShuffle = document.querySelector('.btn-shuffle')
const btnHold = document.querySelector('.btn-hold')

let scores, currentScore, activePlayer, playing

//starting conditions of the game
const init = function () {
scores = [0,0]
currentScore = 0
activePlayer = 0
playing = true

score0.textContent = 0
score1.textContent = 0
current0El.textContent = 0
current1El.textContent = 0

cardEl.classList.add('hidden')
player0El.classList.remove('player-winner')
player1El.classList.remove('player-winner')
player0El.classList.add('player-active')
player1El.classList.remove('player-active')
}
init()

const switchPlayer = function () {
    document.getElementById(`current-${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle('player-active')
    player1El.classList.toggle('player-active')
}

//shuffle card functionality
btnShuffle.addEventListener('click', function() {
    if (playing) {
        
    const card = Math.trunc(Math.random() * 9) + 1
    
    cardEl.classList.remove('hidden')
    cardEl.src = `card-${card}.png`  
//if player 0 rolls a 1, switch to player 2 and reset the game to 0.
    if(card !== 1) {
        currentScore += card
        document.getElementById(`current-${activePlayer}`).textContent = currentScore
    } else {
        switchPlayer()
        }
    }
})

btnHold.addEventListener('click', function() {
    if (playing) {
        scores[activePlayer] += currentScore
        
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer]

        if (scores[activePlayer] >= 100) {
            playing = false
            cardEl.classList.add('hidden')

        document.querySelector(`.player-${activePlayer}`).classList.add('player-winner')
        document.querySelector(`.player-${activePlayer}`).classList.remove('player-active')
        
        } else {
        switchPlayer()
        }
    }
})

btnNew.addEventListener('click', init)


