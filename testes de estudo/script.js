const btn = document.querySelector("button")
const divA = document.querySelector(".a")
const divB = document.querySelector(".b")
const divC = document.querySelector(".c")
const divD = document.querySelector(".d")

const answers = ["YES", "NO"]

btn.addEventListener("click", () => {
  const input1 = document.querySelector('input[name="yes-no1"]:checked')
  const input2 = document.querySelector('input[name="yes-no2"]:checked')

  if (input1.value === "YES") {
    divA.style.background = "green"
    divB.style.background = "none"
  } else {
    divA.style.background = "none"
    divB.style.background = "red"
  }

  if (input2.value === "NO") {
    divD.style.background = "green"
    divC.style.background = "none"
  } else {
    divD.style.background = "none"
    divC.style.background = "red"
  }
})
