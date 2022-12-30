const me = {
    name: "Igor",
    age: 0,
    gender: "male",
    isWalking: false,
    metersWalked: 108,
}
me.addAge = () => me.age++
me.addAge()
console.log(me)



me.showString = () => {
    const oA = me.gender === "male" ? "o" : "a"

    const singPlural = (value, word) => value > 1 ? `${word}s` : word
    return `Oi. Eu sou ${oA} ${me.name}, tenho ${me.age} ${singPlural(me.age, "ano")} e já caminhei ${me.metersWalked} ${singPlural(me.metersWalked, "metro")}.`
}
console.log(me.showString())

/* 06
  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/
const truthyOrFalsy = value => {
    const falsy = [false, null, undefined, NaN, 0, -0, 0n, ""]
    return falsy.includes(value) ? "falsy" : "truthy"
}
// console.log(truthyOrFalsy(0n))


/* 07
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

const func = (pagesNum, writtenBy, publishedBy) => {return {pagesNum, writtenBy, publishedBy}}
// console.log(func(19, "haha", "hhi"))
