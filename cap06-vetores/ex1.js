const cidades = ["Perlotas" , "São lourenço", "Porto alegre"]

cidades.forEach((cidades , i ) => {
    console.log('====================================');
    console.log(`${i+1} cidade: ${cidades}`);
    console.log('====================================');
})

console.log('====================================');
console.log();
console.log('====================================');

const numeros = [5, 10 , 15,20]
let soma = 0

numeros.forEach(num => soma += num)
console.log(`Soma dos valores:${soma}`);