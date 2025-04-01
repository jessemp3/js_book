const form = document.querySelector('form')
const resp1 = document.getElementById('outResp1')
const resp2 = document.getElementById('outResp2')

form.addEventListener('submit' , (e) => {
  const produto = form.inProduto.value
  const preco = form.inPreco.value

  const desconto = preco * 0.50
  const promocao = preco * 2 + desconto

  resp1.innerText = `${produto} - Promoção: leve 3 por R$: ${promocao.toFixed(2)}`
  resp2.innerText = `O 3° produto custa apenas R$: ${desconto.toFixed(2)}`

  e.preventDefault()
})