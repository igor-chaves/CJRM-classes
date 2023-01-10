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
const GIFsContainer = document.querySelector("div")

const APIKey = "EbQJ4Iy764uvo9YMBCjX8bPwxlyAsmoj"

const getGIFUrl = GIFName => `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q=${GIFName}`

const generateGIFImage = (downsizedGifUrl, downsizedGifTitle) => {
    const img = document.createElement("img")

    img.setAttribute("src", downsizedGifUrl)
    img.setAttribute("alt", downsizedGifTitle)
    
    return img
}

const fetchGIF = async inputValue => {
    try {
        const GIFUrl = getGIFUrl(inputValue)
        const response = await fetch(GIFUrl)
    
        if (!response.ok) {
            throw new Error("Não foi possível obter os dados!")
        }
        return response    
    } catch (error) {
        alert(`Erro: ${error.message}`)
    }
}

const insertGIFIntoDOM = async inputValue => {
    const GIFData = await fetchGIF(inputValue)

    if (GIFData) {
        const downsizedGifUrl = GIFData.data[0].images.downsized.url
        const downsizedGifTitle = GIFData.data[0].title
        const img = generateGIFImage(downsizedGifUrl, downsizedGifTitle)
        
        GIFsContainer.insertAdjacentElement("afterbegin", img)
    
        form.reset()
    }
}
    
form.addEventListener("submit", e => {
    e.preventDefault()

    const inputValue = e.target.search.value

    insertGIFIntoDOM(inputValue)
})
