import React, { useEffect } from "react";
import { useTowerGame } from "./hooks/useTowerGame";
import GameArea from "./components/GameArea";
import UILayer from "./components/UILayer";
import GameModal from "./components/GameModal";

function App() {
    const {
        blocks,
        currentBlock,
        gameState,
        placeBlock,
        startGame,
        BLOCK_HEIGHT,
    } = useTowerGame();

    const score = blocks.length - 1;

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.code === "Space" || event.key === " ") {
                event.preventDefault();
                placeBlock();
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [placeBlock]);

    return (
        <div className="w-screen h-screen bg-[#0d0d1a] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 to-[#0d0d1a] select-none flex justify-center items-center">
            <div className="relative w-full h-full overflow-hidden">
                <UILayer score={score} />
                <GameModal
                    gameState={gameState}
                    score={score}
                    onStart={startGame}
                />
                <GameArea
                    blocks={blocks}
                    currentBlock={currentBlock}
                    gameState={gameState}
                    blockHeight={BLOCK_HEIGHT}
                />
            </div>
        </div>
    );
}

export default App;
