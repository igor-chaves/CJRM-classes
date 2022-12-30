/* 01
  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/

const request = new XMLHttpRequest()

request.addEventListener("readystatechange", () => {
  const RequestOk = request.readyState === 4 && request.status === 200
  const RequestNotOk = request.readyState === 4

  if (RequestOk) {console.log(request, request.responseText); return}
  if (RequestNotOk) console.log("Não foi possível obter os dados do pokémon")
})

request.open("get", "https://pokeapi.co/api/v2/pokemon/pikachu")
// request.send()





/* 02
  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

let person = {
    name: "Igor",
    surnames: "Chaves Donegá",
    gender: "male",
    age: 33,
    height: 1.74,
    weight: 60,
    isWalking: false,
    walkedDistance: 0
}
console.log(person)





/* 03
  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/

person.sumAge = (x) => {for (let i = 0; i < x; i++) person.age++}
person.sumAge(5)
// const addAge = (add) => person.age += add
// console.log(addAge(3))





/* 04
  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/

person.sumDistance = dist => {
    person.walkedDistance += dist
    person.isWalking = true
}

const meters = [5, 6, 4, 7]
meters.forEach(dist => person.sumDistance(dist))
console.log(person.walkedDistance, person.isWalking)





/* 05
  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
  metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/

person.addMsg = () => {
    const { name, surnames, gender, age, height, weight, walkedDistance } = person

    const singPlural = (condition, singular, plural) => condition <= 1 ? singular : plural
    
    const oA = gender === "male" ? "o" : "a"
    const ageSingPlural = singPlural(age, "ano", "anos")
    const walkedMeterSingPlural = singPlural(walkedDistance, "metro", "metros")
    const heightMeterSingPlural = singPlural(Math.trunc(height), "metro", "metros")

    return `Oi. Eu sou ${oA} ${name} ${surnames}, tenho ${age} ${ageSingPlural
    }, ${height} ${heightMeterSingPlural} de altura, peso ${
        weight} quilos e, só hoje, eu já caminhei ${walkedDistance} ${walkedMeterSingPlural}.`
}
console.log(person.addMsg())





/* 06
  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/

const randomValues = [true, "0", 0, () => {}, [], {}, -1]
const logBooleanValues = value => console.log(value, "-->", Boolean(value))
randomValues.forEach(logBooleanValues)
// valores falsy são 8 no total: false, null, undefined, NaN, 0, -0, 0n, ""





/*
  07

  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/

const getBook = bookName => {
    const books = {
      "Jurassik Park": {
        pages: 20,
        author: "JP",
        publisher: "amazon"
      },
      "Pinoquio": {
        pages: 120,
        author: "PQ",
        publisher: "gonzo"
      },
      "Little Rabbit": {
        pages: 53,
        author: "LR",
        publisher: "mapa"
      }
    }

    // ternario com 2 argumentos apenas.
    // se TRUE retorna o próprio "book[bookName]" se FALSE retorna o próprio "books"
    // se TRUE executa o primeiro, se FALSE executa o segundo
    return books[bookName] || books
}

console.log(getBook("Pinosdquio"))
