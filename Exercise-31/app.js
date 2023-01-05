// HTTP REQUEST
// const request = new XMLHttpRequest()

// request.addEventListener("readstatechange", () => {
//     const requestOk = request.readyState === 4 && request.status === 200
//     const requestNotOk = request.readyState === 4

//     if(requestOk) {console.log(request.responseText); return}
//     if(requestNotOk) {console.log("Erro!!!")}
// })

// request.open("get", "https://jsonplaceholder.typicode.com/todos")
// request.send()



// PROMISE
const myPromise = () => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener("readystatechange", () => {
        const requestOk = request.readyState === 4 && request.status === 200
        const requestNotOk = request.readyState === 4
    
        if(requestOk) resolve(request.responseText)
        if(requestNotOk) reject("Erro!!!")
    })
    
    request.open("get", "https://jsonplaceholder.typicode.com/todos")
    request.send()
})

// myPromise()
//     .then(value => console.log(value))
//     .catch(value => console.log(value))


/* 01
    - Usando promises, faça um request para este endpoint: https://jsonplaceholder.typicode.com/users
    - Se o request estiver ok, exiba os objetos no console;
    - Se o request não estiver ok, exiba no console "Não foi possível obter os dados dos usuários."
*/

const getUsers = url => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener("readystatechange", () => {
        const reqOk = request.readyState === 4 && request.status === 200
        const reqNotOk = request.readyState === 4

        if(reqOk) resolve(JSON.parse(request.responseText))
        if(reqNotOk) reject("Não foi possível obter os dados dos usuários.")
    })

    request.open("get", url)
    request.send()
})

getUsers("https://jsonplaceholder.typicode.com/users")
    .then(console.log)
    .catch(console.log)
