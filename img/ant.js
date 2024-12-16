const questions = [
    {
        question: "Что такое антибиотики?",
        options: ["Лекарства, убивающие бактерии", "Лекарства, убивающие вирусы", "Лекарства, убивающие грибки"],
        answer: 0
    },
    {
        question: "Какой из этих антибиотиков является пенициллином?",
        options: ["Цефалексин", "Амоксициллин", "Тетрациклин"],
        answer: 1
    },
    {
        question: "Как антибиотики влияют на микрофлору кишечника?",
        options: ["Улучшает", "Не влияет", "Ухудшает"],
        answer: 2
    },
    {
        question: "Какой антибиотик используется для лечения туберкулеза?",
        options: ["Пенициллин", "Рифампицин", "Ципрофлоксацин"],
        answer: 1
    },
    {
        question: "Какой из этих антибиотиков является макролидом?",
        options: ["Азитромицин", "Ампициллин", "Кларитромицин"],
        answer: 0
    },
    {
        question: "Что такое резистентность к антибиотикам?",
        options: ["Способность бактерий выживать", "Способность антибиотиков убивать вирусы", "Способность антибиотиков действовать на грибки"],
        answer: 0
    },
    {
        question: "Какой антибиотик часто используется для лечения инфекций мочевыводящих путей?",
        options: ["Амоксициллин", "Нитрофурантоин", "Цефалексин"],
        answer: 1
    },
    {
        question: "Какой антибиотик используется для лечения пневмонии?",
        options: ["Амоксициллин", "Ципрофлоксацин", "Клиндамицин"],
        answer: 0
    },
    {
        question: "Какой из этих антибиотиков является фторхинолоном?",
        options: ["Левофлоксацин", "Тетрациклин", "Пенициллин"],
        answer: 0
    },
    {
        question: "Какой антибиотик используется для лечения стрептококковых инфекций?",
        options: ["Амоксициллин", "Цефалексин", "Клиндамицин"],
        answer: 0
    },
    {
        question: "Какой из этих антибиотиков является гликопептидом?",
        options: ["Ванкомицин", "Цефалексин", "Азитромицин"],
        answer: 0
    },
    {
        question: "Какой антибиотик используется для лечения инфекций кожи?",
        options: ["Клиндамицин", "Ципрофлоксацин", "Амоксициллин"],
        answer: 0
    },
    {
        question: "Какой из этих антибиотиков является карбапенемом?",
        options: ["Имипенем", "Цефалексин", "Тетрациклин"],
        answer: 0
    },
    {
        question: "Какой антибиотик используется для лечения инфекций, вызванных стафилококками?",
        options: ["Метициллин", "Амоксициллин", "Цефалексин"],
        answer: 0
    }
];

// Функция для отображения номеров вопросов
function displayQuestionNumbers() {
    const questionNumbersContainer = document.getElementById('question-numbers');
    const totalQuestions = questions.length;
    document.getElementById('total-questions').textContent = totalQuestions;

    questions.forEach((_, index) => {
        const questionNumber = document.createElement('span');
        questionNumber.classList.add('question-number');
        questionNumber.textContent = index + 1;
        questionNumber.onclick = () => showQuestion(index + 1);
        questionNumbersContainer.appendChild(questionNumber);
    });
}

// Функция для отображения вопроса
function showQuestion(index) {
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = ''; // Очищаем контейнер

    const questionData = questions[index - 1];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `<p>${questionData.question}</p>`;

    questionData.options.forEach((option, i) => {
        questionDiv.innerHTML += `
            <label>
                <input type="radio" name="question${index}" value="${i}" onchange="checkAnswer(${index}, ${i})">
                ${option}
            </label>
            <br>
            <div id="feedback${index}${i}" class="feedback"></div>
        `;
    });

    questionsContainer.appendChild(questionDiv);

    // Обновляем текущий номер вопроса
    document.getElementById('current-question').innerHTML = `Вопрос ${index} из <span id="total-questions">${questions.length}</span>`;
}

// Функция для проверки ответа
function checkAnswer(questionIndex, selectedOption) {
    const questionData = questions[questionIndex - 1];
    const feedbackDivs = document.querySelectorAll(`.feedback`);

    feedbackDivs.forEach(div => div.textContent = ''); // Очищаем предыдущие отзывы

    const feedbackDiv = document.getElementById(`feedback${questionIndex}${selectedOption}`);
    if (selectedOption === questionData.answer) {
        feedbackDiv.textContent = 'Правильный ответ!';
        feedbackDiv.className = 'feedback correct';
    } else {
        feedbackDiv.textContent = 'Неправильный ответ!';
        feedbackDiv.className = 'feedback incorrect';
    }
}

// Инициализация
displayQuestionNumbers();
showQuestion(1);