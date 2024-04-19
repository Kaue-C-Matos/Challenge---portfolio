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

function checarNome() {
    let nome = document.querySelector(".nome").value.length
    let inputNome = document.querySelector(".nome")
    if (nome < 3 || nome > 50) {
        inputNome.style.borderColor = "red";
        document.querySelector(".aviso").style.visibility = "visible"
    } else if (nome >=5){
        inputNome.style.borderColor = "black";
        document.querySelector(".aviso").style.visibility = "hidden"
    }
    
}

document.querySelector(".nome").onchange = checarNome;