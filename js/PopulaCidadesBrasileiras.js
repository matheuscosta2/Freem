// Função para popular a lista de cidades
function popularCidades() {
    var select = document.getElementById("city-select");

    // Limpar opções existentes
    select.innerHTML = "";

    // Adicionar uma opção padrão
    var defaultOption = document.createElement("option");
    defaultOption.text = "Selecione a cidade";
    defaultOption.value = "";
    select.add(defaultOption);

    // Buscar a lista de cidades da API do IBGE
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')
        .then(response => response.json())
        .then(data => {
            // Adicionar as cidades ao select
            for(var i = 0; i < data.length; i++) {
                var option = document.createElement("option");
                option.text = data[i].nome;
                option.value = data[i].nome;
                select.add(option);
            }
        })
        .catch(error => console.error('Erro:', error));
}

// Chamar a função para popular a lista de cidades
window.onload = popularCidades;