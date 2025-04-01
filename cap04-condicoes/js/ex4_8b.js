const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit' , (e) => {
  e.preventDefault()

  const velocidadePermitida = Number(form.inVelocidade.value)
  const velocidadeCondutor = Number(form.inCondutor.value)

  const multa = velocidadeCondutor * 0.20
  const multaLeve = velocidadeCondutor - multa


 if(velocidadeCondutor <= velocidadePermitida){
    resp.innerText = `Situação:  Sem multa`  
 }else if (multaLeve <= velocidadePermitida){
    resp.innerText = `Situação: Multa leve`
 }else {
  resp.innerText = `Situação: Multa Grave`
 }
})