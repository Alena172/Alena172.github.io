const rows = document.querySelectorAll('tr');
rows.forEach((row) => {
    row.addEventListener('click', () => {
        const description = row.querySelector('td:first-child').textContent;
        const details = getDescription(description);
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown');
        dropdown.textContent = details;
        row.appendChild(dropdown);
    });
});
function getDescription(service) {
    // Здесь можно использовать switch или if-else для определения деталей для каждой услуги
    switch (service) {
        case 'Haircut':
            return 'A haircut is a styling of the hair.';
        case 'Manicure':
            return 'A manicure is a beauty treatment for the hands and nails.';
        case 'Pedicure':
            return 'A pedicure is a beauty treatment for the feet and toenails.';
        case 'Facial':
            return 'A facial is a skin treatment for the face.';
        default:
            return '';
    }
}
