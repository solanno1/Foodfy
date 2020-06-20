const modalOverlay = document.querySelector('.modal-overlay');
const menu = document.querySelectorAll('.card');

for(let card of menu){
    card.addEventListener("click", function(){
        const imgId = card.getAttribute("id")
        const text = card.querySelector("h3").innerText
        const author = card.querySelector(".text").innerText
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `/assets/${imgId}`
        modalOverlay.querySelector('h3').innerText = `${text}`
        modalOverlay.querySelector('.text').innerText =`${author}`

        
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active');
})