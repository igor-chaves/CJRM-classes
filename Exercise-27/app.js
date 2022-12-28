// /* 01
//   - Implemente um código assíncrono entre os console.log() abaixo.
// */
// console.log('Linha 1')
// console.log('Linha 2')
// console.log('Linha 3')
// console.log('Linha 4')

// setTimeout(() => console.log("This is a callback function"), 2000)

// console.log('Linha 5')
// console.log('Linha 6')
// console.log('Linha 7')
// console.log('Linha 8')





// /* 02
//   - Descomente o código abaixo e crie a função que fará a string dentro da 
//     "logGreeting" ser exibida no console.
// */
// function logGreeting (name) {
//   console.log(`olá, ${name}`)
// }

// const x = (callback) => {callback("igor")}
// x(logGreeting)





// /* 03
//   - O código abaixo possui uma parte que pode ser isolada. Isole-a.
// */
// const numbers = [3, 4, 10, 20]
// const getLessThan5 = num => num < 5
// const lesserThanFive = numbers.filter(getLessThan5)
// console.log(lesserThanFive)





// /* 04
//   - Refatore o código abaixo.
// */
// const prices = [12, 19, 7, 209]
// const getTotalPrice = (acc, price) => acc + price
// let totalPrice = prices.reduce(getTotalPrice, 0)
// console.log(`Preço total: ${totalPrice}`)





// /* 05
//   - Abaixo da declaração do objeto "car", modifique a cor do carro para 'azul';
//   - Não insira `car.color = azul`.
//   - Não insira `car['color'] = azul`.
// */
// let car = { color: 'amarelo' }
// let secondCar = car
// secondCar.color = "azul"
// console.log(car.color, secondCar.color)




// /* 06
//   - Crie uma função que recebe 3 argumentos;
//   - Se um dos 3 argumentos não for passado na invocação, a string 'A função 
//     deve ser invocada com 3 argumentos' deve ser retornada;
//   - Se todos os argumentos forem passados, retorne a string 'A função foi 
//     invocada com 3 argumentos'.
// */
// const myFunc = (n1, n2, n3) => {
//     const isAnyUndefined = [n1, n2, n3].includes(undefined)
//     return isAnyUndefined
//         ? "A função deve ser invocada com 3 argumentos"
//         : "A função foi invocada com 3 argumentos"
// }
// console.log(myFunc(2, {}, []))





/* 07
  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa. 
      Esse número não precisa encher a caixa de uma só vez, os livros podem 
      ser acrescentados aos poucos;
    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o 
      método deve retornar a frase: "A caixa já está cheia";
    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por
      parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos 
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais 
      QUANTIDADE_DE_LIVROS_QUE_CABEM livros";
    - Se couber somente mais um livro, mostre a palavra "livro" (no singular) 
      na frase acima.
*/

let caixa = {
    espacos: 5,
    livros: 0
}


caixa.addLivros = qnt => {
    const { espacos } = caixa
    
    caixa.livros += qnt

    const singularPlural = (qnt, singular, plural) => qnt === 1 ? singular : plural
    
    const caixaCheia = caixa.livros === espacos
    const caixaComEspaco = caixa.livros < espacos

    const espacoRestante = espacos - caixa.livros
    const espacoExcedido = caixa.livros - espacos
    
    const cabeCabem = singularPlural(espacoRestante, "Cabe", "Cabem")
    const livroLivros = singularPlural(espacoRestante, "livro", "livros")
    const livroLivrosExcedidos = singularPlural(espacoExcedido, "livro", "livros")

    if (caixaCheia) return `A caixa já está cheia.`
    if (caixaComEspaco) return `${cabeCabem} mais ${espacoRestante} ${livroLivros}.`
    return `A quantidade de livros na caixa ultrapassou em ${espacoExcedido} ${livroLivrosExcedidos}.`
}

console.log(caixa.addLivros(3))


// meu jeito
// booksBox.addBooks = books => {
//   booksBox.booksIn += books
//   const { spaces, booksIn } = booksBox

//   const singularPluralInsideBox = booksIn > 1 ? "livros" : "livro"
//   const singularPluralOutsideBox = booksIn >= 7 ? "livros" : "livro"
  
//   if (booksIn < spaces) return `Há ${booksIn} ${singularPluralInsideBox} na caixa`
//   if (booksIn === spaces) return `A caixa está cheia`
//   return `Excedeu em ${booksIn - spaces} ${singularPluralOutsideBox}`
// }


// console.log(booksBox.addBooks(6))
