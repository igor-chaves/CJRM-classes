// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         console.log("RESPONSE:", response)
//         return response.json()
//     })
//     .then(users => console.log(users))
//     .catch(error => console.log("ERROR:", error)) // só executa quando dá erro de conexão na rede


const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    return await response.json()
}
const logUsers = async () => {
    const users = await getUsers()
    console.log(users)
}

console.log(1)
console.log(2)
logUsers()
console.log(3)
console.log(4)
