const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit' , (e) => {
  e.preventDefault()

  const numero = Number(form.inNumero.value)
  let resposta = `Entre ${numero} e 1: `

  for(let i = numero; i > 1; i--){
      resposta += i + " , "
      // resposta = resposta + i + ' , '
  }
  resposta += "1."

  resp.innerText = resposta

})