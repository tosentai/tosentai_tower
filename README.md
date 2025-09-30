# Tosentai Tower 🗼

**Tosentai Tower** is a minimalist browser game built with React. The objective is to build the tallest tower possible by stacking blocks on top of each other. The player must press the spacebar at the right moment to stop a moving block directly above the previous one. Each imperfect placement reduces the width of the next block, making the game progressively more challenging.

The game features a modern "neon-noir" design with a dark background and bright, glowing blocks.

## How to Play

1. **Start the Game:** Click the "Start Game" button.
2. **Place a Block:** Press the **`Spacebar`** to stop the moving block.
3. **Objective:** Place the block as precisely as possible over the previous one. The part of the block that extends beyond the tower will be cut off.
4. **Game Over:** The game ends if you miss and fail to place a block on the tower.
5. **Score:** Your score is the number of successfully placed blocks.

## Features

-   **Simple Gameplay:** Easy to learn, but hard to master.
-   **Dynamic Difficulty:** Block width decreases with each mistake, increasing the challenge.
-   **Modern UI:** A sleek neon design with glowing effects and smooth camera movement.
-   **Responsive:** The game is playable on screens of all sizes.
-   **Built with React:** Uses modern hooks (`useState`, `useEffect`, `useCallback`) for state management and game logic.

## Tech Stack

-   **[React](https://reactjs.org/)** — A JavaScript library for building user interfaces.
-   **[Tailwind CSS](https://tailwindcss.com/)** — A utility-first CSS framework for rapid UI development.
-   **JavaScript (ES6+)** — The programming language used.
-   **Vite** — A fast frontend build tool.

## Getting Started

To run the project locally, follow these steps:[^1][^5]

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) (version 14 or higher) and npm/yarn installed on your machine.

### Installation \& Running

1. **Clone the repository:**

```bash
git clone https://your-repository-url/tower-game.git
```

2. **Navigate to the project directory:**

```bash
cd tower-game
```

3. **Install dependencies:**

```bash
npm install
```

_(or `yarn install`)_ 4. **Run in development mode:**

```bash
npm run dev
```

_(or `yarn dev`)_ 5. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) (the port may vary).

## Project Structure

```
/src
├── /components
│   ├── Block.jsx         # Component for a single tower block
│   ├── GameArea.jsx      # The main game area
│   ├── GameModal.jsx     # Modal for start/game over states
│   └── UILayer.jsx       # UI layer for score and title
│
├── /hooks
│   └── useTowerGame.js   # Custom hook containing all game logic
│
├── App.jsx               # The main application component
└── index.css             # Global styles and Tailwind CSS setup
```
