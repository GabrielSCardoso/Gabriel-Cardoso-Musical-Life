function validarConta() {

  var erros = validarConta();
  mensagemErro.innerHTML = "";

  if (erros.length > 0) {
    for (var i = 0; i < erros.length; i++) {
      var erro = erros[i];
      var li = document.createElement("li");
      li.innerHTML = erro;
      mensagemErro.appendChild(li);
    }
  } else {
    // Código que envia os dados
    // para o BD
  }
}

function validarConta() {
  var erros = [];

  if (!nomesobrenome.value) {
    erros.push("Prencher nome!");
  }

  if (!email.value ||
    (email.value.search("@") == -1) ||
    (email.value.search(".") == -1) ||
    (email.value.search(" ") >= '')) {
    erros.push("O formato do email é: usuario@dominio.com");
  }

  if (!mensagem.value) {
    erros.push("Preencha a mensagem!")
  }

  if (isNaN(campoNum.value)) {
    erros.push("Insira um número valido!");
  }
  return erros;
}