document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,  // Número de elementos visibles por defecto
        spaceBetween: 10,  // Espacio entre los elementos
        loop: true,  // Activar el bucle infinito
        autoplay: {
            delay: 3000,  // Velocidad de cambio (3 segundos)
            disableOnInteraction: false,  // Mantener autoplay después de la interacción
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,  // Mostrar 3 elementos en pantallas grandes
            },
            768: {
                slidesPerView: 2,  // Mostrar 2 elementos en pantallas medianas
            },
            0: {
                slidesPerView: 1,  // Mostrar 1 elemento en pantallas pequeñas
                spaceBetween: 0,  // Eliminar el espacio entre las tarjetas en pantallas pequeñas
            }
        },
        effect: 'slide',  // Efecto de transición entre elementos
    });
});
