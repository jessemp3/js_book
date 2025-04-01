const prompt = require('prompt-sync')()
console.log('====================================');
console.log("Programa copa do mundo. Digite 0 para sair");
console.log('====================================');

do{
  const ano = Number(prompt('Ano:'))

  if(ano == 0){
      break
  }else if(ano == 1942 || ano == 1946){
    console.log(`Não house Copa em ${ano} (Segunda Guerra Mundial)`);
  }else if(ano >= 1930 && ano % 4 == 2){
    console.log(`Sim! ${ano} é ano de Copa do mundo!`);
  }else {
    console.log(`Nâo...${ano} não é ano de Copa de Mundo.`);
  }
}while(true)