const people = [
    {
        name: "igor",
        age: 33,
        family: ["Maria", "Ruy"],
        shoes: {"Nike": 2},
        city() {return "Tokyo - Japan"}
    },
    {
        name: "Aline",
        age: 32,
        family: ["Maria", "Ruy"],
        shoes: {"Vans": 2},
        city() {return "Marília - Brazil"}
    },
]
console.log(people)

// add item no objeto
people.color = "white"
people[0].family.push("Aline")
people[0].shoes["Adidas"] = 3 // ou people[0].shoes.Adidas = 3 (se não houver espaço no nome do item)


// remover item do objeto
delete people.color
people[0].family.pop()
delete people[0].shoes["Adidas"]
// delete people.city


// alterar item no objeto
people[0].age++
people[0].family[0] = "MARIA"
people[0].shoes["Nike"] = 2

people[0].name.toUpperCase() // nao alterar o original, retorna uma nova string
const newName = people[0].name.toUpperCase()
people[0].name = newName // IGOR CHAVES DONEGA

console.log(people)
console.log(people[0].city())
