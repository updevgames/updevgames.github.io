let scrollPosition = 0;
const scrollAmount = 400;

function scrollGallery(direction) {
    const gallery = document.querySelector('.gallery-content');
    const wrapper = document.querySelector('.gallery-wrapper');

    // Отримуємо реальну ширину контейнера зі скріншотами
    const maxScroll = gallery.scrollWidth - wrapper.clientWidth;

    // Оновлюємо позицію прокрутки
    scrollPosition += direction * scrollAmount;

    // Обмежуємо прокрутку, щоб не виходити за межі
    if (scrollPosition < 0) scrollPosition = 0;
    if (scrollPosition > maxScroll) scrollPosition = maxScroll;

    gallery.style.transform = `translateX(${-scrollPosition}px)`;
}
