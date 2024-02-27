function menuShow() {
  // função que será chamada no evento onclick do botão do menu
  let menuMobile = document.querySelector(".mobile-menu"); //  selecio o elemento HTML com a classe mobile-menu e armazenando-o na variável menuMobile
  if (menuMobile.classList.contains("open")) {
    // verifica se o menuMobile tem a classe open
    menuMobile.classList.remove("open"); // se tiver a classe open, remove a classe open
    document.querySelector(".icon").src = "img_leandro/menu_white_36dp.svg"; // altera a imagem do ícone do menu
  } else {
    menuMobile.classList.add("open"); // se não tiver a classe open, adiciona a classe open
    document.querySelector(".icon").src = "img_leandro/close_white_36dp.svg"; // altera a imagem do ícone do menu
  }
}
