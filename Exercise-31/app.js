

// const getUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     return await response.json()
// }
// const logUsers = async () => {
//     const users = await getUsers()
//     console.log(users)
// }

// console.log(1)
// console.log(2)
// logUsers()
// console.log(3)
// console.log(4)




fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log("RESPONSE:", response)
        return response.json()
    })
    .then(users => console.log(users))
    .catch(error => console.log("ERROR:", error)) // só executa quando dá erro de conexão na rede

    // fetch => buscar



// promise é um objeto com o resultado (+/-) de uma operacao assincrona
// deve receber 2 argumentos (resolve, reject). O resolve tem um return implicito
// tem 3 estados: pending, fulfilled, rejected
// pending -> a operação ainda não foi concluída
// fulfilledo -> operação concluída com sucesso
// rejected -> a operação falhou

// promises possuem o método .then() que acessa a resposta de sucesso da promise
// promises possuem o método .catch() que acessa a resposta de falha da promise
