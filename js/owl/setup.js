/*Configuração do carrosel (margem, botão de navegação, responsividade*/
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:5
        },
        1000:{
            items:4
        }
    }
})