

const erfaringItems = document.querySelectorAll('.erfaring-item');
const detaljerSektioner = document.querySelectorAll('.detaljer-sektion');
const lukDetaljerKnapper = document.querySelectorAll('.luk-detaljer');

erfaringItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.dataset.target;
        document.getElementById(target).classList.remove('skjult');
    });
});

lukDetaljerKnapper.forEach(knap => {
    knap.addEventListener('click', () => {
        knap.parentElement.classList.add('skjult');
    });
});