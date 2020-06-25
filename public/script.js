const cards = document.querySelectorAll('.card')
for(let card of cards){
    card.addEventListener("click", function(){
        const recipeId = card.getAttribute('id')
        window.location.href = `/recipes/${recipeId}`
    })
}

// CONST DO BOTÃO "ESCONDER"
const btnsHideShow = document.querySelectorAll(".card-hide")
// CONST DO TEXTO 
const txtsHideShow = document.querySelectorAll(".card-text")

//RODA TODOS OS BOTÕES ESCONDER
for (const btn of btnsHideShow) {
    //FUNÇÃO CLICK PARA CADA BOTÃO
    btn.addEventListener("click", function () {
        // RECEBE EM UMA CONST O TEXTO DO BOTÃO ESCONDER
        const btnText = btn.innerHTML;
        // ENTRAR NO IF PROPOSITALMENTE
        if (btnText == "ESCONDER") {
            // ATRIBUI OUTRO TEXTO PARA O BOTÃO 
            btn.innerHTML = "MOSTRAR";   
            // ADICIONA A CLASSE HIDE DO CSS PARA ESCONDER TODO O ELEMENTO DO HTML DO ID EM QUAL O BOTÃO FOI ACIONADO
            txtsHideShow[btn.id].classList.add("hide");
        } else {
            btn.innerHTML = "ESCONDER";  
            txtsHideShow[btn.id].classList.remove("hide"); 
        }

    })    
}