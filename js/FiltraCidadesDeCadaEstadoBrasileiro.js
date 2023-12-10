function getCities() {
    // Obter os elementos de seleção de estado e cidade
    var stateSelect = document.getElementById("state-select");
    var citySelect = document.getElementById("city-select");

    // Obter o código do estado selecionado
    var stateCode = stateSelect.value;

    // Limpar as opções de cidade existentes
    citySelect.innerHTML = "";

    // Se um estado foi selecionado (ou seja, o valor do elemento de seleção do estado não é uma string vazia)
    if (stateCode !== "") {
        // Habilitar o elemento de seleção da cidade
        citySelect.disabled = false;

        // Buscar as cidades do estado selecionado da API do IBGE
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateCode}/municipios`)
            .then(response => response.json())
            .then(data => {
                // Adicionar uma opção padrão
                var defaultOption = document.createElement("option");
                defaultOption.text = "Selecione a cidade";
                defaultOption.value = "";
                citySelect.add(defaultOption);

                // Adicionar as cidades ao select
                for(var i = 0; i < data.length; i++) {
                    var option = document.createElement("option");
                    option.text = data[i].nome;
                    option.value = data[i].id;
                    citySelect.add(option);
                }
            })
            .catch(error => console.error('Erro:', error));
    } else {
        // Se nenhum estado foi selecionado, desabilitar o elemento de seleção da cidade
        citySelect.disabled = true;

        // Adicionar uma opção padrão com o texto "Selecione o estado"
        var defaultOption = document.createElement("option");
        defaultOption.text = "Selecione o estado";
        defaultOption.value = "";
        citySelect.add(defaultOption);
    }
}