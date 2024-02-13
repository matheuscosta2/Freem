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

// ---------- VALIDAÇÃO IDADE ---------- //
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
  } else if (valor.length < 8) {
    senhaInput.classList.add("error");
    senhaHelper.innerText = "Sua senha deve ter 8 ou mais caracteres";
    senhaHelper.classList.add("visible");
  } else {
    senhaInput.classList.remove("error");
    senhaHelper.classList.remove("visible");
  }
});

let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

confirmaSenhaInput.addEventListener("blur", function (e) {
  let valor = e.target.value;
  let senha = senhaInput.value;

  if (valor !== senha) {
    confirmaSenhaInput.classList.add("error");
    confirmaSenhaHelper.innerText = "As senhas não conferem";
    confirmaSenhaHelper.classList.add("visible");
  } else {
    confirmaSenhaInput.classList.remove("error");
    confirmaSenhaHelper.classList.remove("visible");
  }
});
