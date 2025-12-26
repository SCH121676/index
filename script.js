function beat() {
    const card = document.querySelector('.card');
    card.classList.add('beat');

    setTimeout(() => {
        card.classList.remove('beat');
    }, 400);
}

/* Floating hearts generator */
const heartsContainer = document.querySelector('.floating-hearts');

setInterval(() => {
    const heart = document.createElement('span');
    heart.innerText = '💗';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 500);
