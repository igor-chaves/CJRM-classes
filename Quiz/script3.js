const quizAnswers = ["A", "A", "B"]
const formQuiz = document.querySelector(".container-quiz")
const scoreDiv = document.querySelector(".container-score")
const checkBtn = document.querySelector(".container-checkBtn")


checkBtn.addEventListener("click", e => {
    e.preventDefault()

    const userAnswers = [
        formQuiz.question1.value,
        formQuiz.question2.value,
        formQuiz.question3.value,
    ]

    formQuiz.reset()

    let score = 0
    quizAnswers.forEach((answer, i) => {
        if (answer === userAnswers[i]) {
            console.log("acertou a questao", i+1)
            score += 33
        }
    })
    console.log("Seu score:", score)
    
    scoreDiv.textContent = score
    scoreDiv.style.display = "flex"
})
