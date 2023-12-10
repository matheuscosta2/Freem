const validateCPF = () => {
    const cpf = document.getElementById('cpf').value;
    const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if (!regex.test(cpf)) {
        alert("CPF inválido. Por favor, insira um CPF no formato 000.000.000-00");
        return false;
    }
    return true;
}

//refatorei o código inserindo a função arrow para reduzir a quantidade de código e 
//transformei a parte do código que não vai ser reutilizada em constantes