/*==================================================
    JOHESSA STUDY PREP CBT ENGINE
    GST-101.JS
    PART 1
==================================================*/

/*==============================
    DOM ELEMENTS
===============================*/

const welcomeScreen = document.getElementById("welcomeScreen");
const quizContainer = document.getElementById("quizContainer");
const resultScreen = document.getElementById("resultScreen");
const reviewScreen = document.getElementById("reviewScreen");

const easyBtn = document.getElementById("easyBtn");
const hardBtn = document.getElementById("hardBtn");
const extremeBtn = document.getElementById("extremeBtn");

const questionText = document.getElementById("questionText");
const answerButtons = document.getElementById("answerButtons");

const currentQuestion = document.getElementById("currentQuestion");
const totalQuestions = document.getElementById("totalQuestions");

const progressBar = document.getElementById("progressBar");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const submitBtn = document.getElementById("submitExamBtn");

const answeredCount = document.getElementById("answeredCount");
const remainingCount = document.getElementById("remainingCount");

const summaryTotal = document.getElementById("summaryTotal");

const timerDisplay = document.getElementById("time");

/*==============================
    RESULT ELEMENTS
===============================*/

const finalScore = document.getElementById("finalScore");
const finalPercentage = document.getElementById("finalPercentage");
const finalGrade = document.getElementById("finalGrade");

const performanceText = document.getElementById("performanceText");
const performanceRemark = document.getElementById("performanceRemark");

const reviewContainer = document.getElementById("reviewContainer");

const reviewBtn = document.getElementById("reviewBtn");
const restartBtn = document.getElementById("restartBtn");
const closeReview = document.getElementById("closeReview");
const backLevelsBtn = document.getElementById("backLevelsBtn");

/*==============================
    SUBMIT MODAL
===============================*/

const submitModal = document.getElementById("submitModal");

const confirmSubmit = document.getElementById("confirmSubmit");
const cancelSubmit = document.getElementById("cancelSubmit");

/*==============================
    GLOBAL VARIABLES
===============================*/

let QUESTIONS = [];

let currentIndex = 0;

let selectedStage = "";

let score = 0;

let userAnswers = [];

let timer;

let timeLeft = 900; // 15 Minutes

/*==============================
    START EASY EXAM
===============================*/

easyBtn.addEventListener("click", function(){

    selectedStage = "easy";

    QUESTIONS = EASY_QUESTIONS;

    initializeExam();

});

/*==============================
    START HARD EXAM
===============================*/

hardBtn.addEventListener("click", function(){

    selectedStage = "hard";

    QUESTIONS = HARD_QUESTIONS;

    initializeExam();

});

extremeBtn.addEventListener("click", function(){

    selectedStage = "extreme";

    QUESTIONS = EXTREME_QUESTIONS;

    initializeExam();

});

/*==============================
    INITIALIZE EXAM
===============================*/

function initializeExam() {

    welcomeScreen.style.display = "none";

    quizContainer.style.display = "grid";

    resultScreen.style.display = "none";

    reviewScreen.style.display = "none";

    // Show hidden sections
    document.querySelector(".timer").style.display = "flex";

    document.querySelector(".summary-card").style.display = "block";

    document.querySelector(".palette-card").style.display = "block";

    document.querySelector(".question-card").style.display = "block";

    document.querySelector(".navigation-buttons").style.display = "flex";

    submitBtn.style.display = "block";

    currentIndex = 0;
    score = 0;
    userAnswers = [];

    timeLeft = 900;

    totalQuestions.textContent = QUESTIONS.length;

    summaryTotal.textContent = QUESTIONS.length;

    QUESTIONS = [...QUESTIONS].sort(() => Math.random() - 0.5);

    createPalette();

    updateSummary();

    loadQuestion();

    startTimer();

}

/*==============================
    UPDATE SUMMARY
===============================*/

function updateSummary(){

    const answered = userAnswers.filter(answer => answer !== undefined).length;

    answeredCount.textContent = answered;

    remainingCount.textContent =
    QUESTIONS.length - answered;

}

/*==================================================
    JOHESSA STUDY PREP CBT ENGINE
    GST-101.JS
    PART 2
==================================================*/


/*==============================
        LOAD QUESTION
===============================*/

function loadQuestion(){

    clearAnswers();

    let current = QUESTIONS[currentIndex];

    currentQuestion.textContent = currentIndex + 1;

    questionText.textContent = current.question;

    current.answers.forEach((answer, index)=>{

        const button = document.createElement("button");

        button.classList.add("answer-btn");

        button.innerHTML = answer.text;

        button.dataset.index = index;

        button.addEventListener("click", function(){

            selectAnswer(index);

        });

        answerButtons.appendChild(button);

    });

    restoreAnswer();

    updateProgress();

    updatePalette();

    updateNavigationButtons();

}


