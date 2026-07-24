/*==================================================
        JOHESSA THEORY CBT ENGINE
        GST-101.JS
        PART 1
==================================================*/


/*==================================
        DOM ELEMENTS
==================================*/

const questionSelect = document.getElementById("questionSelect");
const jumpBtn = document.getElementById("jumpBtn");

const welcomeScreen = document.getElementById("welcomeScreen");
const quizContainer = document.getElementById("quizContainer");
const resultScreen = document.getElementById("resultScreen");
const reviewScreen = document.getElementById("reviewScreen");

const easyBtn = document.getElementById("easyBtn");
const hardBtn = document.getElementById("hardBtn");
const extremeBtn = document.getElementById("extremeBtn");

const questionText = document.getElementById("questionText");

const answerBox = document.getElementById("studentAnswer");

const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

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


/*==================================
        RESULT ELEMENTS
==================================*/

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


/*==================================
        SUBMIT MODAL
==================================*/

const submitModal = document.getElementById("submitModal");
const confirmSubmit = document.getElementById("confirmSubmit");
const cancelSubmit = document.getElementById("cancelSubmit");


/*==================================
        GLOBAL VARIABLES
==================================*/

let QUESTIONS = [];

let shuffledQuestions = [];

let currentIndex = 0;

let selectedStage = "";

let timer;

let timeLeft = 1800;

let userAnswers = [];

let questionScores = [];

let score = 0;

let totalMarks = 0;


/*==================================
        START EASY
==================================*/

easyBtn.addEventListener("click", () => {

    selectedStage = "easy";

    QUESTIONS = EASY_THEORY_QUESTIONS;

    initializeExam();

});


/*==================================
        START HARD
==================================*/

hardBtn.addEventListener("click", () => {

    selectedStage = "hard";

    QUESTIONS = HARD_THEORY_QUESTIONS;

    initializeExam();

});


/*==================================
        START EXTREME
==================================*/

extremeBtn.addEventListener("click", () => {

    selectedStage = "extreme";

    QUESTIONS = EXTREME_THEORY_QUESTIONS;

    initializeExam();

});


/*==================================
        INITIALIZE EXAM
==================================*/

function initializeExam() {

    welcomeScreen.style.display = "none";

    quizContainer.style.display = "grid";

    resultScreen.style.display = "none";

    reviewScreen.style.display = "none";

    document.querySelector(".timer").style.display = "flex";

    document.querySelector(".summary-card").style.display = "block";

    document.querySelector(".navigation-card").style.display = "block";

    document.querySelector(".question-card").style.display = "block";

    document.querySelector(".navigation-buttons").style.display = "flex";

    submitBtn.style.display = "block";


    currentIndex = 0;

    score = 0;

    userAnswers = [];

    questionScores = [];

    totalMarks = 0;


    QUESTIONS.forEach(question => {

        totalMarks += question.marks;

    });

    QUESTIONS = [...QUESTIONS];


    totalQuestions.textContent = QUESTIONS.length;

    summaryTotal.textContent = QUESTIONS.length;


    createQuestionSelector();

    updateSummary();

    loadQuestion();

    startTimer();

}


/*==================================
        LOAD QUESTION
==================================*/

function loadQuestion() {

    let current = QUESTIONS[currentIndex];

    currentQuestion.textContent = currentIndex + 1;

    questionSelect.value = currentIndex;

    questionText.textContent = current.question;

    if (userAnswers[currentIndex]) {

        answerBox.value = userAnswers[currentIndex];

    } else {

        answerBox.value = "";

    }

    autoResizeTextarea(); // <-- Add this line here

    updateCounts();

    updateProgress();

    updateNavigationButtons();

}

/*==================================
        SAVE ANSWER
==================================*/

answerBox.addEventListener("input", function () {

    userAnswers[currentIndex] = answerBox.value;

    updateSummary();

    updateProgress();

    updateCounts();

    saveProgress();

});

function autoResizeTextarea() {
    answerBox.style.height = "90px"; // Reset first
    answerBox.style.height = answerBox.scrollHeight + "px";
}

answerBox.addEventListener("input", () => {
    autoResizeTextarea();
});


/*==================================
        UPDATE SUMMARY
==================================*/

function updateSummary() {

    const answered = userAnswers.filter(answer => {

        return answer && answer.trim() !== "";

    }).length;


    answeredCount.textContent = answered;

    remainingCount.textContent = QUESTIONS.length - answered;

}


/*==================================
        UPDATE PROGRESS
==================================*/

