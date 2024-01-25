// srcript responsãvel pelo carrossel
const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    }
});

// Tópicos

let topicosLista = document.querySelector(".tópicos__lista")
console.log(topicosLista)
topicosLista.addEventListener("click", ()=>{
    console.log("passou o mouse por cima")
     
})
