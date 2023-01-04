async function searchAddres(cep) {
  try {
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaConvertida = await consultaCEP.json();
    if (consultaConvertida.erro) {
      throw Error("CEP não existente");
    }
    console.log(consultaConvertida);
    return consultaConvertida;
  } catch (err) {
    console.log(err);
  }
}

let ceps = ["01001000", "01001001"];
let conjuntoCeps = ceps.map((values) => searchAddres(values));
Promise.all(conjuntoCeps).then((response) => console.log(response));
