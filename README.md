# Guess the Word

The **Guess the Word** game is an interactive word-guessing game designed to challenge and entertain players. The objective is simple: guess the hidden word by entering one letter at a time. Players receive hints to assist them in uncovering the word. The game dynamically creates input fields based on the length of the word and provides real-time feedback on whether each guessed letter is correct or incorrect.

## Features:
- <b>Word Input:</b> Players can set a custom word and hint for others to guess.
- <b>Dynamic Letter Inputs:</b> Input fields are dynamically generated based on the length of the word.
- <b>Hint System:</b> A hint is provided to help players guess the word.
- <b>Real-Time Feedback:</b> Each guessed letter is validated immediately, with visual cues indicating correctness.
- <b>Win/Loss Conditions:</b> Players win by correctly guessing all letters of the word within a limited number of attempts. If they run out of attempts, the game ends.

## How to Use

**Set Up the Game:**
- Enter a word in the <b>"Word"</b> field. If uppercase letters are entered, they will automatically be converted to lowercase. 
- Provide a hint in the <b>"Hint"</b> field to assist the player in guessing the word.
- Click the Submit button to start the game.

**Play the Game:**
- A series of input fields will appear, corresponding to the length of the word.
- Enter one letter at a time into each input field.
- If the guessed letter matches the corresponding letter in the word, the input field border will turn green.
- If the guessed letter is incorrect, the input field border will turn red, and the number of remaining attempts will decrease.

**Winning or Losing:**
- <b>Win:</b> If all letters are guessed correctly before running out of attempts, the "Congrats, You Won!" message will appear.
- <b>Lose:</b> If the player runs out of attempts without guessing the word, the "You Lost! Game Over!" message will appear.

**Restart the Game:**
- Click the <b>Restart</b> button to reset the game.


## Setup Instructions

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/erascu/vanilla-js-game.git
cd vanilla-js-game
```

### 2. Open the Project

- Open the <b>index.html</b> file in your preferred web browser.
- Alternatively, you can use a local server for development purposes:
```bash
npx http-server
```
Then, visit http://localhost:8080 in your browser.

### 3. Customize the Application

- Modify the <b>style.css</b> file to change the appearance of the application.
- Update the <b>script.js</b> file to add more functionality or improve existing features.

## Technologies Used

- <b>HTML5:</b> Structure of the web page.
- <b>CSS3:</b> Styling and layout of the application.
- <b>JavaScript:</b> Dynamic behavior and interactivity.
