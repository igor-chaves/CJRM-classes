const open = document.querySelector("#open")
const modal_container = document.querySelector("#modal-container")
const close = document.querySelector("#close")

open.addEventListener("click", () => {
    modal_container.classList.add("show")
})

close.addEventListener("click", () => {
    modal_container.classList.remove("show")
})
