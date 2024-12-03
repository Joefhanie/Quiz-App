const questionLabel = document.getElementById("questionLabel");
const questionBox = document.getElementById("questionBox");
const choicesContainer = document.getElementById("choicesContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentQuestion = 0;
let score = 0;

function displayQuestions(index) {
    // if (currentQuestion !== 0 && currentQuestion <= questions.length-1) {
    //     prevBtn.style.display = "block";
    //     nextBtn.style.display = "block";
    // }

    questionBox.innerHTML = "";
    questionBox.innerHTML = 
    `<p>${questions[index].question}</p>`

    questionLabel.innerHTML ="";
    questionLabel.innerHTML = `<p>QUESTION ${index+1}</p>`;

    choicesContainer.innerHTML = "";
    questions[index].choices.forEach(choice => {
        choicesContainer.innerHTML += `<button class="choice">${choice}</button>`;
    })

    let choices = document.querySelectorAll('.choice');

    // Add color classes to choices
    choices.forEach((choice, index) => {
        switch(index) {
            case 0: 
                choice.classList.add("yellow"); 
                break;
            case 1: 
                choice.classList.add("red"); 
                break;
            case 2: 
                choice.classList.add("blue"); 
                break;
            case 3: 
                choice.classList.add("green"); 
                break;
        }
    });  
    
    choices.forEach(choice => {
        choice.addEventListener("click", (e) => {
            const selectedAnswer = e.target.textContent;
            questions[index].userAnswer = selectedAnswer;

            if(selectedAnswer === questions[index].correctAnswer) {
                score++;
            } 

            if (currentQuestion === questions.length - 1) {
                localStorage.setItem("questions", JSON.stringify(questions));
                window.location.href = "./score.html?score=" + encodeURIComponent(score);
            } else {
                currentQuestion++;
            }
            displayQuestions(currentQuestion);
        });
    });

    if(index === 0) {
        prevBtn.style.display = "none";
    } else if(index === questions.length-1) {
        nextBtn.style.display = "none";       
    } else {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
    }
} 
prevBtn.addEventListener("click", (e) => {
    console.log(currentQuestion);
    currentQuestion--;
    displayQuestions(currentQuestion);
})

nextBtn.addEventListener("click", (e) => {
    console.log(currentQuestion);
    currentQuestion++;
    displayQuestions(currentQuestion);
})

displayQuestions(currentQuestion);


