const ul = document.querySelector(".mainList")
const mainForm = document.querySelector(".mainForm")
const btn = document.querySelector("button")
const input = document.querySelector(".inputMainForm")
const deleteIcon = document.querySelector(".deleteIcon")


// pega valor do text input pelo formulario (ENTER)
mainForm.addEventListener("submit", e => {
    e.preventDefault()

    const inputValue = e.target.firstInput.value.trim()
    ul.innerHTML += `
    <li>${inputValue}
        <img class="deleteIcon" src="./trash.svg"></img>
    </li>`

    e.target.reset()
})


// pega valor do text input pelo botao
btn.addEventListener("click", e => {
    e.preventDefault()
    
    ul.innerHTML += `
    <li>${input.value}
        <img class="deleteIcon" src="./trash.svg"></img>
    </li>`

    mainForm.reset()
})


// deleta LIs da UL
ul.addEventListener("click", e => {
    // e.target.remove()
    if (Array.from(e.target.classList).includes("deleteIcon")) {
        e.target.parentElement.remove()
    }
})
