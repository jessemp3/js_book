const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener("submit", (e) => {
    e.preventDefault();


    const nome = frm.inNome.value.trim();


    if(!nome.includes(" ")) {
        alert("Informe o nome completo!");
        return
}

    const firstEspaco = nome.indexOf(" ");
    const lastName = nome.lastIndexOf(" ");

    const cracha = nome.substr(0, firstEspaco) + nome.substr(lastName)

    resp.innerText = `Cracha: ${cracha}`;

})