/*==============================
        CLEAR ANSWERS
===============================*/

function clearAnswers(){

    answerButtons.innerHTML = "";

}


/*==============================
        SELECT ANSWER
===============================*/

function selectAnswer(index){

    userAnswers[currentIndex] = index;

    let buttons = answerButtons.querySelectorAll(".answer-btn");

    buttons.forEach(btn=>{

        btn.classList.remove("selected");

    });

    buttons[index].classList.add("selected");

    updateSummary();

    updatePalette();

    updateProgress();

}


/*==============================
      RESTORE SAVED ANSWER
===============================*/

function restoreAnswer(){

    if(userAnswers[currentIndex] === undefined){

        return;

    }

    let buttons = answerButtons.querySelectorAll(".answer-btn");

    buttons[userAnswers[currentIndex]]
        .classList.add("selected");

}


/*==============================
        UPDATE PROGRESS
===============================*/

function updateProgress(){

    const answered =
        userAnswers.filter(answer => answer !== undefined).length;

    const percentage =
        (answered / QUESTIONS.length) * 100;

    progressBar.style.width = percentage + "%";
}


/*==============================
      CREATE QUESTION PALETTE
===============================*/

function createPalette(){

    const palette =

    document.getElementById("questionPalette");

    palette.innerHTML = "";

    QUESTIONS.forEach((question,index)=>{

        const btn =

        document.createElement("button");

        btn.classList.add("palette-btn");

        btn.innerHTML = index + 1;

        btn.addEventListener("click", function(){

            currentIndex = index;

            loadQuestion();

        });

        palette.appendChild(btn);

    });

}


/*==============================
      UPDATE QUESTION PALETTE
===============================*/

function updatePalette(){

    let buttons =

    document.querySelectorAll(".palette-btn");

    buttons.forEach((btn,index)=>{

        btn.classList.remove("active");

        btn.classList.remove("answered");

        if(index === currentIndex){

            btn.classList.add("active");

        }

        if(userAnswers[index] !== undefined){

            btn.classList.add("answered");

        }

    });

}

/*==================================================
    JOHESSA STUDY PREP CBT ENGINE
    GST-101.JS
    PART 3
==================================================*/


/*==============================
        NEXT BUTTON
===============================*/

nextBtn.addEventListener("click", function(){

    // If this is the last question
    if(currentIndex === QUESTIONS.length - 1){

        submitBtn.click(); // Opens the submit confirmation
        return;

    }

    // Otherwise go to the next question
    currentIndex++;

    loadQuestion();

    scrollToTop();

});

/*==============================
      PREVIOUS BUTTON
===============================*/

prevBtn.addEventListener("click", function(){

    if(currentIndex > 0){

        currentIndex--;

        loadQuestion();

        scrollToTop();

    }

});


/*==============================
   UPDATE NAVIGATION BUTTONS
===============================*/

function updateNavigationButtons(){

    // Previous button
    prevBtn.disabled = currentIndex === 0;

    // Last question
    if(currentIndex === QUESTIONS.length - 1){

        nextBtn.innerHTML = `
            Submit Test <i class="fas fa-paper-plane"></i>
        `;

        // Hide the normal submit button
        submitBtn.style.display = "none";

    }else{

        nextBtn.innerHTML = `
            Next <i class="fas fa-arrow-right"></i>
        `;

        // Show it on other questions
        submitBtn.style.display = "block";
    }

}


/*==============================
      SCROLL TO QUESTION
===============================*/

