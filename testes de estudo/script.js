// SORT() -> Ordena os elementos do array 

// const names = ["fulano", "beltrano", "ciclano"]
// console.log(names)
// const orderedNames = names.sort()
// console.log(orderedNames)





// const numbers = [2, 44, 93, 18, 54, 7, 23]
// console.log(numbers)
// const orderedNumbers = numbers.sort()
// console.log(orderedNumbers)





const family = [
    { name: 'Lineu', score: 20 },
    { name: 'Nenê', score: 10 },
    { name: 'Tuco', score: 50 },
    { name: 'Bebel', score: 30 },
    { name: 'Agostinho', score: 70 }
]


// se o segundo score menos o primeiro score der resultado positivo; o item 2 vem antes do item 1
// se o primeiro score menos o segundo score der resultado negativo; o item 2 vem antes do item 2
// se ambos os valores subtraidos resultarem em 0, os itens do array nao seo nomeados
family.sort((item1, item2) => item2.score - item1.score)