function updateProgress() {

    const answered = userAnswers.filter(answer => {

        return answer && answer.trim() !== "";

    }).length;


    const percentage =

        (answered / QUESTIONS.length) * 100;


    progressBar.style.width = percentage + "%";


    document.getElementById("progressText").textContent =

        answered + " of " + QUESTIONS.length + " completed";

}

/*==================================
        WORD & CHARACTER COUNT
==================================*/

function updateCounts() {

    const text = answerBox.value;

    const characters = text.length;

    const words = text.trim() === ""
        ? 0
        : text.trim().split(/\s+/).length;

    wordCount.textContent = words;
    charCount.textContent = characters;

}

/*==================================================
        JOHESSA THEORY CBT ENGINE
        PART 2
==================================================*/


/*==================================
        NEXT BUTTON
==================================*/

nextBtn.addEventListener("click", function () {

    userAnswers[currentIndex] = answerBox.value;

    saveProgress();

    if (currentIndex === QUESTIONS.length - 1) {

        const answered = userAnswers.filter(answer =>
            answer && answer.trim() !== ""
        ).length;

        if (answered === 0) {
            alert("You must answer at least one question.");
            return;
        }

        submitModal.style.display = "flex";

        return;
    }

    currentIndex++;

    loadQuestion();

    scrollToTop();

});


/*==================================
        PREVIOUS BUTTON
==================================*/

prevBtn.addEventListener("click", function () {

    userAnswers[currentIndex] = answerBox.value;

    saveProgress();

    if (currentIndex > 0) {

        currentIndex--;

        loadQuestion();

        scrollToTop();

    }

});


/*==================================
        UPDATE NAVIGATION
==================================*/

function updateNavigationButtons() {

    prevBtn.disabled = currentIndex === 0;


    if (currentIndex === QUESTIONS.length - 1) {

        nextBtn.innerHTML =
            `Submit Test <i class="fas fa-paper-plane"></i>`;

        submitBtn.style.display = "none";

    }

    else {

        nextBtn.innerHTML =
            `Next <i class="fas fa-arrow-right"></i>`;

        submitBtn.style.display = "block";

    }

}


/*==================================
        SCROLL TO TOP
==================================*/

function scrollToTop() {

    if (window.innerWidth <= 768) {

        const questionCard = document.querySelector(".question-card");

        const y = questionCard.getBoundingClientRect().top + window.pageYOffset - 280;

        window.scrollTo({
            top: y,
            behavior: "smooth"
        });

    }

}


/*==================================
        KEYBOARD NAVIGATION
==================================*/

document.addEventListener("keydown", function (event) {

    if (quizContainer.style.display !== "grid") return;


    if (event.key === "ArrowRight") {

        nextBtn.click();

    }


    if (event.key === "ArrowLeft") {

        prevBtn.click();

    }

});


/*==================================
        QUESTION SELECTOR
==================================*/

function createQuestionSelector() {

    questionSelect.innerHTML = "";


    QUESTIONS.forEach((question, index) => {

        const option = document.createElement("option");

        option.value = index;

        option.textContent =
            "Question " + (index + 1);

        questionSelect.appendChild(option);

    });

}


/*==================================
        JUMP BUTTON
==================================*/

jumpBtn.addEventListener("click", function () {

    userAnswers[currentIndex] = answerBox.value;

    currentIndex = Number(questionSelect.value);

    saveProgress();

    loadQuestion();

});



/*==================================
        START TIMER
==================================*/

function startTimer() {

    clearInterval(timer);

    timeLeft = 1800;

    updateTimer();


    timer = setInterval(function () {

        timeLeft--;

        updateTimer();

        saveProgress();


        if (timeLeft <= 0) {

            clearInterval(timer);

            alert("Time is up!");

            submitExam();

        }

    }, 1000);

}



/*==================================
        UPDATE TIMER
==================================*/

function updateTimer() {

    let minutes = Math.floor(timeLeft / 60);

    let seconds = timeLeft % 60;


    minutes =

        minutes < 10 ?

            "0" + minutes :

            minutes;


    seconds =

        seconds < 10 ?

            "0" + seconds :

            seconds;


    timerDisplay.textContent =

        minutes + ":" + seconds;



    if (timeLeft > 300) {

        timerDisplay.style.color = "#0d47a1";

    }

    else if (timeLeft > 60) {

        timerDisplay.style.color = "#ff9800";

    }

    else {

        timerDisplay.style.color = "#d50000";

    }

}



/*==================================
        STOP TIMER
==================================*/

function stopTimer() {

    clearInterval(timer);

}



/*==================================
        RESUME TIMER
==================================*/

