const form = document.querySelector('form')
const resp1 = document.getElementById('resp1')
const resp2 = document.getElementById('resp2')
const resp3 = document.getElementById('resp3')


form.addEventListener('submit' , (e) => {
  e.preventDefault()

  const valor = Number(form.inValor.value)

  if(valor % 10 != 0){
    alert(`Valor inválido para notas disponíveis (R$ 10,50,100)`)
    form.inValor.focus()
    return
  }

  const notasCem = Math.floor(valor / 100) 
  let resto = valor % 100
  const notasCinquentea = Math.floor(resto / 50)
  resto = valor % 50
  const notasDez = Math.floor(resto / 10)

  if(notasCem > 0){
    resp1.innerText = `Notas de R$ 100: ${notasCem}`
  }

  if(notasCinquentea > 0){
    resp2.innerText = `Notas de R$ 50: ${notasCinquentea}`
  }

  if(notasDez > 0){
    resp3.innerText = `Notas de R$ 10: ${notasDez}`
  }
})