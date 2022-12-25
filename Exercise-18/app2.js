const form = document.querySelector("#register-form")
const input = document.querySelector("#username")
const button = document.querySelector("#clear")
const pSubmit = document.createElement("p")
const pInput = document.createElement("p")

const regex = /^[a-zA-Z0-9]{4,8}$/

form.addEventListener("submit", e => {
    e.preventDefault()

    const usernameValue = input.value
    const verifyUsername = regex.test(usernameValue)

    if (verifyUsername) {
        pSubmit.textContent = "User registered"
        pSubmit.setAttribute("class", "submit-valid")
        button.insertAdjacentElement("afterend", pSubmit)
        return
    }
    pSubmit.textContent = "Please insert a valid username"
    pSubmit.setAttribute("class", "submit-invalid")
    button.insertAdjacentElement("afterend", pSubmit)
})

input.addEventListener("input", e => {
    e.preventDefault()

    const usernameValue = input.value
    const verifyUsername = regex.test(usernameValue)

    pSubmit.remove()

    if (verifyUsername) {
        pInput.textContent = "Valid username"
        pInput.setAttribute("class", "username-valid")
        input.insertAdjacentElement("afterend", pInput)
        return
    }
    pInput.textContent = "Invalid username"
    pInput.setAttribute("class", "username-invalid")
    input.insertAdjacentElement("afterend", pInput)
})

button.addEventListener("click", e => {
    e.preventDefault()
    
    input.value = ""
    pInput.remove()
    pSubmit.remove()
})
