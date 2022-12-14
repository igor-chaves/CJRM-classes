/* 01
  - Ordene o array de strings abaixo em ordem alfabética;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

// Letras maiúsculas vem antes das minúsculas
// const names = ['Caio', 'André', 'Dário']

// const namesCopy = names.map(name => name).sort()
// console.log(names, namesCopy)

// refatoração
const getArrayCopy = array => array.map(item => item) //função para gerar novo array automatizando o MAP(), quando for usar várias vezes
const names = ['Caio', 'André', 'Dário']

const namesCopy = getArrayCopy(names).sort()
console.log(names, namesCopy)


/* ---------------------------------------------------------------------------------------------- */
/* 02
- Ordene, de forma crescente, os objetos do array abaixo baseado em seus id's;
- Não modifique o array original;
- Exiba o array ordenado no console.
*/

const characters = [
  { id: 03, name: 'Simba' },
  { id: 02, name: 'Nala' },
  { id: 01, name: 'Scar' },
  { id: 04, name: 'Mufasa' }
]

// minha solução
// const charactersCopy = characters.map(item => item).sort((item1, item2) => item1.id - item2.id)
// console.log(characters, charactersCopy)

// Solução do roger
const charactersCopy = characters
  .map(item => ({ id: item.id, name: item.name }))
  .sort((item2, item1) => item2.id - item1.id)
console.log(characters, charactersCopy)





/* ---------------------------------------------------------------------------------------------- */
/* 03
- Ordene o array de números abaixo de forma crescente;
- Não modifique o array original;
- Exiba o array ordenado no console.
*/

const numbers = [41, 15, 63, 349, 25, 22, 143, 64, 59, 291]

const numbersCopy = numbers.map(num => num).sort((num1, num2) => num1 - num2)
console.log(numbers, numbersCopy)





/* ---------------------------------------------------------------------------------------------- */
/* 04
  - Encontre e exiba no console o 1º item maior que 50 do array abaixo.
*/

const randomNumbers = [10, 5, 0, 40, 60, 10, 20, 70]
const newNumber = randomNumbers.find(number => number > 50)
console.log(newNumber)





/* ---------------------------------------------------------------------------------------------- */
/* 05
  - Ordene o array de strings abaixo em ordem alfabética-invertida (Z-A);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = ['Cauã', 'Alfredo', 'Bruno']

const peopleCopy = people.map(name => name).sort().reverse()
console.log({ people, peopleCopy })





/* ---------------------------------------------------------------------------------------------- */
/* 06
  - Através do array abaixo, gere a mensagem "vinho cozido, tomate cozido, 
    cebola cozida, cogumelo cozido";
  - Exiba a string no console.
*/

const ingredients = ['vinho', 'tomate', 'cebola', 'cogumelo']

// minha solução
// const ingredientsCopy = ingredients.map(item => `${item} cozido`)
// const message = ingredientsCopy.join(", ")
// console.log(message)

// Solução do roger
const cookedIngredients = ingredients.reduce((acc, item, index, array) => {
  const correctWordGender = /a$/.test(item) ? "cozida" : "cozido"
  const isLastItem = index === array.length - 1
  const ingredientsMsg = acc + `${item} ${correctWordGender}`

  return isLastItem ? ingredientsMsg : `${ingredientsMsg}, `
}, "")
console.log(cookedIngredients)





/* ---------------------------------------------------------------------------------------------- */
/* 07
  - À partir do array abaixo, obtenha e exiba no console o total de pessoas que 
    assistiram apenas os filmes da Disney.
  - Considerando o array topBrazilmovies, através do map ou do reduce, insira 
    os nomes dos filmes na ul do index.html.
*/

