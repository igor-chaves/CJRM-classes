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



// colocando uma funcao de callback na getTodos

const getTodos = callback => {
    const request = new XMLHttpRequest()

    request.addEventListener("readystatechange", () => {
        const requestOk = request.readyState === 4 && request.status === 200
        const requestNotOk = request.readyState === 4
        
        if (requestOk) {callback(null, request.responseText); return} // (ERROR = null pq nao precisa, DATA)
        if (requestNotOk) callback("Não foi possível obter os dados da API", null) // (mensagem, DATA = null pq nao precisa)
    })
    
    request.open("get", "https://jsonplaceholder.typicode.com/todos")
    request.send()
}

console.log(1)
console.log(2)

getTodos((error, data) => {
    if (error) {console.log(error); return}
    console.log(data)
})

console.log(3)
console.log(4)
