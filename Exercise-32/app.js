/*
    Neste exercício, vamos praticar um pouco do que vimos até aqui, através da 
    API do GIPHY, que é um website de GIFs (https://giphy.com/).
    
    - Seu desafio é implementar uma funcionalidade de busca dos GIFs. Quando o 
    　　usuário digitar o termo de busca no input e pressionar enter, um GIF deve 
    ser exibido na tela. Como neste exemplo: https://youtu.be/RHe-uCJGCeA
    - Observe que o GIF mais recente é inserido acima dos GIFs anteriores;
    - https://api.giphy.com/v1/gifs/search?api_key=EbQJ4Iy764uvo9YMBCjX8bPwxlyAsmoj&limit=1&q=[VALOR_INSERIDO_NO_INPUT]
    - Se quiser testar outras possibilidades, os endpoints da API estão 
    　　listados na documentação: https://developers.giphy.com/docs/api/endpoint#search
    - Ignore os avisos no console. Para limpá-lo, pressione "ctrl + L".
*/

const form = document.querySelector("form")

form.addEventListener("submit", e => {
    e.preventDefault()

    let inputValue = e.target.search.value

})

const url = async (inputValue) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=EbQJ4Iy764uvo9YMBCjX8bPwxlyAsmoj&limit=1&q=${inputValue}`)
    return await response.json()
}

console.log(url())
