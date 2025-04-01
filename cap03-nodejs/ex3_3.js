const prompt = require('prompt-sync')()

const salario = Number(prompt("Sálario R$: "))
const tempo = Number(prompt("Tempo (anos): "))

const quadriennios = Math.floor(tempo / 4)
const acrescimo = salario * quadriennios / 100

console.log(`Quadrienios: ${quadriennios}`)
console.log(`Salário Final R$: ${(salario+acrescimo).toFixed(2)}`);