const prompt = require('prompt-sync')()

const peso = Number(prompt("Peso da ração :"))
const consumo = Number(prompt("Consumo por dia (gr): "))

const pesogr = peso * 1000
const dias = Math.floor(pesogr / consumo)
const resto = pesogr % consumo

console.log(`Duração : ${dias} dias\nSobra ${resto}gr`);