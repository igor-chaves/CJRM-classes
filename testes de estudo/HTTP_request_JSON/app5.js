// ESTUDANDO HTTPREQUESTS
// const getTodos = () => {
//     const request = new XMLHttpRequest()

//     request.addEventListener("readystatechange", () => {
//         const requestOk = request.readyState === 4 && request.status === 200
//         const requestNotOk = request.readyState === 4
        
//         if (requestOk) {console.log(request.responseText); return}
//         if (requestNotOk) console.log("Não foi possível obter os dados da API")
//     })
    
//     request.open("get", "https://jsonplaceholder.typicode.com/todos")
//     request.send()
// }
// getTodos()

// ----------------------------------------------------------------------------------------------------------------------- //

// ADICIONANDO FUNCÃO DE CALLBACK NA GETTODOS
// const getTodos = callback => {
//     const request = new XMLHttpRequest()

//     request.addEventListener("readystatechange", () => {
//         const requestOk = request.readyState === 4 && request.status === 200
//         const requestNotOk = request.readyState === 4
        
//         if (requestOk) {callback(null, request.responseText); return} // (ERROR = null pq nao precisa, DATA)
//         if (requestNotOk) callback("Não foi possível obter os dados da API", null) // (mensagem, DATA = null pq nao precisa)
//     })
    
//     request.open("get", "https://jsonplaceholder.typicode.com/todos")
//     request.send()
// }

// getTodos((error, data) => {
//     if (error) {console.log(error); return}
//     console.log(data)
// })

// ----------------------------------------------------------------------------------------------------------------------- //

// ESTUDANDO JSON
const getTodos = (url, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener("readystatechange", () => {
        const requestOk = request.readyState === 4 && request.status === 200
        const requestNotOk = request.readyState === 4
        
        if (requestOk) {
            const data = JSON.parse(request.responseText)
            callback(null, data); return
        } // (ERROR = null pq nao precisa, DATA)
        if (requestNotOk) callback("Não foi possível obter os dados da API", null) // (mensagem, DATA = null pq nao precisa)
    })
    
    request.open("get", url)
    // request.open("get", "https://jsonplaceholder.typicode.com/todos")
    // request.open("get", "https://pokeapi.co/api/v2/pokemon/pikachu")
    request.send()
}

getTodos("./JSON/app5.json", (error, data) => {
    console.log(data)
    getTodos("./JSON/app5-02.json", (error, data) => {
        console.log(data)
        getTodos("./JSON/app5-03.json", (error, data) => {
            console.log(data)
        })
    })
})
