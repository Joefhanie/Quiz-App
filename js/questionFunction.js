
const questionLabel = document.getElementById("questionLabel");
const questionBox = document.getElementById("questionBox");
const choicesContainer = document.getElementById("choicesContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;

function displayQuestions(index) {
    questionBox.innerHTML = `<p>${questions[index].question}</p>`;
    questionLabel.innerHTML = `<p>QUESTION ${index + 1}</p>`;
    choicesContainer.innerHTML = "";

    questions[index].choices.forEach(choice => {
        choicesContainer.innerHTML += `<button class="choice">${choice}</button>`;
    });

    let choices = document.querySelectorAll('.choice');
    choices.forEach((choice, i) => {
        // Add color classes
        choice.classList.add(["yellow", "red", "blue", "green"][i]);

        // Pre-select the user's answer
        if (choice.textContent === questions[index].userAnswer) {
            choice.classList.add("selected");
        }

        choice.addEventListener("click", (e) => {
            // Update userAnswer
            questions[index].userAnswer = e.target.textContent;
            console.log(`Answer for Q${index + 1}: ${questions[index].userAnswer}`);

            // Update storage
            localStorage.setItem("questions", JSON.stringify(questions));

            if (index === questions.length - 1) {
                currentQuestion = 0;
                window.location.href = "./submission.html";
            } else {
                index++;
            }
            displayQuestions(index);
        });
    });

    // Display navigation buttons
    prevBtn.style.display = index === 0 ? "none" : "block";
}

// Event listeners for navigation buttons
prevBtn.addEventListener("click", (e) => {
    currentQuestion--;
    displayQuestions(currentQuestion);
    localStorage.setItem("currentQuestion", currentQuestion);
});

nextBtn.addEventListener("click", (e) => {
    if(currentQuestion >= questions.length-1) {
        window.location.href = "./submission.html";
    }
    
    currentQuestion++;
    displayQuestions(currentQuestion);
    localStorage.setItem("currentQuestion", currentQuestion);
});

// Load state from storage
currentQuestion = parseInt(localStorage.getItem("currentQuestion")) || 0;

displayQuestions(currentQuestion);
