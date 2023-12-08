
// function toggleAnswer(element) {
//     const answer = element.nextElementSibling;
//     answer.classList.toggle('active');
// }

// notif.addEventListener('click', function(event) {
//     if (event.target.className == 'questions') {
//       const question = event.target.closest('.question');
//       if (notification) {
//         notification.remove();
//       }
//     }
//   });

const questionsContainer = document.querySelector('.questions');

// Добавляем обработчик событий к контейнеру
questionsContainer.addEventListener('click', function (event) {
    // Проверяем, был ли клик по элементу с классом "question"
    if (event.target.classList.contains('question')) {
        toggleAnswer(event.target);
    }
});

// Функция для переключения ответа
function toggleAnswer(questionElement) {
    const answerElement = questionElement.nextElementSibling;
    answerElement.classList.toggle('active');
}