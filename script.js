const quizData = [
    {
        question: 'When was JavaScript launched?',
        a: '1995',
        b: '1595',
        c: '1955',
        d: '1817',
        correct: 'a'
    }, {
        question: 'What is the best programming language?',
        a: 'python',
        b: 'Java',
        c: 'C++',
        d: 'JavaScript',
        correct: 'a'
    }, {
        question: 'What is the most used programming language in 2020?',
        a: 'python',
        b: 'JavaScript',
        c: 'C#',
        d: 'Ruby',
        correct: 'a'
    }, {
        question: 'Who is the president of Nigeria?',
        a: 'Adewale Abiola',
        b: 'Abiola Ajimobi',
        c: 'Muhammadu Buhari',
        d: 'Olusegun Obasanjo',
        correct: 'c'
    }, {
        question: 'What does HTML stand for?',
        a: 'Helicopters Termininals Motorboats Lamboginis',
        b: 'Hypertext Makeup Language',
        c: 'Hypertext Markup Language',
        d: 'Hynetic Made Upper Language',
        correct: 'b'

    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

  
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer =  answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

        
    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
         currentQuiz++;     
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
              quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
              `;
           
            }
      }

});