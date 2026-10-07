function verificarNome() {
  const elementoInput = document.getElementById("camponome");
  const nomeDigitado = elementoInput.value;

  return nomeDigitado;
}

function verificarIdade() {

  const nomeDigitado = verificarNome();
  const elementoInput = document.getElementById("campoIdade");
  const idadeDigitada = parseInt(elementoInput.value);


  const elementoResultado = document.getElementById("mensagemResultado");

 
  if (isNaN(idadeDigitada)) {
    elementoResultado.innerText = "Por favor, digite uma idade numérica válida.";
    elementoResultado.style.color = "#dc2626";
    return;
  }


  if (idadeDigitada < 12) {
    elementoResultado.innerText =
      `${nomeDigitado} tem ${idadeDigitada} anos e é uma criança.`;
    elementoResultado.style.color = "#2563eb";

  } else if (idadeDigitada >= 12 && idadeDigitada <= 17) {
    elementoResultado.innerText =
      `${nomeDigitado} tem ${idadeDigitada} anos e é um adolescente.`;
    elementoResultado.style.color = "#9333ea";

  } else if (idadeDigitada >= 18 && idadeDigitada <= 59) {
    elementoResultado.innerText =
      `${nomeDigitado} tem ${idadeDigitada} anos e é um adulto.`;
    elementoResultado.style.color = "#16a34a";

  } else if (idadeDigitada >= 60) {
    elementoResultado.innerText =
      `${nomeDigitado} tem ${idadeDigitada} anos e pertence à terceira idade (atendimento preferencial).`;
    elementoResultado.style.color = "#d97706";
  }
}