
var startBtn = document.getElementById("startBtn");
var nextBtn = document.getElementById("nextBtn");
var questionContainerEl = document.getElementById("question-container");
var shuffledQuestions;
var currentQuestionIndex;
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answers");
var timeRemainingDisplay = document.querySelector("#time-remaining");
var timeRemaining = 120;


var questions = [
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            {answer: "*", correct: false},
            {answer: "-", correct: false},
            {answer: "=", correct: true},
            {answer: "+", correct: false}
        ]           
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: [
            {answer: "v variableName", correct: false},
            {answer: "variable variableName", correct: false},
            {answer: "set var variableName", correct: false},
            {answer: "var variableName", correct:true},
        ]        
    },
    {
        question: "Which event occurs when a user clicks on an HTML element?",
        answers: [
            {answer: "onclick", correct: true},
            {answer: "onMouseOver", correct: false},
            {answer: "onMouseClick", correct: false},
            {answer: "onChange", correct: false},
        ]           
    },
    {
        question: "How does a FOR loop start?",
        answers: [
            {answer1: "for (i<=5; i++)", correct: false},
            {answer2: "for (i=0; i<=5)", correct: false},
            {answer3: "for (i=0; i<=5; i++)", correct: true},
            {answer4: "for i = 1 to 5", correct: false},
        ]       
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        answers: [
            {answer1: "msg(\"Hello World\")", correct: false},
            {answer2: "alert(\"Hello World\")", correct: true},
            {answer3: "alertBox(\"Hello World\")", correct: false},
            {answer4: "msgBox(\"Hello World\")", correct: false},
        ]
    }
   
]

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("Success");
    startBtn.classList.add("hidden");
    countDown();
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove("hidden");
    getNextQuestion();
}

function getNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.answer;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", answer);
        answerButtonsEl.appendChild(button);
    })

}

function resetState() {
    nextBtn.classList.add("hidden");
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}

function answer(event) {
    var selectedAnswer = event.target;
    var correct = selectedAnswer.dataset.correct;
    answeredCorrect("correct", correct);
    Array.from(answerButtonsEl.children).forEach(button => {
        answeredWrong(button, button.dataset.correct);
    })
    nextBtn.classList.remove("hidden");
}

function answeredCorrect() {
    if (correct) {
        getNextQuestion();
    } else{
        answeredWrong()
    }
}

function answeredWrong() {

}

function countDown() {
    setInterval(function() {
        if (timeRemaining <= 0) {
            clearInterval(timeRemaining =0)
        }
        timeRemainingDisplay.innerHTML = timeRemaining;
        timeRemaining -=1;
    }, 1000)
}