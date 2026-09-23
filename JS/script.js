let dimension = 50;
let imgStart = Math.floor(Math.random() * 100);

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedCount = 0;

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
    cards.forEach((url, index) => {
        const card = document.createElement('div');
        card.dataset.value = url;
        card.classList.add('card');
        card.dataset.index = index;
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.addEventListener('click', () => handleCardClick(card));
        board.appendChild(card);
    });
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
        checkForMatch();
    }
}

function checkForMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matchedCount++;
        firstCard = null;
        secondCard = null;
        lockBoard = false;
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

initGame();
console.log(urls);
console.log(cards);