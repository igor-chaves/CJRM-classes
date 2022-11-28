const smallBox1 = document.querySelector(".box1")
const smallBox2 = document.querySelector(".box2")
const smallBox3 = document.querySelector(".box3")
const smallBox4 = document.querySelector(".box4")


smallBox1.addEventListener("mouseover", e => {
    smallBox1.style.background = "rgb(42,100,195)"
    smallBox1.addEventListener("mouseout", e => smallBox1.style.background = "")
})

smallBox2.addEventListener("mouseover", e => {
    smallBox2.style.background = "rgb(220,168,57)"
    smallBox2.addEventListener("mouseout", e => smallBox2.style.background = "")
})

smallBox3.addEventListener("mouseover", e => {
    smallBox3.style.background = "rgb(215,80,220)"
    smallBox3.addEventListener("mouseout", e => smallBox3.style.background = "")
})

smallBox4.addEventListener("mouseover", e => {
    smallBox4.style.background = "rgb(205,77,35)"
    smallBox4.addEventListener("mouseout", e => smallBox4.style.background = "")
})

