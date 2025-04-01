// cria referência ao form a ao elemento h3
const form = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um 'ouvinte'd de evento , acionado quando o botão submit for clicado
form.addEventListener("submit", (e) => {
  const nome = form.idNome.value; // obtém o nome digitado no form
  resp.innerText = `Olá ${nome}`; //exibe a resposta do programa
  e.preventDefault(); //evita o envio do form e o recarregamento da pagina
});
