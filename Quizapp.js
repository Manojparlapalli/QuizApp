let homePage = document.getElementById("homePage");
let mainPage = document.getElementById("mainPage");
let startBtn = document.getElementById("startBtn");
let nextBtn = document.getElementById("nextBtn");
let question = document.getElementById("question");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
//let para = document.getElementById("para");
let check = document.getElementById("check");
let score = document.getElementById("score");
let result = document.getElementById("result");
let answerBoard = document.getElementById("answerBoard");
let x = 0;

let arr = [{
        question: "1. what is the fullform of html?",
        answers: [{
                option1: "Hyper Text Language",
                correct: false
            },
            {
                option2: "Hyper Text Markup Language",
                correct: true
            },
            {
                option3: "Text Language",
                correct: false
            },
            {
                option4: "Hyper Text Mark Language",
                correct: false
            }
        ]
    },
    {
        question: "2. what is fullform of css?",
        answers: [{
                option1: "cascading style sheet",
                correct: true
            },
            {
                option2: "style sheet",
                correct: false
            },
            {
                option3: "both 1 & 2",
                correct: false
            },
            {
                option4: "none of the above",
                correct: false
            }
        ]
    },
    {
        question: "3. what is full form of sql?",
        answers: [{
                option1: "queiry language",
                correct: false
            },
            {
                option2: "structure language",
                correct: false
            },
            {
                option3: "SEQUEL",
                correct: false
            },
            {
                option4: "structured queiry language",
                correct: true
            }
        ]
    },
    {
        question: "4. which one is float datatype?",
        answers: [{
                option1: "0",
                correct: false
            },
            {
                option2: "manoj",
                correct: false
            },
            {
                option3: "8.5",
                correct: true
            },
            {
                option4: "5+6j",
                correct: false
            }
        ]
    },
    {
        question: "5. which one is mutable in python?",
        answers: [{
                option1: "list",
                correct: true
            },
            {
                option2: "float",
                correct: false
            },
            {
                option3: "complex",
                correct: false
            },
            {
                option4: "set",
                correct: false
            }
        ]
    },
    {
        question: "6. which one is number datatype in javascript?",
        answers: [{
                option1: "9",
                correct: false
            },
            {
                option2: "9.0",
                correct: false
            },
            {
                option3: "98.5",
                correct: false
            },
            {
                option4: "All of the above",
                correct: true
            }
        ]
    },
    {
        question: "7. which tag is used for image?",
        answers: [{
                option1: "img",
                correct: true
            },
            {
                option2: "image",
                correct: false
            },
            {
                option3: "im",
                correct: false
            },
            {
                option4: "none of the above",
                correct: false
            }
        ]
    },
    {
        question: "8. what is the value of font-weight property?",
        answers: [{
                option1: "600",
                correct: false
            },
            {
                option2: "bold",
                correct: false
            },
            {
                option3: "Both 1 & 2",
                correct: true
            },
            {
                option4: "set",
                correct: "none of the above"
            }
        ]
    },
    {
        question: "9. which one is belongs to complex datatype?",
        answers: [{
                option1: "2",
                correct: false
            },
            {
                option2: "2+0j",
                correct: true
            },
            {
                option3: "complex",
                correct: false
            },
            {
                option4: "[1,2,3]",
                correct: false
            }
        ]
    },
    {
        question: "10. For unique rows which clause is used in sql?",
        answers: [{
                option1: "DISTINCT",
                correct: true
            },
            {
                option2: "where",
                correct: false
            },
            {
                option3: "having",
                correct: false
            },
            {
                option4: "limit",
                correct: false
            }
        ]
    }

];
let y = 0;
let z = 1;
document.getElementById("total").textContent = arr.length;
startBtn.addEventListener("click", function start() {
    x = 0;
    homePage.classList.add("hide");
    mainPage.classList.remove("hide");
    question.textContent = arr[0].question;
    answer1.textContent = arr[0].answers[0].option1;
    answer2.textContent = arr[0].answers[1].option2;
    answer3.textContent = arr[0].answers[2].option3;
    answer4.textContent = arr[0].answers[3].option4;
    answer1.onclick = function() {
        if (arr[0].answers[0].correct === true) {
            answer1.style.backgroundColor = "green";
            para.textContent = "Correct Answer";
            para.classList.add("correct");
            para.classList.remove("wrong");
            y += 1;
            score.textContent = y;
        } else {
            answer1.style.backgroundColor = "red";
            para.textContent = "Wrong Answer";
            para.classList.add("wrong");
            para.classList.remove("correct");
            y += 0;
            score.textContent = y;
        }
        nextBtn.classList.remove("hide");
        answerBoard.classList.add("hide");
    };
    answer2.onclick = function() {
        if (arr[0].answers[1].correct === true) {
            answer2.style.backgroundColor = "green";
            para.textContent = "Correct Answer";
            para.classList.add("correct");
            para.classList.remove("wrong");
            y += 1;
            score.textContent = y;
        } else {
            answer2.style.backgroundColor = "red";
            para.textContent = "Wrong Answer";
            para.classList.add("wrong");
            para.classList.remove("correct");
            y += 0;
            score.textContent = y;
        }
        nextBtn.classList.remove("hide");
        answerBoard.classList.add("hide");
    };
    answer3.onclick = function() {
        if (arr[0].answers[2].correct === true) {
            answer3.style.backgroundColor = "green";
            para.textContent = "Correct Answer";
            para.classList.add("correct");
            para.classList.remove("wrong");
            y += 1;
            score.textContent = y;
        } else {
            answer3.style.backgroundColor = "red";
            para.textContent = "Wrong Answer";
            para.classList.add("wrong");
            para.classList.remove("correct");
            y += 0;
            score.textContent = y;
        }
        nextBtn.classList.remove("hide");
        answerBoard.classList.add("hide");
    };
    answer4.onclick = function() {
        if (arr[0].answers[3].correct === true) {
            answer4.style.backgroundColor = "green";
            para.textContent = "Correct Answer";
            para.classList.add("correct");
            para.classList.remove("wrong");
            y += 1;
            score.textContent = y;
        } else {
            answer4.style.backgroundColor = "red";
            para.textContent = "Wrong Answer";
            para.classList.add("wrong");
            para.classList.remove("correct");
            y += 0;
            score.textContent = y;
        }
        nextBtn.classList.remove("hide");
        answerBoard.classList.add("hide");
    };
});

