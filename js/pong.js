// Whack-a-Mole O'yini uchun sozlamalar
const gameBoard = document.getElementById("gameBoard");

// Maydon sozlamalari
const gridSize = 3; // 3x3 panjara
const moleDuration = 1000; // Molning ko'rinish muddati (ms)
let score = 0;

// O'yin maydonini yaratish
function createGameBoard() {
    gameBoard.style.display = "grid";
    gameBoard.style.gridTemplateRows = repeat(${gridSize}, 1fr);
    gameBoard.style.gridTemplateColumns = repeat(${gridSize}, 1fr);
    gameBoard.style.gap = "10px";

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gameBoard.appendChild(cell);
    }
}

// Mol paydo bo'lishi
function showMole() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.classList.remove("mole")); // Hamma celllardan "mole"ni olib tashlash

    const randomCell = cells[Math.floor(Math.random() * cells.length)];
    randomCell.classList.add("mole");

    // Molga bosish hodisasi
    randomCell.onclick = () => {
        if (randomCell.classList.contains("mole")) {
            score++;
            randomCell.classList.remove("mole");
            updateScore();
        }
    };

    setTimeout(() => {
        randomCell.classList.remove("mole");
    }, moleDuration);
}

// Hisobni yangilash
function updateScore() {
    document.getElementById("score").innerText = Score: ${score};
}

// O'yinni boshlash
function startGame() {
    setInterval(showMole, moleDuration + 200);
}

createGameBoard();
startGame();
