/* 01 e 02
  - Insira apenas o css do bootstrap no index.html.

  - Após um segundo e meio do carregamento da página, exiba no console a  
    mensagem "Um segundo e meio se passaram desde que a página foi carregada".
*/
setTimeout(() => console.log("Um segundo e meio se passaram desde que a página foi carregada"), 3000)





/* 03
  - Faça o contador do index.html funcionar;
  - O clique no botão "Parar contador" deve fazer com que o contador exiba 0.
*/
const counterNumber = document.querySelector(".counter-container")
const btnStartCounter = document.querySelector(".button-init-counter")
const btnStopCounter = document.querySelector(".button-stop-counter")

let timer = null

btnStartCounter.addEventListener("click", () => {
    timer = setInterval(() => {
        counterNumber.textContent++
    }, 1000)
})

btnStopCounter.addEventListener("click", () => {
    clearInterval(timer)
    counterNumber.textContent = 0
})