function resumeTimer() {

    clearInterval(timer);


    timer = setInterval(function () {

        timeLeft--;

        updateTimer();

        saveProgress();


        if (timeLeft <= 0) {

            clearInterval(timer);

            alert("Time is up!");

            submitExam();

        }

    }, 1000);

}




/*==================================
        SAVE PROGRESS
==================================*/

function saveProgress() {

    const progress = {

        stage: selectedStage,

        currentIndex: currentIndex,

        userAnswers: userAnswers,

        timeLeft: timeLeft,

        questions: QUESTIONS,

        totalMarks: totalMarks

    };


    localStorage.setItem(

        "GST101_THEORY_PROGRESS",

        JSON.stringify(progress)

    );

}




/*==================================
        LOAD PROGRESS
==================================*/

function loadProgress() {

    const progress = JSON.parse(

        localStorage.getItem(

            "GST101_THEORY_PROGRESS"

        )

    );


    if (!progress) return;


    QUESTIONS = progress.questions;

    selectedStage = progress.stage;

    currentIndex = progress.currentIndex || 0;

    userAnswers = progress.userAnswers || [];

    timeLeft = progress.timeLeft || 1800;

    totalMarks = progress.totalMarks || 0;


    welcomeScreen.style.display = "none";

    quizContainer.style.display = "grid";

    resultScreen.style.display = "none";

    reviewScreen.style.display = "none";


    document.querySelector(".timer").style.display = "flex";

    document.querySelector(".summary-card").style.display = "block";

    document.querySelector(".navigation-card").style.display = "block";

    document.querySelector(".question-card").style.display = "block";

    document.querySelector(".navigation-buttons").style.display = "flex";

    submitBtn.style.display = "block";


    totalQuestions.textContent = QUESTIONS.length;

    summaryTotal.textContent = QUESTIONS.length;


    createQuestionSelector();

    updateSummary();

    updateProgress();

    loadQuestion();

    updateTimer();

    resumeTimer();

}



/*==================================
        PAGE LOAD
==================================*/

window.addEventListener("DOMContentLoaded", function () {

    if (localStorage.getItem("GST101_THEORY_PROGRESS")) {

        loadProgress();

        return;

    }


    welcomeScreen.style.display = "block";

    quizContainer.style.display = "none";

    resultScreen.style.display = "none";

    reviewScreen.style.display = "none";


    document.querySelector(".timer").style.display = "none";

    document.querySelector(".summary-card").style.display = "none";

    document.querySelector(".navigation-card").style.display = "none";

    document.querySelector(".question-card").style.display = "none";

    document.querySelector(".navigation-buttons").style.display = "none";

    submitBtn.style.display = "none";

});

/*==================================================
        JOHESSA THEORY CBT ENGINE
        PART 3A
==================================================*/


/*==================================
        SUBMIT BUTTON
==================================*/

submitBtn.addEventListener("click", () => {

    const answered = userAnswers.filter(answer => {

        return answer && answer.trim() !== "";

    }).length;


    if (answered === 0) {

        alert("You must answer at least one question.");

        return;

    }

    submitModal.style.display = "flex";

});



/*==================================
        CANCEL SUBMIT
==================================*/

cancelSubmit.addEventListener("click", () => {

    submitModal.style.display = "none";

});



/*==================================
        CONFIRM SUBMIT
==================================*/

confirmSubmit.addEventListener("click", () => {

    submitModal.style.display = "none";

    submitExam();

});



/*==================================
        SUBMIT EXAM
==================================*/

function submitExam() {

    stopTimer();

    calculateScore();

    showResults();

}



/*==================================
        CALCULATE SCORE
==================================*/

function calculateScore() {

    score = 0;

    questionScores = [];



    QUESTIONS.forEach((question, index) => {


        const answer =

            normalizeText(

                userAnswers[index] || ""

            );


        const matchedKeywords = [];

        const missingKeywords = [];


        let marksAwarded = 0;



        question.keywords.forEach(keyword => {


            const cleanKeyword =

                normalizeText(keyword);


            if (answer.includes(cleanKeyword)) {

                matchedKeywords.push(keyword);

            }

            else {

                missingKeywords.push(keyword);

            }

        });



        if (question.keywords.length > 0) {

            marksAwarded = Math.floor(
                (matchedKeywords.length / question.keywords.length)
                * question.marks
            );

        }


        if (marksAwarded > question.marks) {

            marksAwarded = question.marks;

        }


        score += marksAwarded;


        questionScores.push({

            question: question.question,

            studentAnswer: userAnswers[index] || "",

            matched: matchedKeywords,

            missing: missingKeywords,

            score: marksAwarded,

            total: question.marks

        });


    });


}



