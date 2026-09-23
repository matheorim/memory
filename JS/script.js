let dimension = 50;
let imgStart = Math.floor(Math.random() * 100);

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
        card.classList.add('card');
        card.dataset.index = index;
        
        const frontFace = document.createElement('img');
        frontFace.src = url;
        frontFace.classList.add('front-face');
        card.appendChild(frontFace);
        board.appendChild(card);
    });
}


initGame();
console.log(urls);
console.log(cards);