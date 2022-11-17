const findForm = document.querySelector(".findForm")
const findInput = document.querySelector(".findInput")
const addForm = document.querySelector(".addForm")
const ul = document.querySelector(".mainList")


const showMatchedItems = searchedValue => {
    Array.from(ul.children)
    // Retorna só as LIs que NÃO (!) contém o valor digitado pelo usuário
    .filter(li => !li.textContent.toLowerCase().includes(searchedValue))
    .forEach(li => li.classList.add("hidden"))
}

const hideNotMatchedItems = searchedValue => {
    Array.from(ul.children)
    // Retorna só as LIs que CONTÉM o valor digitado pelo usuário
    .filter(li => li.textContent.toLowerCase().includes(searchedValue))
    .forEach(li => li.classList.remove("hidden"))
}

const SearchItemsInTodoList = e => {
    const searchedValue = e.target.value.toLowerCase().trim()
    
    showMatchedItems(searchedValue)
    hideNotMatchedItems(searchedValue)
}

const addItemInTodoList = e => {
    e.preventDefault()

    // const inputValue = e.target.addForm.input.value.trim() --> pega o valor do input do form (ADDFORM)
    const inputValue = e.target.addInputName.value.trim()
    if (inputValue.length) { // se tiver algo no input add, senao, nao faz nada
        ul.innerHTML += `
        <li data-todo="${inputValue}">${inputValue}
            <img data-trash="${inputValue}" src="./trash.svg"></img>
        </li>`
    }

    e.target.reset()
}

const removeItemFromTodoList = e => {
    const clickedItem = e.target
    const trashDataValue = clickedItem.dataset.trash // roger
    const todo = document.querySelector(`[data-todo="${trashDataValue}"]`) // roger
   
    if (trashDataValue) { // roger
        todo.remove() // roger
    }
}

findForm.addEventListener("submit", e => e.preventDefault())

// Faz busca no TODO list (a busca é realidade em tempo real ao digitar)
findInput.addEventListener("input", SearchItemsInTodoList)

// Add LIs no TODO list (pega valor do text input via formulário + botão)
addForm.addEventListener("submit", addItemInTodoList)

// Deleta LIs do TODO list (remove LIs da UL)
ul.addEventListener("click", removeItemFromTodoList)
