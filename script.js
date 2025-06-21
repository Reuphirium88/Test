document.addEventListener('DOMContentLoaded', () => {
    // Получаем все элементы с классом 'card'
    const cards = document.querySelectorAll('.card');

    // Создаем Intersection Observer
    // Intersection Observer API позволяет асинхронно отслеживать пересечение элемента с областью просмотра
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Если элемент виден в области просмотра
            if (entry.isIntersecting) {
                // Добавляем класс 'is-visible', который запускает анимацию появления
                entry.target.classList.add('is-visible');
                // Прекращаем наблюдение за этим элементом, так как он уже появился
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Опции Intersection Observer
        // rootMargin: '0px 0px -50px 0px' - уменьшает область видимости на 50px снизу,
        // что позволяет начать анимацию немного раньше, чем элемент полностью появится.
        rootMargin: '0px 0px -50px 0px',
        // threshold: 0.1 - означает, что колбэк будет вызван, когда 10% элемента будет видно.
        threshold: 0.1
    });

    // Начинаем наблюдать за каждой карточкой
    cards.forEach(card => {
        observer.observe(card);
    });
});
