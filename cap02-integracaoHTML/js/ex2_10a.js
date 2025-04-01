const form = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

form.addEventListener('submit' , (e) => {
  const promocao = form.inMedicamento.value
  const preco =  Number(form.inPreco.value)

  // floor pega o valor com casa decimal e retonan o valor inteiro para baixo ex (7.9 =  7)
  const total = Math.floor(preco * 2)

  resp1.innerText = `Promoção de ${promocao}`
  resp2.innerText = `Leve 2 pro apenas R$: ${total.toFixed(2)}`


  e.preventDefault()
})