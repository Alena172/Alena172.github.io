

document.querySelector('.questions').addEventListener('click', function (event) {
    if (event.target.classList.contains('question')) {
        const faqItem = event.target.closest('.faq-item');
        const answer = faqItem.querySelector('.answer');
        answer.classList.toggle('open');
        if (answer.classList.contains('open')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = 0;
        }
    }
});

