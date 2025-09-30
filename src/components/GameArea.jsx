import React from "react";
import Block from "./Block";

const GameArea = ({ blocks, currentBlock, gameState, blockHeight }) => {
    const cameraY = -Math.max(0, (blocks.length - 10) * blockHeight);

    return (
        <div
            className="absolute w-full h-full bottom-0 transition-transform duration-500 ease-out"
            style={{ transform: `translateY(${cameraY}px)` }}
        >
            {blocks.map((block, index) => (
                <Block
                    key={index}
                    x={block.x}
                    y={index * blockHeight}
                    width={block.width}
                    height={blockHeight}
                    index={index}
                />
            ))}

            {gameState === "playing" && (
                <Block
                    x={currentBlock.x}
                    y={blocks.length * blockHeight}
                    width={currentBlock.width}
                    height={blockHeight}
                    index={blocks.length}
                />
            )}
        </div>
    );
};

export default GameArea;
