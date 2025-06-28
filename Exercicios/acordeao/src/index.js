
const questions = document.querySelectorAll(".questions");
const answers = document.querySelectorAll(".answers");
const btn = document.querySelectorAll(".btn");
let indice = 0;

questions.forEach((question, index) => {
    question.addEventListener("click", () => {
        hideAnswers();
        indice = index;
        showAnswer();
    })
})

function hideAnswers() {
    answers.forEach((answer) => {
        answer.classList.remove("active");
    })

    btn.forEach((item) => {
        item.classList.remove("active");
    })
}

function showAnswer() {
    answers[indice].classList.add("active");
    btn[indice].classList.add("active");
}