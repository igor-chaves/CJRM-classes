const form = document.querySelector("form")
const div = document.querySelector("div")
const APIKey = "EbQJ4Iy764uvo9YMBCjX8bPwxlyAsmoj"


const fetchGif = async input => {
    const fetchURL = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q=${input}`)
    const responseURL = await fetchURL.json()

    getURL(responseURL)
}

const getURL = responseURL => {
    const url = responseURL.data[0].images.downsized.url
    const title = responseURL.data[0].title

    generateGifImage(url, title)
}

const generateGifImage = (url, title) => {
    const img = document.createElement("img")

    img.setAttribute("src", url)
    img.setAttribute("title", title)
    div.insertAdjacentElement("afterbegin", img)
}

form.addEventListener("submit", event => {
    event.preventDefault()
    
    const inputValue = event.target.search.value
    fetchGif(inputValue)
    event.target.reset()
})
