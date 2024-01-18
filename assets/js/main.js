const form = document.querySelector("#formulario");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputNome = e.target.querySelector("#nome");
  const inputIdade = e.target.querySelector("#idade");
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");
  const nome = String(inputNome.value);
  const idade = Number(inputIdade.value);
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!nome) {
    setResultado("NOME INVÁLIDO", false);
    return;
  }
  if (!idade) {
    setResultado("IDADE INVÁLIDO", false);
    return;
  }
  if (!peso) {
    setResultado("PESO INVÁLIDO", false);
    return;
  }
  if (!altura) {
    setResultado("ALTURA INVÁLIDO", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  const msg = `NOME: ${nome} - IDADE: ${idade} ANOS 
   IMC: ${imc} (${nivelImc}).`;
  setResultado(msg, true);
});
function getNivelImc(imc) {
  const nivel = [
    "ABAIXO DO PESO",
    "PESO NORMAL",
    "SOBREPESO",
    "OBESIDADE GRAU 1",
    "OBESIDADE GRAU 2",
    "OBSESIDADE GRAU 3",
  ];
  if (imc >= 39.9) return nivel[5];

  if (imc >= 34.9) return nivel[4];

  if (imc >= 29.9) return nivel[3];

  if (imc >= 24.9) return nivel[2];

  if (imc >= 18.5) return nivel[1];

  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}
function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
};

