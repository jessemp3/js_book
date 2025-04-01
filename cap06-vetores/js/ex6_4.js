const form = document.querySelector("form");
const resp = document.querySelector("pre");

const criancas = [];

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const nome = form.inNome.value;
  const idade = Number(form.inIdade.value);
  criancas.push({ nome, idade });

  form.reset();// limppa todos os campos do formulario
  form.inNome.focus();

  form.btListar.dispatchEvent(new Event("click"));// dispara um click em btListar
});


form.btListar.addEventListener('click' , () =>{
  if(criancas.length == 0){ //  se o array estiver vazio , mostra a alert
    alert('Não há crianças na lista')
    return
  }

  let list = ''
  for(const crianca of criancas){
    const {nome , idade} = crianca // desestrutura o objeto
    list += nome + " - " + idade + " anos\n"
  }
  resp.innerText = list //exibe a lista
})

form.btResumir.addEventListener('click' , () => {
    if(criancas.length == 0){
      alert('Não há crianças na lista')
      return
    }

    const copia = [...criancas]// cria uma copia do vetor criança
    copia.sort((a,b) => a.idade - b.idade) //ordena pela idade

    let resume = "" // para concatenar a saida
    let aux = copia[0].idade // menor idade do vetor ordenado

    let nomes = [] // para inserir nomes de cada idade
    for(const crianca of copia){
      const {nome , idade} = crianca
      if(idade == aux){ // se é da mesma idade auxiliar 
        nomes.push(nome)
      }else{ // senão , monta o resumo para cada idade
        resume += aux + " anos(s): " + nomes.length + " criança(s) - "
        resume += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
        resume += "(" + nomes.join(", ") + ")\n\n"
        aux = idade //obtem a nova idade na ordem
        nomes = [] // limpa o vetor de nomes
        nomes.push(nome) // adiciona o primeiro da nova idade
      }
    }
    //adiciona a última criança
    resume += aux + " ano(s): " + nomes.length + " crianaça(s) - "
    resume += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
    resume += "(" + nomes.join(", ") + ")\n\n"
    resp.innerText = resume // exibe a resposta
})
