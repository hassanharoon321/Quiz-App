const quizData = [
    {
        question: "How old is Hassan Haroon?",
        a: "10",
        b: "23",
        c: "21",
        d: "Born on that day",
        correct: "c",
    },

    {
        question: "What is the most used Programming Language in 2019?",
        a: "JavaScript",
        b: "Python",
        c: "C++",
        d: "All of the above",
        correct: "a",
    },

    {
        question: "Who is the President of Pakistan?",
        a: "Donald Trump",
        b: "Joe Biden",
        c: "Imran Khan",
        d: "Arif Alvi",
        correct: "c",
    },

    {
        question: "What does HTML stands for?",
        a: "Hyper Text Markup Language",
        b: "Hello Transform Modern Language",
        c: "Cascading Style Sheet Langauge",
        d: "None of the above",
        correct: "a",
    },

    {
        question: "What Year does JavaScript Launch?",
        a: "2019",
        b: "2020",
        c: "2021",
        d: "1995",
        correct: "d",
    },
];

const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelectAnswers()
    const currentQuizData = quizData[currentQuiz];  //call array with object

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function getSelected() {

    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deSelectAnswers() {

    answersEls.forEach((answerEl) => {
        answerEl.checked = false
    });
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You answered correcly at ${score}/${quizData.length} Questions</h2> <button onclick="location.reload()">Reload</button>`
        }
    }

})