function scrollToTop(){

    const card = document.querySelector(".question-card");

    if(card){

        card.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}


/*==============================
      KEYBOARD NAVIGATION
===============================*/

document.addEventListener("keydown", function(event){

    if(quizContainer.style.display !== "grid"){

        return;

    }

    if(event.key === "ArrowRight"){

        if(currentIndex < QUESTIONS.length - 1){

            currentIndex++;

            loadQuestion();

        }

    }

    if(event.key === "ArrowLeft"){

        if(currentIndex > 0){

            currentIndex--;

            loadQuestion();

        }

    }

});


/*==============================
      QUESTION NUMBER DISPLAY
===============================*/

function updateQuestionNumber(){

    currentQuestion.innerHTML = currentIndex + 1;

}


/*==============================
      LOAD QUESTION OVERRIDE
===============================*/

/*
This wraps the existing loadQuestion()
so every time it runs, the question
number and navigation buttons update.
*/

const originalLoadQuestion = loadQuestion;

loadQuestion = function(){

    originalLoadQuestion();

    updateQuestionNumber();

    updateNavigationButtons();

};


/*==============================
      EXAM STATUS CHECK
===============================*/

function examCompleted(){

    let answered = userAnswers.filter(

        answer => answer !== undefined

    ).length;

    return answered === QUESTIONS.length;

}

/*==================================================
    JOHESSA STUDY PREP CBT ENGINE
    GST-101.JS
    PART 4 - TIMER
==================================================*/


/*==============================
        START TIMER
===============================*/

function startTimer(){

    // Stop any existing timer
    clearInterval(timer);

    timeLeft = 1800; // 30 Minutes

    updateTimer();

    timer = setInterval(function(){

        timeLeft--;

        updateTimer();

        if(timeLeft <= 0){

            clearInterval(timer);

            alert("Time is up! Your exam will now be submitted.");

            submitExam();

        }

    },1000);

}


/*==============================
        UPDATE TIMER
===============================*/

function updateTimer(){

    let minutes = Math.floor(timeLeft / 60);

    let seconds = timeLeft % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.textContent = minutes + ":" + seconds;

    /*==============================
        TIMER COLORS
    ===============================*/

    if(timeLeft > 300){

        // More than 5 minutes left
        timerDisplay.style.color = "#0d47a1";

    }

    else if(timeLeft > 60){

        // Last 5 minutes
        timerDisplay.style.color = "#ff9800";

    }

    else{

        // Last minute
        timerDisplay.style.color = "#d50000";

    }

}


/*==============================
        STOP TIMER
===============================*/

function stopTimer(){

    clearInterval(timer);

}


/*==============================
        RESET TIMER
===============================*/

function resetTimer(){

    stopTimer();

    timeLeft = 1800;

    updateTimer();

}


/*==============================
      FORMAT TIME FUNCTION
===============================*/

function formatTime(seconds){

    let mins = Math.floor(seconds / 60);

    let secs = seconds % 60;

    mins = mins < 10 ? "0" + mins : mins;

    secs = secs < 10 ? "0" + secs : secs;

    return mins + ":" + secs;

}


/*==============================
      PAUSE TIMER
===============================*/

function pauseTimer(){

    clearInterval(timer);

}


/*==============================
      RESUME TIMER
===============================*/

function resumeTimer(){

    clearInterval(timer);

    timer = setInterval(function(){

        timeLeft--;

        updateTimer();

        if(timeLeft <= 0){

            clearInterval(timer);

            alert("Time is up! Your exam will now be submitted.");

            submitExam();

        }

    },1000);

}


/*==============================
      WINDOW BLUR WARNING
===============================*/

window.addEventListener("blur", function(){

    console.log("Student left the exam window.");

});


/*==============================
      WINDOW FOCUS
===============================*/

window.addEventListener("focus", function(){

    console.log("Student returned to the exam.");

});

/*==================================================
    JOHESSA STUDY PREP CBT ENGINE
    GST-101.JS
    PART 5 - SUBMIT EXAM & SCORE
==================================================*/


/*==============================
      OPEN SUBMIT MODAL
===============================*/

submitBtn.addEventListener("click", function(){

    submitModal.style.display = "flex";

});


/*==============================
      CANCEL SUBMISSION
===============================*/

cancelSubmit.addEventListener("click", function(){

    submitModal.style.display = "none";

});


/*==============================
      CONFIRM SUBMISSION
===============================*/

confirmSubmit.addEventListener("click", function(){

    submitModal.style.display = "none";

    submitExam();

});


/*==============================
        SUBMIT EXAM
===============================*/

/*==============================
        SUBMIT EXAM
===============================*/

function submitExam(){

    // Count answered questions
    const answeredQuestions = userAnswers.filter(answer => answer !== undefined).length;

    // Prevent submission if no question has been answered
    if(answeredQuestions === 0){

        alert("You have not answered any question yet. Please answer at least one question before submitting.");

        return;

    }

    // Warn if some questions are unanswered
    if(answeredQuestions < QUESTIONS.length){

        const proceed = confirm(
            "You have answered only " +
            answeredQuestions +
            " out of " +
            QUESTIONS.length +
            " questions.\n\nDo you still want to submit?"
        );

        if(!proceed){
            return;
        }

    }

    stopTimer();

    calculateScore();

    showResult();

}


/*==============================
      CALCULATE SCORE
===============================*/

function calculateScore(){

    score = 0;

    QUESTIONS.forEach(function(question,index){

        if(userAnswers[index] === undefined){

            return;
        }

        if(question.answers[userAnswers[index]].correct){

            score++;

        }

    });

}


/*==============================
      SHOW RESULT PAGE
===============================*/

function showResult(){

    quizContainer.style.display = "none";

    reviewScreen.style.display = "none";

    resultScreen.style.display = "flex";

    let percentage =

        Math.round((score / QUESTIONS.length) * 100);

    finalScore.textContent =
        score + " / " + QUESTIONS.length;

    finalPercentage.textContent =
        percentage + "%";



    /*==============================
            GRADE
    ===============================*/

    let grade = "";

    let remark = "";

    if(percentage >= 70){

        grade = "A";

        remark = "Excellent Performance!";

    }

    else if(percentage >= 60){

        grade = "B";

        remark = "Very Good.";

    }

    else if(percentage >= 50){

        grade = "C";

        remark = "Good. Keep Practicing.";

    }

    else if(percentage >= 40){

        grade = "D";

        remark = "Fair. More Practice Needed.";

    }

    else{

        grade = "F";

        remark = "Poor. Study More and Try Again.";

    }


    finalGrade.textContent = grade;

    performanceText.textContent = remark;

    performanceRemark.textContent =
        "You answered " +
        score +
        " out of " +
        QUESTIONS.length +
        " questions correctly.";

        saveResult();

}

/*==================================================
    JOHESSA STUDY PREP CBT ENGINE
    GST-101.JS
    PART 6 - REVIEW & RESTART
==================================================*/


/*==============================
        REVIEW BUTTON
===============================*/

reviewBtn.addEventListener("click", function(){

    showReview();

});


/*==============================
      SHOW REVIEW PAGE
===============================*/

function showReview(){

    resultScreen.style.display = "none";

    reviewScreen.style.display = "block";

    reviewContainer.innerHTML = "";

    QUESTIONS.forEach(function(question,index){

        const card = document.createElement("div");

        card.className = "review-card";

        let html = "";

        html += "<h3>Question " + (index + 1) + "</h3>";

        html += "<p>" + question.question + "</p>";

        question.answers.forEach(function(answer,answerIndex){

            let className = "";

            if(answer.correct){

                className = "correct";

            }

            if(userAnswers[index] === answerIndex && !answer.correct){

                className = "wrong";

            }

            if(userAnswers[index] === answerIndex){

    // Student selected this answer

    let icon = answer.correct ? "&#10004;" : "&#10008;";

    html +=
    "<div class='review-answer " + className + "'>" +
    icon + " " + answer.text +
    "</div>";

}
else{

    html +=
    "<div class='review-answer " + className + "'>" +
    answer.text +
    "</div>";

}

        });

        card.innerHTML = html;

        reviewContainer.appendChild(card);

    });

}


/*==============================
      CLOSE REVIEW
===============================*/

closeReview.addEventListener("click", function(){

    reviewScreen.style.display = "none";

    resultScreen.style.display = "flex";

});


/*==============================
      RESTART EXAM
===============================*/

restartBtn.addEventListener("click", function(){

    if(confirm("Restart this exam?")){

        currentIndex = 0;

        score = 0;

        userAnswers = [];

        resultScreen.style.display = "none";

        reviewScreen.style.display = "none";

        welcomeScreen.style.display = "block";

        quizContainer.style.display = "none";

        resetTimer();

    }

});


/*==============================
      BACK TO LEVELS
===============================*/

backLevelsBtn.addEventListener("click", function(){

   window.location.href = "../levels.html";
});


/*==============================
      SAVE RESULT
===============================*/

function saveResult(){

    const result = {

        stage: selectedStage,

        score: score,

        total: QUESTIONS.length,

        percentage:
        Math.round((score / QUESTIONS.length) * 100),

        date:
        new Date().toLocaleString()

    };

    localStorage.setItem(

        "BCM211_RESULT",

        JSON.stringify(result)

    );

}


/*==============================
      LOAD PREVIOUS RESULT
===============================*/

function loadPreviousResult(){

    const result =

    JSON.parse(

        localStorage.getItem("BCM211_RESULT")

    );

    if(result){

        console.log(result);

    }

}


/*==============================
      PAGE LOAD
===============================*/

window.addEventListener("load", function(){

    loadPreviousResult();

});

/*==============================
      INITIAL PAGE SETUP
===============================*/

window.addEventListener("DOMContentLoaded", function(){

    welcomeScreen.style.display = "block";

    quizContainer.style.display = "none";

    resultScreen.style.display = "none";

    reviewScreen.style.display = "none";

    document.querySelector(".timer").style.display = "none";

    document.querySelector(".summary-card").style.display = "none";

    document.querySelector(".palette-card").style.display = "none";

    document.querySelector(".question-card").style.display = "none";

    document.querySelector(".navigation-buttons").style.display = "none";

    submitBtn.style.display = "none";

});