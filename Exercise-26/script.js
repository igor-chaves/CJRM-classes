/* 01
  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/

const present = new Date()
const formatTimeUnit = unit => {
    return String(unit).length === 1 ? `0${unit}` : unit
}

const formatDate = date => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const days = formatTimeUnit(day)
    const months = formatTimeUnit(month)

    return `${days}/${months}/${year}`
}

console.log(formatDate(present))





/*　02
  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/

const formatDateInfo = dateTime => {
    const day = dateTime.getDate()
    const weekDay = dateTime.getDay()
    const month = dateTime.getMonth()
    const year = dateTime.getFullYear()

    const hour = dateTime.getHours()
    const minute = dateTime.getMinutes()

    const weekDays = [
        "domingo",
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta",
        "sábado",
    ]
    const months = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    ]

    const hours = formatTimeUnit(hour)
    const minutes = formatTimeUnit(minute)

    return `${hours}:${minutes} - ${weekDays[weekDay]}, ${day} de ${months[month]} de ${year}`
}

console.log(formatDateInfo(present))






/* 03
  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true }
const { id: identificacao, isVerified } = user
console.log(identificacao, isVerified)






/* 04
  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000' }

const nameA = robotA.name
const nameB = robotB.name

const { name: bender } = robotA
const { name: hal9000 } = robotB

console.log(bender, hal9000)





/* 05
  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = 'a'
const b = 'b'
const c = 'c'


/*
  06

  - Refatore o código abaixo.
*/

const useDataSomewhereElse = value => {
  console.log(value)
}

const updateSomething = (data = {}) => {
  const target = data.target
  const property = data.property
  let willChange = data.willChange

  if (willChange === 'valor indesejado') {
    willChange = 'valor desejado'
  }

  useDataSomewhereElse({
    target: target,
    property: property,
    willChange: willChange
  })
}

updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  const clockHTML = `
    <span>${formatTimeUnit(hours)}</span> :
    <span>${formatTimeUnit(minutes)}</span> :
    <span>${formatTimeUnit(seconds)}</span>
  `

  clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000)