const topBrazilmovies = [
  { title: 'Vingadores: Ultimato', peopleAmount: 19686119, distributedBy: 'Disney' },
  { title: 'Titanic', peopleAmount: 17050000, distributedBy: 'Paramount / 20th Century' },
  { title: 'O Rei Leão', peopleAmount: 16267649, distributedBy: 'Disney' },
  { title: 'Vingadores: Guerra Infinita', peopleAmount: 14572181, distributedBy: 'Disney' },
  { title: 'Tubarão', peopleAmount: 13035000, distributedBy: 'Universal' },
  { title: 'Nada a Perder', peopleAmount: 11944985, distributedBy: 'Paris Filmes' },
  { title: 'Os Dez Mandamentos', peopleAmount: 11259536, distributedBy: 'Paris / Downtown Filmes' },
  { title: 'Tropa de Elite 2', peopleAmount: 11204815, distributedBy: 'Zazen' },
  { title: 'Os Vingadores', peopleAmount: 10968065, distributedBy: 'Disney' },
  { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10735524, distributedBy: 'Embrafilme' }
]

const disneyTotalViewers = topBrazilmovies
  .filter(({distributedBy}) => distributedBy === "Disney")
  .reduce((acc, { peopleAmount }) => acc + peopleAmount, 0)
console.log(disneyTotalViewers)

const ul = document.querySelector(".list-group")
// topBrazilmovies.map(movie => ul.innerHTML += `<li>${movie.title}</li>`)

// Solução do roger
// const ul = document.querySelector(".list-group")
// const movieNames = topBrazilmovies.map(movie => `<li>${movie.title}</li>`).join("")
// ul.innerHTML = movieNames

// Solução 2 do roger
// const ul = document.querySelector(".list-group")
// const movieNames = topBrazilmovies.reduce((acc, movie) => acc + `<li>${movie.title}</li>`, "")
// ul.innerHTML = movieNames





/* ---------------------------------------------------------------------------------------------- */
/* 08
  - Considerando o array abaixo, gere um array de cães;
  - Os cães, ao invés da idade original, devem conter sua "idade humana";
    - Algumas pessoas dizem que 1 ano de um cachorro equivale à 7 anos de uma 
      pessoa. Cientificamente, não é tão simples assim, mas para fins didáticos,  
      se baseie nessa informação para fazer o cálculo.
  - Exiba no console o array dos cães com as idades convertidas.
*/

const pets = [
  { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
  { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
  { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
  { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
  { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
  { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' }
]

const dogs = pets
  .filter(({ type }) => type === "Dog")
  .map(({ name, age, gender, type }) => ({ name, age: age * 7, gender, type }))
console.log(dogs)


















/* ---------------------------------------------------------------------------------------------- */
//deve ser exercicio anterior (21)




// const scores = [10, 50, 20, 5, 35, 70, 45]
// scores.sort((score1, score2) => score1 - score2)
// console.log(scores)


// const theBigFamily = [
//   { name: 'Lineu', score: 20 },
//   { name: 'Nenê', score: 10 },
//   { name: 'Tuco', score: 50 },
//   { name: 'Bebel', score: 30 },
//   { name: 'Agostinho', score: 70 }
// ]

// theBigFamily.sort((item1, item2) => {
//   if (item1.score > item2.score) {
//     return -1
//   } else if (item2.score > item1.score) {
//     return 1
//   }
//   return 0
// })

// console.log(theBigFamily)


// // se o primeiro item for maior que o segundo ele fica em cima e recebe 1
// // se o primeiro item for menor que o segundo ele fica em baixo e recebe -1
// // se ambos forem iguais, nao re-ordena e recebe 0


// theBigFamily.sort((item1, item2) => item2.score - item1.score)
// //possiveis resultados item2 - item1 = positivo(recebe 1); negativo(recebe -1); igual (recebe 0)





// const books = [
//   { name: 'Código Limpo', price: 30 },
//   { name: 'O milagre da manhã', price: 5 },
//   { name: 'Alice no País das Maravilhas', price: 10 },
//   { name: 'Quem Pensa Enriquece', price: 50 },
//   { name: 'O livro da ciência', price: 40 }
// ]

// const booksOnSale = books
//   .filter(({ price }) => price > 20)
//   .map(({ name, price }) =>
//     `O preço do livro "${name}" caiu para ${price} reais.`)
// console.log(booksOnSale);
