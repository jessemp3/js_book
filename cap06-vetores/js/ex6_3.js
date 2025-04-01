const form = document.querySelector("form");
const resp = document.querySelector("pre");
const carros = [];

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const modelo = form.inModelo.value;
  const preco = Number(form.inPreco.value);
  carros.push({ modelo, preco });

  form.inModelo.value = "";
  form.inPreco.value = "";
  form.inModelo.focus();

  form.btListar.dispatchEvent(new Event("click"));
});

form.btListar.addEventListener("click", () => {
  if (carros.length == 0) {
    alert("Nâo há carros na lista");
    return;
  }

  const lista = carros.reduce(
    (acumular, carro) =>
      acumular + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n",
    ""
  );
  resp.innerText = `Lista de Carros Cadastrados\n${"-".repeat(40)}\n${lista}`;
});

form.btFiltrar.addEventListener("click", () => {
  const maximo = Number(
    prompt("Qual o valor máximo que o cliente deseja pagar ?")
  );

  if (maximo == 0 || isNaN(maximo)) {
    return;
  }

  const carrosFilter = carros.filter((carro) => carro.preco <= maximo);

  if (carrosFilter.length == 0) {
    alert("Não há carros com preço inferior ou igual ao solicitado");
    return;
  }

  let list = "";
  for (const carro of carrosFilter) {
    list += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
  }

  resp.innerText = `Carros até R$: ${maximo.toFixed(2)}\n${"-".repeat(
    40
  )}\n${list}`;
});

form.btSimular.addEventListener("click", () => {
  const descont = Number(prompt("Qual o percentual de desconto:"));

  if (descont == 0 || isNaN(descont)) {
    return;
  }

  const carrosDesc = carros.map((aux) => ({
    modelo: aux.modelo,
    preco: aux.preco - (aux.preco * descont) / 100,
  }));

  let list = "";

  for (const carro of carrosDesc) {
    list += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
  }
  resp.innerText = `Carros com desconto: ${descont}%\n${"-".repeat(
    40
  )}\n${list}`;
});