// const getTodos = () => {
//     const request = new XMLHttpRequest()

//     request.addEventListener("readystatechange", () => {
//         const requestOk = request.readyState === 4 && request.status === 200
//         const requestNotOk = request.readyState === 4
        
//         if (requestOk) {console.log(request, request.responseText); return}
//         if (requestNotOk) console.log("Não foi possível obter os dados da API")
//     })
    
//     request.open("get", "https://jsonplaceholder.typicode.com/todos")
//     request.send()
// }
// getTodos()


const request = new XMLHttpRequest()


if(request.readyState === 4) console.log("nao aprovado")
if(request.readyState === 4 && request.status === 200) console.log("aprovado")
request.open("get", "https://pokeapi.co/api/v2/pokemon/ditto")
request.send()

