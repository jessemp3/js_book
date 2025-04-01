const prompt = require('prompt-sync')()

console.log('Informe os alunos ! Digite ( fim ) para sair!')
const alunos = []

do{
    const nome = prompt('Nome: ')
    if(nome == 'fim'){
        break
    }

    const nota = Number(prompt('Nota: ')) // lê a nota
    alunos.push({nome , nota})
    console.log('OK , Aluno(a) Cadastrado !');

}while(true)

console.log('-'.repeat(40));
const maior = alunos.reduce((a , b) => Math.max(a , b.nota) , 0) // obtem a maior nota
console.log(`Maior nota: ${maior}`);

if(maior >= 7 ){
    const destaques = alunos.filter(aluno => aluno.nota == maior) //filto
    for(const destaque of destaques){ //percore os alunos em destaques
        console.log(`- ${destaque.nome}`);
    }
}else{
    console.log(`Nâo há alunos em destaque na turma`);
}