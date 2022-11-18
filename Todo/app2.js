const findForm = document.querySelector(".findForm")
const findBtn = document.querySelector(".findButton")
const findInput = document.querySelector(".findInput")
const ul = document.querySelector(".mainList")
const addForm = document.querySelector(".addForm")
const modal = document.querySelector(".modalContainer")
const yesBtnModal = document.querySelector("#yesBtnModal")
const noBtnModal = document.querySelector("#noBtnModal")


// Faz busca no TODO list (via formulário + botão)
findForm.addEventListener("submit", e => {
    e.preventDefault()

    const searchedValue = e.target.findInputName.value.trim()

    Array.from(ul.children)
        // Retorna só as LIs que NÃO (!) contém o valor digitado pelo usuário
        .filter(li => !li.textContent.toLowerCase().includes(searchedValue))
        .forEach(li => {
            li.classList.add("hidden")
        })
    
    Array.from(ul.children)
        // Retorna só as LIs que CONTÉM o valor digitado pelo usuário
        .filter(li => li.textContent.toLowerCase().includes(searchedValue))
        .forEach(li => {
            li.classList.remove("hidden")
        })

    e.target.reset()
})

// Faz busca no TODO list (a busca é realidade em tempo real ao digitar)
findInput.addEventListener("input", e => {
    const searchedValue = e.target.value.toLowerCase().trim()

    Array.from(ul.children)
        // Retorna só as LIs que NÃO (!) contém o valor digitado pelo usuário
        .filter(li => !li.textContent.toLowerCase().includes(searchedValue))
        .forEach(li => {
            li.classList.add("hidden")
        })
    
    Array.from(ul.children)
        // Retorna só as LIs que CONTÉM o valor digitado pelo usuário
        .filter(li => li.textContent.toLowerCase().includes(searchedValue))
        .forEach(li => {
            li.classList.remove("hidden")
        })
})

// Add LIs no TODO list (pega valor do text input via formulário + botão)
addForm.addEventListener("submit", e => {
    e.preventDefault()

    // const inputValue = e.target.addForm.input.value.trim() --> pega o valor do input do form (ADDFORM)
    const inputValue = e.target.addInputName.value.trim()
    if (inputValue.length) { // se tiver algo no input add, senao, nao faz nada
        ul.innerHTML += `
        <li>${inputValue}
            <img class="deleteIcon" src="./trash.svg"></img>
        </li>`
    }

    e.target.reset()
})

// Deleta LIs do TODO list (remove LIs da UL)
// ul.addEventListener("click", e => {
//     if (Array.from(e.target.classList).includes("deleteIcon")) {
//         e.target.parentElement.remove()
//     }
// })


ul.addEventListener("click", e => {
    if (Array.from(e.target.classList).includes("deleteIcon")) {
        // shows modal
        modal.style.display = "block"
        const ulTarget = e.target.parentElement

        // confirm button to delete element
        yesBtnModal.addEventListener("click", () => {
            ulTarget.remove()
            modal.style.display = "none"
        })
        
        noBtnModal.addEventListener("click", () => {
            modal.style.display = "none"
        })
        
        modal.addEventListener("click", () => {
            modal.style.display = "none"
        })
    }
})
