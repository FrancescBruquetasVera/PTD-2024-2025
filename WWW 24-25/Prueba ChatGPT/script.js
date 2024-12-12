const words = ['javascript', 'html', 'css', 'nodejs', 'react', 'angular', 'python'];
let chosenWord = '';
let remainingAttempts = 6;
let guessedLetters = [];
let wordDisplay = [];

// Función para seleccionar una palabra aleatoria
function chooseWord() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    wordDisplay = Array(chosenWord.length).fill('_');
    guessedLetters = [];
}

// Función para actualizar el display de la palabra
function updateWordDisplay() {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = wordDisplay.join(' ');
}

// Función para actualizar la imagen del ahorcado
function updateHangmanImage() {
    const hangmanImage = document.getElementById('hangman');
    hangmanImage.src = `images/${remainingAttempts}.png`;
}

// Función para manejar los intentos de las letras
function guessLetter(letter) {
    if (guessedLetters.includes(letter)) {
        return;
    }
    guessedLetters.push(letter);

    if (chosenWord.includes(letter)) {
        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === letter) {
                wordDisplay[i] = letter;
            }
        }
    } else {
        remainingAttempts--;
        updateHangmanImage();
    }

    updateWordDisplay();
    document.getElementById('remaining').textContent = remainingAttempts;

    if (remainingAttempts === 0) {
        document.getElementById('message').textContent = '¡Has perdido! La palabra era: ' + chosenWord;
    } else if (!wordDisplay.includes('_')) {
        document.getElementById('message').textContent = '¡Has ganado!';
    }
}

// Función para generar las letras del abecedario
function generateLetters() {
    const lettersContainer = document.getElementById('letters');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    alphabet.forEach(letter => {
        const letterElement = document.createElement('div');
        letterElement.textContent = letter;
        letterElement.classList.add('letter');
        letterElement.addEventListener('click', () => guessLetter(letter));
        lettersContainer.appendChild(letterElement);
    });
}

// Función para inicializar el juego
function startGame() {
    remainingAttempts = 6;
    document.getElementById('message').textContent = '';
    document.getElementById('remaining').textContent = remainingAttempts;
    chooseWord();
    updateWordDisplay();
    updateHangmanImage();
    generateLetters();
}

// Empezamos el juego cuando cargue la página
window.onload = startGame;