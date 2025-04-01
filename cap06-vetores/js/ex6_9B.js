const form = document.querySelector("form");
const respNumero = document.querySelector("h2");
const respDescricao = document.querySelector("h3");

const arrayNumbers = [];

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    
    let numeros = Number(form.inNumero.value);
    
    //verificar se o item já exite no array
    if (arrayNumbers.includes(numeros) == true) {
        alert("valor já exite");
        form.inNumero.value = "";
        form.inNumero.focus();
    } else {
        arrayNumbers.push(numeros);
        form.inNumero.value = "";
        form.inNumero.focus();
        respNumero.innerText = arrayNumbers
  }

});

form.inButtonOrdem.addEventListener("click", () => {

    // array ordenado
    const numerosOrdenados = [...arrayNumbers];
    numerosOrdenados.sort((a, b) => a - b);
    console.log(numerosOrdenados)
    console.log(arrayNumbers);

    // forma de verificar se um array é igual ao outro
    if(JSON.stringify(numerosOrdenados) === JSON.stringify(arrayNumbers)){
        respDescricao.innerHTML = "<em>Atençao...Números estão em ordem Crescente</em>"
        // respDescricao.innerText = `Atenção...Números não estão em ordem`
    }else{
        respDescricao.innerHTML = "<em>Atençao...Números não estão em ordem Crescente</em>"
    }

    return
});
