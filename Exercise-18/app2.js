const form = document.querySelector("#register-form")
const input = document.querySelector("#username")
const button = document.querySelector("#clear")
const pSubmit = document.createElement("p")
const pInput = document.createElement("p")
const regex = /^[a-zA-Z0-9]{4,8}$/

const verifyInput = () => {
    const usernameValue = input.value
    const verifyUsername = regex.test(usernameValue)
}

const showUsernameMessage = (element1, element2, text, className) => {
    element1.textContent = text
    element1.setAttribute("class", className)
    element2.insertAdjacentElement("afterend", element1)
}

const submitForm = e => {
    e.preventDefault()
    // verifyInput()
    const usernameValue = input.value
    const verifyUsername = regex.test(usernameValue)

    if (verifyUsername) {showUsernameMessage(pSubmit, button, "User registered", "submit-valid"); return}
    showUsernameMessage(pSubmit, button, "Please insert a valid username", "submit-invalid")
}

const verifyUsername = e => {
    e.preventDefault()

    const usernameValue = input.value
    const verifyUsername = regex.test(usernameValue)

    pSubmit.remove()

    if (verifyUsername) {showUsernameMessage(pInput, input, "Valid username", "username-valid"); return}
    showUsernameMessage(pInput, input, "Invalid username", "username-invalid")
}

const clearMessagesAndInput = e => {
    e.preventDefault()
    
    input.value = ""
    pInput.remove()
    pSubmit.remove()
}

form.addEventListener("submit", submitForm)
input.addEventListener("input", verifyUsername)
button.addEventListener("click", clearMessagesAndInput)
