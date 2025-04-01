const form = document.querySelector("form");
const resp = document.querySelector("h3")


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const funcionario = form.inName.value

    const partes = funcionario.split(" ")
    let email = ""
    const tam = partes.length

    for (let i = 0; i < tam - 1; i++) {
        email += partes[i].charAt(0)
    }

    email += partes[tam - 1].toLowerCase() + "@empresa.com.br"

    resp.innerText = `Email gerado: ${email}`
})