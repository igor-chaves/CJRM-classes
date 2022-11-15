const formAddTodo = document.querySelector(".form-add-todo")
const todosContainer = document.querySelector(".todos-container")

formAddTodo.addEventListener("submit", e => {
    e.preventDefault()

    const inputValue = e.target.add.value.trim()

    if (inputValue) {
        todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`
    
        e.target.reset()
    }
})
