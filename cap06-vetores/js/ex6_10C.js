const form = document.querySelector('form')
const resp = document.querySelector('#resp')

const participantes = []
const notas = []


form.addEventListener('submit' , (ev) => {
    ev.preventDefault()

    const candidados = form.candidatos.value
    const candidadosNotas = Number(form.acertos.value)

    participantes.push(candidados)
    notas.push(candidadosNotas)

    

})


form.listar.addEventListener('click' , () => {

    let listNotas = ""
    for(const nota of notas){
        listNotas += "-" + nota + "\n"
    }

    let list = ""
    for(const candidato of participantes){
        list += candidato + "\n"
    }

    resp.innerText = `${list} ${listNotas}`


    form.candidatos.value = ''
    form.candidatos.focus()


})