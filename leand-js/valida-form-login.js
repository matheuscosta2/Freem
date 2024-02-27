function mostrarPopup(input, label) {
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}
// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email]');
let emailHelper = document.getElementById("email-helper");

mostrarPopup(emailInput, emailLabel);

emailInput.addEventListener("change", function (event) {
  let valor = event.target.value;

  if (valor.includes("@") && valor.includes(".com")) {
    emailInput.classList.remove("error");
    emailHelper.classList.remove("visible");
    emailInput.classList.add("correct");
  } else {
    emailInput.classList.add("error");
    emailHelper.innerText = "Email Inválido";
    emailHelper.classList.add("visible");
    emailInput.classList.remove("correct");
  }
});

// ---------- CAMPOS CONFIRMA SENHA ---------- //
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

//validar senha

senhaInput.addEventListener("blur", function (e) {
  let valor = e.target.value;

  if (valor.length == "") {
    senhaInput.classList.add("error");
    senhaHelper.innerText = "Sua senha não pode estar vazia";
    senhaHelper.classList.add("visible");
  } //else if (valor.length < 8) {
  //   senhaInput.classList.add("error");
  //   senhaHelper.innerText = "Sua senha deve ter 8 ou mais caracteres";
  //   senhaHelper.classList.add("visible");}
  else {
    senhaInput.classList.remove("error");
    senhaHelper.classList.remove("visible");
  }
});
