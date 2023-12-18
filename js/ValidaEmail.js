function validateEmail() {
    var email = document.getElementById('email').value;
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!regex.test(email)) {
      alert("Endereço de e-mail inválido. Por favor, insira um endereço de e-mail válido.");
      return false;
    }

    return true;
  }

  function clearForm() {
    var form = document.getElementById('myForm');
    form.reset();
  }