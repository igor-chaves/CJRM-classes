const getTodos = () => {
    const request = new XMLHttpRequest()

    request.addEventListener("readystatechange", () => {
        const requestOk = request.readyState === 4 && request.status === 200
        const requestNotOk = request.readyState === 4
        
        if (requestOk) {console.log(request.responseText); return}
        if (requestNotOk) console.log("Não foi possível obter os dados da API")
    })
    
    request.open("get", "https://jsonplaceholder.typicode.com/todos")
    request.send()
}

getTodos()
