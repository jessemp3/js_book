const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit' , (e) => {
  e.preventDefault()

  const resp1 = `${form.inNumero.value} é par`
  const resp2 = `${form.inNumero.value} é ímpar`

  const numero = Number(form.inNumero.value) % 2 === 0 ? resp.innerText = resp1 : resp.innerText = resp2
  
  
  // if(numero % 2 === 0){
  //     resp.innerText = `${numero} é par`
  // }else{
  //   resp.innerText = `${numero} é ímpar`
  // }
})