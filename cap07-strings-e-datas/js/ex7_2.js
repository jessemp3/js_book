const form = document.querySelector('form')
const resp = document.querySelector('h3')


form.addEventListener('submit' , (ev) => {
    ev.preventDefault()

    const fruta = form.inFruta.value.toUpperCase() //conteúdo do campo em maiúsculo
    let resposta = "" // string que irá conter a resposta

    for(const letra of fruta){    //percorre todos os caracteres da fruta
        if(letra == fruta.charAt(0)){ //se letra igual a letra inicial da string 
            resposta += fruta.charAt(0) //adicionar a letra inical 
        }else{
            resposta += '_' //adiciona o sublinhado
        }
    }

    resp.innerText = resposta
    form.inFruta.value = '*'.repeat(fruta.lenght) //preenche com '*' , conforme tamanho
})