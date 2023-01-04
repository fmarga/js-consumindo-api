const consultaCEP = fetch("https://viacep.com.br/ws/01001000/json/")
  .then((response) => response.json())
  .then((r) => {
    if (r.error) {
      throw Error("Esse cep não existe");
    } else {
      console.log(r);
    }
  })
  .catch((error) => console.log(error))
  .finally((message) => console.log("Processamento concluído"));
