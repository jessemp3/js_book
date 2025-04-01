const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', (e) => {
  const useValue = Number(form.inTime.value)
  const useTime = Number(form.inUso.value)

  const total = (useTime * useValue / 15)
  const finalValue = Math.round(total)

  resp.innerText = `Valor a Pagar: ${finalValue.toFixed(2)}`

  e.preventDefault()
})