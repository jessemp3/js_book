const form = document.querySelector('form');
const respNome = document.querySelector('h3')
const resplist = document.querySelector('pre')

const pacientes  = []


form.addEventListener('submit' , (ev) => {
    ev.preventDefault()

    const nome = form.inPaciente.value 
    pacientes.push(nome)

    let list = ""
    for(let i = 0;i < pacientes.length; i++){
        list += `${i + 1}. ${pacientes[i]}\n `
    }

    resplist.innerText = list
    form.inPaciente.value = ""
    form.inPaciente.focus()
})


form.btUrgencia.addEventListener('click' ,  () => {
    if(!form.checkValidity()){
        alert('Informe o nome do paciente a ser atendido em caráter de urgência')
        form.inPaciente.focus()
        return
    }    

    const name = form.inPaciente.value
    pacientes.unshift(name)
    let lists = ""

    pacientes.forEach((paciente , i) => (lists += `${i + 1}. ${paciente}\n`))
    resplist.innerText = lists
    form.inPaciente.value = ""
    form.inPaciente.focus()
})

form.btAtender.addEventListener('click' , () => {
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera!")
        form.inPaciente.focus()
        return
    }
    const atender = pacientes.shift()
    respNome.innerText =  `Em atendimento: ${atender}`
    let list = ""
    pacientes.forEach((pacientes , i) => (list += `${i + 1}. ${pacientes}\n`))
    resplist.innerText = list
})
