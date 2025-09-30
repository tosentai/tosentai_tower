import React from "react";

const GameModal = ({ gameState, score, onStart }) => {
    if (gameState === "playing") return null;

    const isGameOver = gameState === "gameOver";

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-20">
            <div className="bg-gray-900/80 border border-cyan-500/30 p-10 rounded-2xl text-center shadow-lg shadow-cyan-500/20">
                <h2
                    className="text-5xl font-extrabold mb-4 text-white"
                    style={{ textShadow: "0 0 15px" }}
                >
                    {isGameOver ? "Game Over" : "Build the Tower"}
                </h2>

                {isGameOver && (
                    <p className="text-2xl mb-8 text-gray-300">
                        Your Score:{" "}
                        <span className="font-bold text-cyan-400">{score}</span>
                    </p>
                )}

                <button
                    onClick={onStart}
                    className="bg-cyan-400 text-gray-900 font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/50 focus:outline-none focus:ring-4 focus:ring-cyan-300"
                >
                    {isGameOver ? "Try Again" : "Start Game"}
                </button>
            </div>
        </div>
    );
};

export default GameModal;
