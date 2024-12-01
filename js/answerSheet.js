function handleQuestion() {
    const quizLength = questions.length - 1;

    for (let i = 0; i <= quizLength; i++) {
        answerBoxContainer.innerHTML += 
        `<div id="answerBox">
            <h4 id="question">${questions[i].question}</h4>
            <h6 id="correctAnswer">Correct Answer: ${questions[i].correctAnswer}</h6>
            <h6 id="placeholder">You answered: ${questions[i].userAnswer}</h6>
        </div>`;

        let ansBox = document.querySelectorAll('#answerBox');
        let quizQuestions = document.querySelectorAll('#question');
        let correctAnswer = document.querySelectorAll('#correctAnswer');
        let userAnswer = document.querySelectorAll('#placeholder');

        for (let k = 0; k <= i; k++) {
            ansBox[k].classList.add("custom-answer-box");
            quizQuestions[k].classList.add("questions");
            correctAnswer[k].classList.add("correct-answer");
            userAnswer[k].classList.add("placeholder-yourAnswer");
        }
    }
}

handleQuestion()