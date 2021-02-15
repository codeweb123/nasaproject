const poll = {
        question: 'What is your favorite programming language?',
        options: ['0: Javascript', '1: Python', '2: Ruby'],
        answers: new Array(4).fill(0),

        //get answer
        registerNewAnswer() {

            const answer = Number(
                prompt(
                    `${this.question}\n${this.options.join('\n')}\n(Write option number)`
                )
            )
        console.log(answer)

        //register answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++
        console.log(this.answers)
        }
}

//poll.registerNewAnswer()

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))//.bind - point this keyword to the poll object. 
