const form = document.querySelector('form')
const resp1 = document.getElementById('outResp1')
const resp2 = document.getElementById('outResp2')

form.addEventListener('submit' , (e) => {
  e.preventDefault()

  const ladoA = Number(form.inLadoA.value)
  const ladoB = Number(form.inLadoB.value)
  const ladoC = Number(form.inLadoC.value)


  // verificar os lados dos triângulos
  if(ladoA < (ladoB + ladoC)){  
    resp1.innerText = `Lados podem formar um triângulo`
  }else if(ladoB < (ladoA + ladoC)){
    resp1.innerText = `Lados podem formar um triângulo`
  }else if(ladoC < (ladoA + ladoB)){
    resp1.innerText = `Lados podem formar um triângulo`
  }

  // ver os tipos dos triãngulos
  if(ladoA === ladoB && ladoA == ladoC && ladoB == ladoC){
      resp2.innerText = `Tipo: Equilátero`
  }else if(ladoA == ladoB || ladoA == ladoC || ladoC == ladoB){
     resp2.innerText = `Tipo: Isósceles`
  }else{
    resp2.innerText = `Tipo: Escaleno`
  }
})