/*==================================
        NORMALIZE TEXT
==================================*/

function normalizeText(text) {

    return text

        .toLowerCase()

        .replace(/[^\w\s]/g, " ")

        .replace(/\s+/g, " ")

        .trim();

}



/*==================================
        CALCULATE PERCENTAGE
==================================*/

function calculatePercentage() {

    return Number(

        (

            (score / totalMarks)

            * 100

        ).toFixed(1)

    );

}



/*==================================
        GRADE
==================================*/

function getGrade(percentage) {

    if (percentage >= 70) {

        return "A";

    }

    if (percentage >= 60) {

        return "B";

    }

    if (percentage >= 50) {

        return "C";

    }

    if (percentage >= 45) {

        return "D";

    }

    if (percentage >= 40) {

        return "E";

    }

    return "F";

}



/*==================================
        PERFORMANCE REMARK
==================================*/

function getRemark(percentage) {

    if (percentage >= 70) {

        return "Excellent Performance";

    }

    if (percentage >= 60) {

        return "Very Good";

    }

    if (percentage >= 50) {

        return "Good";

    }

    if (percentage >= 45) {

        return "Fair";

    }

    if (percentage >= 40) {

        return "Pass";

    }

    return "Fail";

}

/*==================================================
        JOHESSA THEORY CBT ENGINE
        PART 3B
==================================================*/


/*==================================
        SHOW RESULTS
        ==================================*/


function showResults() {

    const percentage = calculatePercentage();

    const grade = getGrade(percentage);

    const remark = getRemark(percentage);


    quizContainer.style.display = "none";

    reviewScreen.style.display = "none";

    resultScreen.style.display = "grid";


    finalScore.textContent = `${score} / ${totalMarks}`;

    finalPercentage.textContent = percentage + "%";

    finalGrade.textContent = grade;

    performanceRemark.textContent = remark;


    if (percentage >= 70) {

        performanceText.textContent =
            "Outstanding!";

    }

    else if (percentage >= 60) {

        performanceText.textContent =
            "Very Good!";

    }

    else if (percentage >= 50) {

        performanceText.textContent =
            "Good Job!";

    }

    else if (percentage >= 45) {

        performanceText.textContent =
            "Fair Performance";

    }

    else if (percentage >= 40) {

        performanceText.textContent =
            "Pass";

    }

    else {

        performanceText.textContent =
            "Better Luck Next Time";

    }


    saveExamResult();
    updateResultUI();

}



/*==================================
        SAVE RESULT
==================================*/

function saveExamResult() {

    const result = {

        subject: "GST-101",

        stage: selectedStage,

        score: score,

        totalMarks: totalMarks,

        percentage: calculatePercentage(),

        grade: getGrade(calculatePercentage()),

        remark: getRemark(calculatePercentage()),

        date: new Date().toLocaleString()

    };


    localStorage.setItem(

        "GST101_LAST_RESULT",

        JSON.stringify(result)

    );


    localStorage.removeItem(

        "GST101_THEORY_PROGRESS"

    );

}



/*==================================
        LOAD LAST RESULT
==================================*/

function loadLastResult() {

    const result = JSON.parse(

        localStorage.getItem(

            "GST101_LAST_RESULT"

        )

    );


    if (!result) {

        return;

    }


    finalScore.textContent =

        `${result.score} / ${result.totalMarks}`;


    finalPercentage.textContent =

        result.percentage + "%";


    finalGrade.textContent =

        result.grade;


    performanceRemark.textContent =

        result.remark;

}



/*==================================
        REVIEW BUTTON
==================================*/

reviewBtn.addEventListener("click", function () {

    resultScreen.style.display = "none";

    reviewScreen.style.display = "grid";

    buildReviewPage();

});



/*==================================
        CLOSE REVIEW
==================================*/

closeReview.addEventListener("click", function () {

    reviewScreen.style.display = "none";

    resultScreen.style.display = "grid";

});



/*==================================
        GRADE COLOR
==================================*/

function applyGradeColor() {

    const grade = finalGrade.textContent;


    finalGrade.classList.remove(

        "grade-a",

        "grade-b",

        "grade-c",

        "grade-d",

        "grade-e",

        "grade-f"

    );


    switch (grade) {

        case "A":

            finalGrade.classList.add("grade-a");

            break;

        case "B":

            finalGrade.classList.add("grade-b");

            break;

        case "C":

            finalGrade.classList.add("grade-c");

            break;

        case "D":

            finalGrade.classList.add("grade-d");

            break;

        case "E":

            finalGrade.classList.add("grade-e");

            break;

        default:

            finalGrade.classList.add("grade-f");

    }

}



