const prompt = require('prompt-sync')()

console.log('Informe os clientes ou (fim) para sair');
const clientes = []

do{
    const name = prompt('Nome: ')

    if(name == 'fim'){ // antes de ler a idade verifica
        break
    }

    const age = Number(prompt('Age: '))
    clientes.push({name , age })//adiciona ao array de objects
    console.log("OK! cliente inserido na fila !");

}while(true)
    console.log(`\nFila preferencial`);
    console.log(" - ".repeat(40));
    const prefFila = clientes.filter(cliente => cliente.age >= 60)
    prefFila.forEach((fila , i) => {
        console.log(`${i + 1}. ${fila.name}`);
    })

    console.log(`\nFila normal`);
    console.log(" - ".repeat(40));
    const normalFila = clientes.filter(cliente => cliente.age < 60)
    normalFila.forEach((fila , i ) => {
        console.log(`${i + 1}. ${fila.name}`);
    })