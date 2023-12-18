function validateCEP() {
    var cep = document.getElementById('cep').value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.erro) {
                alert("CEP inválido. Por favor, tente novamente.");
            } else {
                document.getElementById('address').value = data.logradouro;
                document.getElementById('city').value = data.localidade;
                // O usuário terá que preencher o número do endereço manualmente
            }
        })
        .catch(() => alert("Erro ao validar o CEP. Por favor, tente novamente."));
}