// Função para popular a lista de estados
function popularEstados() {
    var select = document.getElementById("state-select");

    // Limpar opções existentes
    select.innerHTML = "";

    // Adicionar uma opção padrão
    var defaultOption = document.createElement("option");
    defaultOption.text = "Selecione o estado";
    defaultOption.value = "";
    select.add(defaultOption);

    // Buscar a lista de estados da API do IBGE
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(response => response.json())
        .then(data => {
            // Adicionar os estados ao select
            for(var i = 0; i < data.length; i++) {
                var option = document.createElement("option");
                option.text = data[i].nome;
                option.value = data[i].id; // Usamos o ID do estado como valor para que possamos buscar as cidades desse estado mais tarde
                select.add(option);
            }
        })
        .catch(error => console.error('Erro:', error));
}

// Chamar a função para popular a lista de estados
