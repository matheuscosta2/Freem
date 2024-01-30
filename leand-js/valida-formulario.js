// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

function mostrarPopup(input, label) {
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}
// Mostrar popup de campo obrigatório

mostrarPopup(usernameInput, usernameLabel);

usernameInput.addEventListener("focus", () => {
  usernameLabel.classList.add("required-popup");
});

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", () => {
  usernameLabel.classList.remove("required-popup");
});

// Validar valor do input
usernameInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.length < 3) {
    //estilos dinâmicos caso o valor esteja incorreto

    usernameInput.classList.remove("correct");
    usernameInput.classList.add("error");
    usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres.";
    usernameHelper.classList.add("visible");
  } else {
    //estilos dinâmicos se o valor estiver correto
    usernameInput.classList.remove("error");
    usernameInput.classList.add("correct");
    usernameHelper.classList.remove("visible");
  }
});

//validação email
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
    emailInput.classList.remove("correct");
    emailHelper.classList.add("visible");
  }
});
//validação idade (maior ou igual a 18 anos)
let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade]');
let idadeHelper = document.getElementById("idade-helper");

idadeInput.addEventListener("change", function (e) {
  let valor = e.target.value;

  if (valor >= 18) {
    idadeInput.classList.remove("error");
    idadeHelper.classList.remove("visible");
    idadeInput.classList.add("correct");
  } else {
    idadeInput.classList.add("error");
    idadeHelper.innerText = "Você deve ter 18 anos  ou mais";
    idadeHelper.classList.add("visible");
  }
});

//validação dos 2 campos de senha
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha]');
let senhaHelper = document.getElementById("senha-helper");

let senhaConfirmInput = document.getElementById("confirma-senha");
let senhaConfirmLabel = document.querySelector('label[for="confirma-senha]');
let senhaConfirmHelper = document.getElementById("confirma-senha-helper");

mostrarPopup(senhaInput, senhaLabel);
mostrarPopup(senhaConfirmInput, senhaConfirmLabel);

senhaConfirmInput.addEventListener("change", function (e) {
  let valor = e.target.value;

  if (valor === senhaInput.value) {
    senhaConfirmInput.classList.remove("error");
    senhaConfirmHelper.classList.remove("visible");
    senhaConfirmInput.classList.add("correct");
  } else {
    senhaConfirmInput.classList.add("error");
    senhaConfirmHelper.innerText = "As senhas não conferem";
    senhaConfirmHelper.classList.add("visible");
  }
});
