const correctAnswer = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const results = document.querySelector('.result');
const span = document.querySelector('body > div.result.py-4.d-none.bg-light.text-center > div > p > span');
const toHome = document.querySelector('.toHome');


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
            score += 25;
        }
    });

    // show results on page
    scrollTo(0, 0);
    results.classList.remove('d-none');

    // result animation
    let output = 0;
    let timer = setInterval(() => {
        results.querySelector('span').textContent = `${output}%`;
        if ( output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);

});

