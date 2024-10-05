let score = 0;
const mole = document.getElementById('mole');
const scoreDisplay = document.getElementById('score');

function randomPosition() {
    const container = document.querySelector('.game-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const x = Math.random() * (containerWidth - 60); // Mole width
    const y = Math.random() * (containerHeight - 60); // Mole height

    mole.style.left = `${x}px`;
    mole.style.top = `${y}px`;
}

function showMole() {
    mole.classList.add('visible');
    randomPosition();
    setTimeout(() => {
        mole.classList.remove('visible');
        showMole(); // Show next mole
    }, 1000); // Mole appears for 1 second
}

mole.addEventListener('click', () => {
    if (mole.classList.contains('visible')) {
        score++;
        scoreDisplay.textContent = score;
    }
});

showMole(); // Start the game
