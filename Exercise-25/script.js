/* 01
  - Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do array "months".
*/
const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]
console.log(months.indexOf("Fevereiro"))




/* 02
    - Crie um objeto de data que represente o momento presente;
    - Exiba o objeto no console.
*/
const timeNow = new Date()
console.log(timeNow)





/* 03
    - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
*/
console.log(timeNow.getFullYear())





/* 04
    - Crie um objeto de data que represente um momento passado;
    - Exiba o objeto no console.
*/
const pastTime = new Date("Nov 23 2020 14:37:49")
console.log(pastTime)





/* 05
    - Exiba, no console, a hora do objeto que você acabou de criar.
*/
console.log(pastTime.getHours())





/* 06
    - Crie um objeto de data que represente um momento futuro;
    - Exiba o objeto no console.
*/
const futureTime = new Date("Nov 23 2080 14:37:49")
console.log(futureTime)





/* 07
    - Exiba no console a quantidade de dias entre o momento futuro e o passado.
*/
const timestamp = futureTime.getTime() - pastTime.getTime()
console.log(timestamp)
const seconds = Math.round(timestamp / 1000)
console.log(seconds)
const minutes = Math.round(seconds / 60)
console.log(minutes)
const hours = Math.round(minutes / 60)
console.log(hours)
const days = Math.round(hours / 24)
console.log(days)
const month = Math.round(days / 31)
console.log(month)
const years = Math.round(month / 12)
console.log(years)
