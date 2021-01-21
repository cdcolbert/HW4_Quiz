
var startBtn = document.getElementById("startBtn");
var questionContainerEl = document.getElementById("question-container");


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
        answer: "v variableName", 
        answer: "variable variableName", 
        answer: "set var variableName",
        answer: "var variableName",
        
    },
    {
        question: "Which event occurs when a user clicks on an HTML element?",
        answer: "onclick",
        answer: "onMouseOver", 
        answer: "onMouseClick", 
        answer: "onChange",
           
    },
    {
        question: "How does a FOR loop start?",
        answer1: "for (i<=5; i++)", 
        answer2: "for (i=0; i<=5)",
        answer3: "for (i=0; i<=5; i++)",
        answer4: "for i = 1 to 5",
        answer: 3       
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        answer1: "msg(\"Hello World\")",
        answer2: "alert(\"Hello World\")",
        answer3: "alertBox(\"Hello World\")",
        answer4: "msgBox(\"Hello World\")",
        answer: 2    
]

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("Success");
    startBtn.classList.add("hidden");
    questionContainerEl.classList.remove("hidden");
    getNextQuestion()
}

function getNextQuestion() {

}

function answer() {

}