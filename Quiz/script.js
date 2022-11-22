const quizAnswers = ["A", "A", "B"]
const formQuiz = document.querySelector(".container-quiz")
const scoreDiv = document.querySelector(".container-score")
const checkBtn = document.querySelector(".checkBtn")

let score = 0

const getUserAnswers = () => {
    return userAnswers = [
        formQuiz.question1.value,
        formQuiz.question2.value,
        formQuiz.question3.value,
    ]
}

const setScore = () => {
    quizAnswers.forEach((answer, i) => {
        const answersMatches = answer === userAnswers[i]

        if (answersMatches) {
            console.log("acertou a questao", i+1)
            return score += 33
        }
    })
}

const showScore = () => {
    scoreDiv.textContent = score
    scoreDiv.style.display = "flex"

    setTimeout(() => scoreDiv.style.display = "none", 3000)
}

const resetFormAndScore = () => {
    formQuiz.reset()
    return score = 0
}

const checkAnswers = () => {
    const checkEmptyAnswer = userAnswers.some(answer => answer === "")

    if (checkEmptyAnswer) alert("You must select all answers!!")
    else {
        setScore(score)
        showScore()
        resetFormAndScore()
    }
    resetFormAndScore()
}

const getAnswers = e => {
    e.preventDefault()

    getUserAnswers()
    checkAnswers()
}

checkBtn.addEventListener("click", getAnswers)
