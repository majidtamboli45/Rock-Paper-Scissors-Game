🌐 Live Demo

👉 (Add your deployed GitHub Pages / Netlify link here)
Example:
https://yourusername.github.io/rock-paper-scissors

📌 Project Overview

The Rock Paper Scissors Game is an interactive browser-based game developed using HTML, CSS, and JavaScript. It allows a user to compete against the computer in a classic Rock–Paper–Scissors match.

The application dynamically generates the computer’s move using randomized logic and determines the winner using structured conditional statements. Scores are updated in real time, and the interface provides clear visual feedback for win, loss, and draw outcomes.

This project demonstrates strong understanding of DOM manipulation, modular JavaScript functions, event handling, and UI feedback design.

🚀 Features

🎯 Clickable interactive game choices

🤖 Random computer move generation

🧠 Automated winner determination logic

📊 Live scoreboard tracking

🎨 Dynamic color-based result feedback

💻 Clean and responsive user interface

⚡ Real-time DOM updates

📸 Screenshots
🟢 Winning Condition

When the user wins, the score updates and a green success message is displayed.

<img src="./Screenshot 2026-03-03 111206.png" width="800"/>
🔴 Losing Condition

When the computer wins, the score updates and a red failure message is displayed.

<img src="./Screenshot 2026-03-03 111134.png" width="800"/>
🔵 Draw Condition

When both choices match, a draw message is displayed.

<img src="./Screenshot 2026-03-03 111150.png" width="800"/>
🎮 Initial Game Interface

Default game layout before making a move.

<img src="./dbd7103d-e909-4bd8-92e2-c86290f0c800.png" width="800"/>
🛠️ Tech Stack

HTML5 – Structure and semantic layout

CSS3 – Styling, Flexbox layout, hover effects

JavaScript (ES6) – Game logic, DOM manipulation, event handling



⚙️ Game Logic Explanation

The player selects Rock, Paper, or Scissors.

The computer generates a random choice using Math.random().

The program compares both selections:

Rock beats Scissors

Paper beats Rock

Scissors beats Paper

The winner is determined.

Scores update dynamically.

The result message background changes:

🟢 Green → User wins

🔴 Red → Computer wins

🔵 Dark Blue → Draw

The logic is implemented using modular functions for clarity and maintainability.

💻 How to Run Locally

Clone the repository:

git clone https://github.com/yourusername/rock-paper-scissors.git

Navigate to the project folder:

cd rock-paper-scissors

Open index.html in any modern web browser.

🚀 Deployment (GitHub Pages)

Go to your repository on GitHub

Click Settings → Pages

Select branch: main

Save

Your project will be live at:

https://yourusername.github.io/repository-name
