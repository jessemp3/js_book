const bairro = prompt("Taxa de entrega:")
let taxaEntrega 

switch (bairro) {
  case "centro":
      taxaEntrega = 5.00
    break;
    case "vendas":
      taxaEntrega = 7.00
    break;
    case "laranjal":
      taxaEntrega = 10.00
    break;
  default:
    taxaEntrega = 8.00
    break;
}

alert(`Taxa R$:${taxaEntrega.toFixed(2)}`)