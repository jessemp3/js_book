const form = document.querySelector('form')
const resp = document.querySelector('#col1')
const resp2 = document.querySelector('#col2')


const jogos = []

form.addEventListener('submit' , (ev) => {
    ev.preventDefault()
    
    const clubes = form.inClube.value
    jogos.push(clubes)
    form.inClube.value = ""
    form.inClube.focus()
    
})

form.btListar.addEventListener('click' , () => {
    
    if(jogos.length == 0){
        alert('Não há clubes para mostrar')
        return
    }
    
    let list = ""
    for(const jogo of jogos){
        list += jogo + "\n"
    }
    
    resp.innerText = list
})


form.btMontar.addEventListener('click' , () => {
    
    if(jogos.length == 0 || jogos.length % 2 == 1){
        alert('Não há clubes para mostrar ou a quantidade de times é invalida ')
        return
    }

    const jogosReverse = jogos.slice(0).reverse()


    let rever = ""
   jogosReverse.forEach(function(number){
        rever +=  number + " x " + "\n"
   })

    let list = ""
    for(const jogo of jogos){
        list += " " + jogo + "\n"
    }

    for(let i = 0;i <= jogos.length;i++){
        resp.innerText = `${rever}`
        resp2.innerText = `${ list}` 
    }

})