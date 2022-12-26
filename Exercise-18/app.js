/* 01
  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter:
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/

/* 02
  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

const form = document.querySelector("form")
const btn = document.querySelector(".button")
const input = document.querySelector("#username")

const paragraphInputMsg = document.createElement("p")
const paragraphSubmitMsg = document.createElement("p")

paragraphSubmitMsg.setAttribute("data-feedback", "submit-feedback")

const insertParagraphIntoDOM = paragraphInfo => {
    const { paragraph, text, className, previousSibling } = paragraphInfo
    paragraph.textContent = text
    paragraph.setAttribute("class", className)
    previousSibling.insertAdjacentElement("afterend", paragraph)
}

const validInputInfo = {
    paragraph: paragraphInputMsg,
    text: "Username válido =)",
    className: "submit-success-feedback",
    previousSibling: input
}

const invalidInputInfo = {
    paragraph: paragraphInputMsg,
    text: "O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas",
    className: "input-help-feedback",
    previousSibling: input
}

const validSubmitInfo = {
    paragraph: paragraphSubmitMsg,
    text: "Dados enviados =)",
    className: "submit-success-feedback",
    previousSibling: btn
}

const invalidSubmitInfo = {
    paragraph: paragraphSubmitMsg,
    text: "Por favor, insira um username válido",
    className: "submit-help-feedback",
    previousSibling: btn
}

const removeSubmitParagraph = () => {
    const paragraphSubmitMsgExists = document.querySelector("[data-feedback='submit-feedback']")
    if (paragraphSubmitMsgExists) paragraphSubmitMsg.remove()
}

const verifyInput = inputValue => /^[a-zA-Z]{6,}$/.test(inputValue)

const showInputInfo = e => {
    removeSubmitParagraph()

    const isInputValid = verifyInput(input.value)
    if (!isInputValid) {insertParagraphIntoDOM(invalidInputInfo); return}
    insertParagraphIntoDOM(validInputInfo)
}

const showSubmitInfo = e => {
    e.preventDefault()

    const isInputValid = verifyInput(input.value)
    if (isInputValid) {insertParagraphIntoDOM(validSubmitInfo); return}
    insertParagraphIntoDOM(invalidSubmitInfo)
}

input.addEventListener("input", showInputInfo)
form.addEventListener("submit", showSubmitInfo)

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
*/

const some = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) return true
    }
    return false
}

console.log(some([1, 2, 3], item => item === 2))
console.log(some([4, 5, 6], item => item === 3))
