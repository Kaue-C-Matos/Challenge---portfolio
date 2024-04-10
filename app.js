/*///Animações///*/
window.revelar = ScrollReveal({reset:true})

revelar.reveal('.experiencia_esquerda', {
    duration: 1000,
    distance: '90px',
    origin: 'rigth',
    delay: 300,
    afterReveal: function(el) {
        ScrollReveal().clean(el);
    }
})

revelar.reveal('.experiencia_direita', {
    duration: 1000,
    distance: '90px',
    origin: 'left',
    delay: 300,
    afterReveal: function(el) {
        ScrollReveal().clean(el);
    }
})