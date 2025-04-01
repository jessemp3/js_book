const form = document.querySelector('form');
const respErros = document.getElementById('outErros');
const respChances = document.getElementById('outChances');
const respDica = document.getElementById('outDicas');

const erros = [] // array de vetor global
const sorteado = Math.floor(Math.random() * 100 ) + 1 // num aleatório entre 1 e 100
const CHANCES = 6 // número maximo de chances

form.addEventListener('submit' , (ev) => {
    ev.preventDefault()//evita o envivo do formulario e recarregamento da página

    const numero = Number(form.inNumero.value)//obter o número digitado

    if(numero === sorteado){//se acertou
        respDica.innerText = `Parabéns !! Número sortado: ${sorteado}`
        form.btSubmit.disabled = true // troca o status do botão 
        form.btNovo.className = "exibe"
    }else{
        if(erros.includes(numero)){// se número existe no vetor erros (já apostou)
            alert(`Você já apostou o número ${numero}. Tente outro`)
        }else{
            erros.push(numero) // adiciona número ao vetor
            const numErros = erros.length //obtem o tamanho do array
            const numChances = CHANCES - numErros // calcular o N de chances 
            //exibe o N de erros , conteúdo do vetor e N de chanches
            respErros.innerText = `${numErros} (${erros.join(', ')})`
            respChances.innerText = numChances
            
            if(numChances == 0){
                alert('Suas chances acabaram...')
                form.btSubmit.disabled = true
                form.btNovo.className = "exibe"
                respDica.innerText = `Game Over!! Número Sortado: ${sorteado}`
            }else{
                //usa o operador ternario para msg de dica
                const dica = numero < sorteado ? "Maior" : "Menor"
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    form.inNumero.value = ""
    form.inNumero.focus()
})

form.btNovo.addEventListener('click' , () => {
    location.reload() //recarrega a página
})