const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit' , (e) => {
  e.preventDefault()

  const name = form.inName.value
  const masculino = form.inMasculino.checked
  const altura = Number(form.inAltura.value)

  // let peso
  // if(masculino){
  //   peso = 22 * Math.pow(altura , 2)
  // }else{
  //   peso = 21 * Math.pow(altura , 2)
  // }

  let peso = masculino ? 22 * Math.pow(altura , 2) : 21 * Math.pow(altura , 2)

  resp.innerText = `${name}: seu peso ideal é ${peso.toFixed(3)} kgzz`
})

form.addEventListener('reset' , (e) => {
  resp.innerText = ""
})