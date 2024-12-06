const questionLabel = document.getElementById("questionLabel");
const questionBox = document.getElementById("questionBox");
const choicesContainer = document.getElementById("choicesContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const topic1 = document.getElementById('Topic1');
const topic2 = document.getElementById('Topic2');
const topic3 = document.getElementById('Topic3');
const topic4 = document.getElementById('Topic4');
const bgContainer = document.querySelector('.bg-container');
let currentQuestion = 0;

function fadeIn(element) {
    element.classList.add('fade-in');
    element.classList.remove('fade-out');
}

// new added function 
function fadeOut(element, callback) {
    element.classList.add('fade-out');
    element.classList.remove('fade-in');
    setTimeout(callback, 500); 
}

document.addEventListener('DOMContentLoaded', () => {
    if (questions[currentQuestion].topic == "Video Games") {
        topic1.style.display = "block";
        fadeIn(topic1);
        
        setTimeout(() => {
            fadeOut(topic1, () => showBgContainer(topic1));
        }, 3000); 
    } else {
        setTimeout(() => {
            showBgContainer(topic1);
        }, 0); 
    }
});
    
function showBgContainer(topic) {
    topic.style.display = "none";
    bgContainer.style.display = 'flex'; 
    fadeIn(bgContainer);
}

function displayQuestions(index) {
    if (questions[index].topic == "Video Games") {
        topic1.style.display = "block";
        fadeIn(topic1);
        
        setTimeout(() => {
            fadeOut(topic1, () => showBgContainer(topic1));
        }, 3000); 
    } else if (questions[index].topic == "Technology") {
        topic2.style.display = "block";
        fadeIn(topic2);

        setTimeout(() => {
            fadeOut(topic2, () => showBgContainer(topic2));
        }, 3000); 
    } else if (questions[index].topic == "Solar System") {
        topic3.style.display = "block";
        fadeIn(topic3);

        setTimeout(() => {
            fadeOut(topic3, () => showBgContainer(topic3));
        }, 3000);
    } else if (questions[index].topic == "Movies") {
        topic4.style.display = "block";
        fadeIn(topic4);

        setTimeout(() => {
            fadeOut(topic4, () => showBgContainer(topic4));
        }, 3000); 
    }


    fadeOut(questionBox, () => {
        questionBox.innerHTML = `<p>${questions[index].question}</p>`;
        fadeIn(questionBox);
    });

    fadeOut(questionLabel, () => {
        questionLabel.innerHTML = `<p>QUESTION ${index + 1}</p>`;
        fadeIn(questionLabel);
    });

    fadeOut(choicesContainer, () => {
        choicesContainer.innerHTML = "";
        questions[index].choices.forEach((choice, i) => {
            choicesContainer.innerHTML += `<button class="choice">${choice}</button>`;
        });

        let choices = document.querySelectorAll('.choice');
        choices.forEach((choice, i) => {
            choice.classList.add(["yellow", "red", "blue", "green"][i]);

            if (choice.textContent === questions[index].userAnswer) {
                choice.classList.add("selected");
            }

            choice.addEventListener("click", (e) => {
                questions[index].userAnswer = e.target.textContent;
                localStorage.setItem("questions", JSON.stringify(questions));

                if (index === questions.length - 1) {
                    currentQuestion = 0;
                    window.location.href = "./submission.html";
                } else {
                    currentQuestion++;
                    displayQuestions(currentQuestion);
                }
            });
        });
        fadeIn(choicesContainer);
    });

    prevBtn.style.display = index === 0 ? "none" : "block";
}

prevBtn.addEventListener("click", (e) => {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestions(currentQuestion);
        localStorage.setItem("currentQuestion", currentQuestion);
    }
});

nextBtn.addEventListener("click", (e) => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestions(currentQuestion);
        localStorage.setItem("currentQuestion", currentQuestion);
    } else {
        window.location.href = "./submission.html";
    }
});

currentQuestion = parseInt(localStorage.getItem("currentQuestion")) || 0;
questions = JSON.parse(localStorage.getItem("questions")) || questions;

displayQuestions(currentQuestion);
