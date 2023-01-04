async function searchAddres(cep) {
  const errorMessage = document.getElementById("erro");
  errorMessage.innerHTML = "";
  try {
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaConvertida = await consultaCEP.json();
    if (consultaConvertida.erro) {
      throw Error("CEP não existente");
    }
    const endereco = document.getElementById("endereco");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");
    const bairro = document.getElementById("bairro");

    endereco.value = consultaConvertida.logradouro;
    cidade.value = consultaConvertida.localidade;
    estado.value = consultaConvertida.uf;
    bairro.value = consultaConvertida.bairro;

    console.log(consultaConvertida);
    return consultaConvertida;
  } catch (err) {
    errorMessage.innerHTML = `<p>CEP inválido. Tente novamente</p>`;
    console.log(err);
  }
}

const cep = document.getElementById("cep");
cep.addEventListener("focusout", () => searchAddres(cep.value));