nextBtn.onclick = function() {
    answerBoard.classList.remove("hide");
    nextBtn.classList.add("hide");
    if (para.textContent === "" || para.textContent === "select an Option") {
        para.textContent = "select an Option";
        para.classList.add("select");
    } else {
        answer1.style.backgroundColor = "slateblue";
        answer2.style.backgroundColor = "slateblue";
        answer3.style.backgroundColor = "slateblue";
        answer4.style.backgroundColor = "slateblue";
        x += 1;
        if (x === arr.length) {
            mainPage.classList.add("hide");
            homePage.classList.add("hide");
            result.classList.remove("hide");
        } else {
            question.textContent = arr[x].question;
            answer1.textContent = arr[x].answers[0].option1;
            answer2.textContent = arr[x].answers[1].option2;
            answer3.textContent = arr[x].answers[2].option3;
            answer4.textContent = arr[x].answers[3].option4;
        }
        answer1.onclick = function() {
            if (arr[x].answers[0].correct === true) {
                answer1.style.backgroundColor = "green";
                para.textContent = "Correct Answer";
                para.classList.add("correct");
                para.classList.remove("wrong");
                y += 1;
                score.textContent = y;
            } else {
                answer1.style.backgroundColor = "red";
                para.textContent = "Wrong Answer";
                para.classList.add("wrong");
                para.classList.remove("correct");
                y += 0;
                score.textContent = y;
            }
            nextBtn.classList.remove("hide");
            answerBoard.classList.add("hide");
        };
        answer2.onclick = function() {
            if (arr[x].answers[1].correct === true) {
                answer2.style.backgroundColor = "green";
                para.textContent = "Correct Answer";
                para.classList.add("correct");
                para.classList.remove("wrong");
                y += 1;
                score.textContent = y;
            } else {
                answer2.style.backgroundColor = "red";
                para.textContent = "Wrong Answer";
                para.classList.add("wrong");
                para.classList.remove("correct");
                y += 0;
                score.textContent = y;
            }
            nextBtn.classList.remove("hide");
            answerBoard.classList.add("hide");
        };
        answer3.onclick = function() {
            if (arr[x].answers[2].correct === true) {
                answer3.style.backgroundColor = "green";
                para.textContent = "Correct Answer";
                para.classList.add("correct");
                para.classList.remove("wrong");
                y += 1;
                score.textContent = y;
            } else {
                answer3.style.backgroundColor = "red";
                para.textContent = "Wrong Answer";
                para.classList.add("wrong");
                para.classList.remove("correct");
                y += 0;
                score.textContent = y;
            }
            nextBtn.classList.remove("hide");
            answerBoard.classList.add("hide");
        };
        answer4.onclick = function() {
            if (arr[x].answers[3].correct === true) {
                answer4.style.backgroundColor = "green";
                para.textContent = "Correct Answer";
                para.classList.add("correct");
                para.classList.remove("wrong");
                y += 1;
                score.textContent = y;
            } else {
                answer4.style.backgroundColor = "red";
                para.textContent = "Wrong Answer";
                para.classList.add("wrong");
                para.classList.remove("correct");
                y += 0;
                score.textContent = y;
            }
            nextBtn.classList.remove("hide");
            answerBoard.classList.add("hide");
        };
        para.textContent = "";
    }
};