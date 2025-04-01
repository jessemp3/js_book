const form = document.querySelector('form')
const resp1 = document.getElementById('outResp1')
const resp2 = document.getElementById('outResp2')

form.addEventListener('submit' , (e) => {
  e.preventDefault()

  const valor = Number(form.inValor.value)//ler o valor de deposito
  const tempo = Number()

  if(valor < 1.00){
      resp1.innerText = `Valor insuficiente`
  }else if(valor >= 1 && valor < 1.75){
    resp1.innerText = `Tempo: 30 Min`
    resp2.innerText = `Troco R$ ${valor - 1.00}`
  }else if(valor >= 1.75 && valor < 3.00){
      resp1.innerText = `Tempo: 60 min`
      resp2.innerText = `Troco R$ ${valor - 1.75}` 
  }else{
    resp1.innerText = `Tempo: 120 min`
    resp2.innerText = `Troco R$ ${valor - 3.00}`
  }

})