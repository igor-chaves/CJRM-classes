fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log("RESPONSE:", response)
        return response.json()
    })
    .then(users => console.log(users))
    .catch(error => console.log("ERROR:", error)) // só executa quando dá erro de conexão na rede
