let dimension = 150;
let imgStart = Math.floor(Math.random() * 100);

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedCount = 0;

let seconds = 0;
let timerInterval = null;

const urls = [];

for(let i = 0; i < 8; i++) {
    const url = `https://picsum.photos/id/${imgStart + i}/${dimension}/${dimension}`;
    urls.push(url);
}

let cards = [...urls,...urls];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initGame() {
    cards = shuffle(cards);
    const board = document.getElementById('game-board'); 
    board.innerHTML = '';
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    moves = 0;
    matchedCount = 0;
    seconds = 0;
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    document.getElementById('timer').textContent = formatTime(0);
    document.getElementById('result').textContent = '';
    cards.forEach((url, index) => {
        const card = document.createElement('div');
        card.dataset.value = url;
        card.classList.add('card');
        card.dataset.index = index;
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.addEventListener('click', () => handleCardClick(card));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick(card);
            }
        });
        board.appendChild(card);
    });
    startTimer();
}


function handleCardClick(card) {
    if (lockBoard || card === firstCard || card.classList.contains('matched')) {
        return;
    }
    if (!card.querySelector('img')) {
        const frontFace = document.createElement('img');
        frontFace.src = card.dataset.value;
        frontFace.classList.add('front-face');
        card.appendChild(frontFace);
    }
    if (firstCard === null) {
        firstCard = card;
    }
    else if (secondCard === null) {
        secondCard = card;
        lockBoard = true;
        moves++;
        checkMatch();
    }
}

function checkMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matchedCount++;
        firstCard = null;
        secondCard = null;
        lockBoard = false;
        checkVictory();
    }  
    else{
        setTimeout(() => {
            firstCard.innerHTML = '';
            secondCard.innerHTML = '';
            firstCard = null;
            secondCard = null;
            lockBoard = false;
        },800);
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`; 
}

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        document.getElementById('timer').textContent = formatTime(seconds);
    },1000);
}

function checkVictory() {
    if (matchedCount === cards.length/2) {
        clearInterval(timerInterval);
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `Bien joué! Vous avez gagné en ${moves} mouvements et ${formatTime(seconds)}.`;
    }
}

initGame();
console.log(urls);
console.log(cards);