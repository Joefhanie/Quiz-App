function handleQuestion() {
    document.addEventListener("DOMContentLoaded", () => {
        const questions = JSON.parse(localStorage.getItem("questions")) || [];
        const score = new URLSearchParams(window.location.search).get("score");
    
        const answerBoxContainer = document.getElementById("answerBoxContainer");
        const quizLength = questions.length - 1;

        for (let i = 0; i <= quizLength; i++) {
            console.log(questions[i].userAnswer);
    
            answerBoxContainer.innerHTML += 
            `<div class="custom-answer-box">
                <h4 class="questions">Q${i+1}.<br>${questions[i].question}</h4>
                <h6 class="correct-answer">Correct Answer: ${questions[i].correctAnswer}</h6>
                <h6 class="placeholder-yourAnswer">You answered: ${questions[i].userAnswer || "N/A"}</h6>
            </div>`;
        }
    });
}

handleQuestion();