const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const senha = form.senha.value
    const erros = []


    if(senha.length < 8 || senha.length > 15){
    erros.push("Possuir entre 8 e 15 caracteres")
}

    if(senha.match(/[0-9]/g) == null){
        erros.push("Possuir pelo menos um número")
    }

    if(!senha.match(/[a-z]/g) ){
        erros.push("Possuir pelo menos uma letra minúscula")
}

    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length < 2){
        erros.push("Possuir pelo menos duas letras maiúsculas")
    }

    if(!senha.match(/[\w|_]/g)){
         erros.push("Possuir pelo menos um caractere especial")
}

    if(erros.length == 0){
        resp.innerText = "Senha Válida"
}else{
    resp.innerText = "Senha Inválida\n" + erros.join(", ")
}
})