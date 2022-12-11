let booksBox = {
  spaces: 5,
  booksIn: 0
}

booksBox.addBooks = amount => {
    booksBox.booksIn += amount
    const { spaces, booksIn } = booksBox
    
    const singularPluralInsideBox = booksIn === 1 ? "livro" : "livros"
    const singularPluralOutsideBox = booksIn < 7 ? "livro" : "livros"

    if (booksIn < spaces) return `Há ${booksIn} ${singularPluralInsideBox} na caixa`
    if (spaces === booksIn) return "A caixa já está cheia."
    if (booksIn > spaces) return `Encheu a caixa e há ${Math.abs(spaces - booksIn)} ${singularPluralOutsideBox} de fora.`
}

console.log(booksBox.addBooks(8))
