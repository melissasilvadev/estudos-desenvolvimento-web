const selector = document.querySelectorAll(".selector");
const info = document.querySelectorAll('.avatar');
const bg = document.getElementById("container");
let seletorAtual = 0;

selector.forEach((selectedBtn, index) => {
    selectedBtn.addEventListener("click", () => {
        hideSlide();
        seletorAtual = index;
        showSlide();
    })
})

function hideSlide() {
    selector[seletorAtual].classList.remove("selected");
    info[seletorAtual].classList.remove("selected");
    bg.classList.remove(`bg-${seletorAtual}`);
}

function showSlide() {
    selector[seletorAtual].classList.add("selected");
    info[seletorAtual].classList.add("selected");
    bg.classList.add(`bg-${seletorAtual}`);
}