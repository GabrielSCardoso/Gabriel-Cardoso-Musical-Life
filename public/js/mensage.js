function enviarMensagem() {

    var erros = validaContato();
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

function enviarMensagem() {
    var erros = [];

    if (!nomesobrenome.value) {
        erros.push("Prencher nome!");
    }

    if (!emailmesage.value ||
        (emailmesage.value.search("@") == -1) ||
        (emailmesage.value.search(".") == -1) ||
        (emailmesage.value.search(" ") >= '')) {
        erros.push("O formato do email é: usuario@dominio.com");
    }

    if (isNaN(telefonemesage.value)) {
        erros.push("Insira um número valido!");
    }

    if (!mensagem.value) {
        erros.push("Preencha a mensagem!")
    }


    return erros;
}