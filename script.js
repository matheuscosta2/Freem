// srcript responsável pelo carrossel
const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

// Tópicos

let topicosLista = document.querySelector(".tópicos__lista")
console.log(topicosLista)
topicosLista.addEventListener("click", ()=>{
    console.log("clicou")
     
})
