const prompt = require('prompt-sync')()

console.log('Informe o valor do saque \nDigite 0 para sair');
const saques = []

do{
    const valor = Number(prompt('Saque R$: '))
    if(valor == 0){
        break
    }

    saques.push(valor)
    if(valor % 10 == 0){// verificar se valor é multiplo de 10 , já que só tem notas de 10 no caixa eletronico
        console.log('Saque Realizado com Sucesso !');
    }else{
        console.log('Erro...Valor inválido (Deve ser múltiplo de 10)');
    }

}while(true)

    console.log('\nSaques Válidos');
    console.log(" - ".repeat(40));
    const saquesValidos = saques.filter(saque => saque % 10 == 0)
    for(const saque of saquesValidos){
        console.log(saque.toFixed(2));
    }

    console.log(" - ".repeat(40));
    const totalSacado = saquesValidos.reduce((total , saque) => total + saque, 0)
    console.log(`Total dos Saques: R$ ${totalSacado.toFixed(2)}`);

    const saquesInvalidos = saques.length - saquesValidos.length
    console.log(`\nN de Tentativas de Saques (saques inválidos): ${saquesInvalidos}`);