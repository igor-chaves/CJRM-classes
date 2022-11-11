const form  = document.querySelector("form")
const answers = ["YES", "NO"]
const popup = document.querySelector(".popup")

console.log(popup)
form.addEventListener("submit", e => {
  e.preventDefault()

  score = 0
  const userAnswers = [
    form.yesNo1.value,
    form.yesNo2.value
  ]

  userAnswers.forEach((item, index) => {
    if (item === answers[index]) {
      score += 50
    }
  })
  popup.style.display = "block"
  popup.textContent = `Score: ${score}`
  console.log("Score: ", score)
})
