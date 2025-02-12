const submitBtn = document.querySelector('.submit-btn');
const wordInput = document.querySelector('.word');
const hintInput = document.querySelector('.hint');

const hintText = document.querySelector('.hint-question');
const gameSubmit = document.querySelector('.game-submit');

const lettersBlock = document.querySelector('.letters-blocks');
let hintWord;

wordInput.addEventListener('input', function () {
    this.value = this.value.replace(/[^a-z]/g, '');
});

function createDiv() {
    const newDiv = document.createElement('input');
    newDiv.classList.add('one-letter');
    newDiv.setAttribute('maxlength', 1);
    lettersBlock.appendChild(newDiv);
}

function letterBlockUnhide() {
    lettersBlock.classList.remove('hidden');
}

function unHideAttempts() {
    const attemptsDiv = document.querySelector('.guess-attempts');
    attemptsDiv.classList.remove('hidden');
}

let wordLength;
let inputLetters;

const restartBtn = document.querySelector('.restart-button');

submitBtn.addEventListener('click', function () {
    if (wordInput.value === "") {
        wordInput.style.boxShadow = "inset 0 0 5px red";
    } else if (wordInput.value.length >= 1) {
        wordInput.style.boxShadow = "none";
    }

    if (hintInput.value === "") {
        hintInput.style.boxShadow = "inset 0 0 5px red";
    } else if (hintInput.value.length >= 1) {
        hintInput.style.boxShadow = "none";
    }

    if (wordInput.value.length >= 1 && hintInput.value.length >= 1) {
        hintWord = hintInput.value;
        hintText.classList.remove('hidden');
        gameSubmit.classList.add('hidden');
        hintText.innerText = hintWord;
        restartBtn.classList.remove('hidden');
        //code by © Eugeniu Rascu
        Array.from(wordInput.value).forEach(() => {
            createDiv();
        });
        letterBlockUnhide();
        document.querySelector('.one-letter').focus();

        inputLetters = document.querySelectorAll('.one-letter');
        inputLetters.forEach(function (item, index) {
            item.addEventListener('input', function () {
                const letter = this.value.toLowerCase();
                const word = wordInput.value.toLowerCase();

                if (letter !== word.charAt(index)) {
                    this.classList.add('wrong');
                    this.value = '';
                    if (attemptsBlock.innerText > 0) {
                        --attemptsBlock.innerText;
                    }
                } else {
                    this.classList.remove('wrong');
                    this.classList.add('right');
                }

                if (letter === word.charAt(index)) {
                    this.classList.add('right');
                    let indexString = "";
                    indexString = index + 1;
                    if (inputLetters[indexString]) {
                        inputLetters[indexString].focus(); //adding focus on element
                    }
                }

                let wholeWord = '';

                inputLetters.forEach(function (item) {
                    wholeWord += item.value;
                });

                if (wholeWord === wordInput.value) {
                    hintText.classList.add('hidden');
                    lettersBlock.classList.add('hidden');
                    document.querySelector('.guess-attempts').classList.add('hidden');
                    document.querySelector('.you-won').classList.remove('hidden');
                }

                if (attemptsBlock.innerText === '0') {
                    hintText.classList.add('hidden');
                    lettersBlock.classList.add('hidden');
                    document.querySelector('.guess-attempts').classList.add('hidden');
                    document.querySelector('.you-lost').classList.remove('hidden');
                }
            });
        });

        const attemptsBlock = document.querySelector('.attempts');
        wordLength = wordInput.value.length;
        // attemptsBlock.innerText = wordLength - 2; //adding attempts as many as the word minus two
        attemptsBlock.innerText = 3;
        unHideAttempts();
    }
});

restartBtn.addEventListener('click', function () {
    wordInput.value = "";
    hintInput.value = "";
    hintText.classList.add('hidden');
    gameSubmit.classList.remove('hidden');
    restartBtn.classList.add('hidden');
    lettersBlock.classList.add('hidden');
    document.querySelector('.you-won').classList.add('hidden');
    document.querySelector('.you-lost').classList.add('hidden');
    document.querySelector('.guess-attempts').classList.add('hidden');
    inputLetters.forEach(function (item) {
        item.remove();
    });
});

// Array.from(wordInput.value[0])


// const inputLetters = document.querySelectorAll('.one-letter');

// function guessedLetters() {
//     inputLetters.forEach(function (item) {
//         console.log(this);
        // item.addEventListener('change', function () {
        //     console.log(item);
        // });
    // });
    // if (inputLetters.innerText == item) {
    //     this.classList.add('right');
    // }
// }

//wordInput.value[0]