/*==================================
        UPDATE RESULT UI
==================================*/

function updateResultUI() {

    applyGradeColor();

}

/*==================================================
        JOHESSA THEORY CBT ENGINE
        PART 3C
==================================================*/


/*==================================
        BUILD REVIEW PAGE
==================================*/

function buildReviewPage() {

    reviewContainer.innerHTML = "";

    questionScores.forEach((item, index) => {

        const card = document.createElement("div");

        card.className = "review-card";


        const matchedHTML = item.matched.length

            ? item.matched.map(keyword =>

                `<span class="matched-keyword">✔ ${keyword}</span>`

            ).join("")

            : "<p>No keywords matched.</p>";


        const missingHTML = item.missing.length

            ? item.missing.map(keyword =>

                `<span class="missing-keyword">✘ ${keyword}</span>`

            ).join("")

            : "<p>No missing keywords.</p>";


        card.innerHTML = `

            <div class="review-header">

                <h3>Question ${index + 1}</h3>

                <div class="review-score">

                    ${item.score} / ${item.total}

                </div>

            </div>

            <div class="review-question">

                ${item.question}

            </div>

            <div class="review-answer">

                <h4>Your Answer</h4>

               <p style="white-space: pre-wrap;">
${item.studentAnswer || "<i>No answer provided.</i>"}
</p>

            </div>

            <div class="review-keywords">

                <h4>Matched Keywords</h4>

                <div class="keyword-list">

                    ${matchedHTML}

                </div>

            </div>

            <div class="review-keywords">

                <h4>Missing Keywords</h4>

                <div class="keyword-list">

                    ${missingHTML}

                </div>

            </div>

        `;

        reviewContainer.appendChild(card);

    });

}



/*==================================
        RESTART EXAM
==================================*/

restartBtn.addEventListener("click", restartExam);



function restartExam() {

    stopTimer();

    localStorage.removeItem("GST101_THEORY_PROGRESS");

    localStorage.removeItem("GST101_LAST_RESULT");

    answerBox.value = "";

    userAnswers = [];

    questionScores = [];

    QUESTIONS = [];

    currentIndex = 0;

    score = 0;

    totalMarks = 0;

    selectedStage = "";

    timeLeft = 1800;


    progressBar.style.width = "0%";

    answeredCount.textContent = "0";

    remainingCount.textContent = "0";

    currentQuestion.textContent = "0";

    totalQuestions.textContent = "0";

    summaryTotal.textContent = "0";


    reviewContainer.innerHTML = "";


    resultScreen.style.display = "none";

    reviewScreen.style.display = "none";

    quizContainer.style.display = "none";

    welcomeScreen.style.display = "block";


    document.querySelector(".timer").style.display = "none";

    document.querySelector(".summary-card").style.display = "none";

    document.querySelector(".navigation-card").style.display = "none";

    document.querySelector(".question-card").style.display = "none";

    document.querySelector(".navigation-buttons").style.display = "none";

    submitBtn.style.display = "none";

}




/*==================================
        BACK TO LEVELS
==================================*/

backLevelsBtn.addEventListener("click", function () {

    stopTimer();

    localStorage.removeItem("GST101_THEORY_PROGRESS");

    localStorage.removeItem("GST101_LAST_RESULT");

    window.location.href = "../levels.html";

});



/*==================================
        WARN BEFORE LEAVING
==================================*/

window.addEventListener("beforeunload", function (e) {

    if (

        quizContainer.style.display === "grid"

        &&

        resultScreen.style.display !== "grid"

    ) {

        saveProgress();

        e.preventDefault();

        e.returnValue = "";

    }

});



/*==================================
        ESC CLOSE SUBMIT MODAL
==================================*/

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        submitModal.style.display = "none";

    }

});



/*==================================
        REVIEW SHORTCUT
==================================*/

document.addEventListener("keydown", function (e) {

    if (e.ctrlKey && e.key === "r") {

        e.preventDefault();

        if (resultScreen.style.display === "grid") {

            reviewBtn.click();

        }

    }

});



/*==================================
        EXAM FINISHED
==================================*/

function finishExam() {

    stopTimer();

    calculateScore();

    showResults();

}



/*==================================
        SUBMIT FROM TIMER
==================================*/

function autoSubmit() {

    alert("Time is up. Your test has been submitted automatically.");

    finishExam();

}