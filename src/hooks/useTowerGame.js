import { useState, useEffect, useCallback } from "react";

const INITIAL_BLOCK_WIDTH = 250;
const BLOCK_HEIGHT = 30;
const INITIAL_SPEED = 2;

export const useTowerGame = () => {
    const [blocks, setBlocks] = useState([
        {
            x: window.innerWidth / 2 - INITIAL_BLOCK_WIDTH / 2,
            width: INITIAL_BLOCK_WIDTH,
        },
    ]);
    const [currentBlock, setCurrentBlock] = useState({
        x: 0,
        width: INITIAL_BLOCK_WIDTH,
        speed: INITIAL_SPEED,
        direction: 1,
    });
    const [gameState, setGameState] = useState("waiting");

    useEffect(() => {
        if (gameState !== "playing") return;

        let animationFrameId;
        const animate = () => {
            setCurrentBlock((prev) => {
                let newX = prev.x + prev.speed * prev.direction;
                let newDirection = prev.direction;

                if (newX + prev.width > window.innerWidth || newX < 0) {
                    newDirection *= -1;
                    newX = prev.x + prev.speed * newDirection;
                }

                return { ...prev, x: newX, direction: newDirection };
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [gameState]);

    const placeBlock = useCallback(() => {
        if (gameState !== "playing") return;

        const topBlock = blocks[blocks.length - 1];
        const overlapStart = Math.max(topBlock.x, currentBlock.x);
        const overlapEnd = Math.min(
            topBlock.x + topBlock.width,
            currentBlock.x + currentBlock.width
        );
        const overlapWidth = overlapEnd - overlapStart;

        if (overlapWidth > 0) {
            const newBlock = { x: overlapStart, width: overlapWidth };
            setBlocks((prev) => [...prev, newBlock]);
            setCurrentBlock((prev) => ({
                ...prev,
                width: overlapWidth,
                speed: prev.speed + 0.1,
            }));
        } else {
            setGameState("gameOver");
        }
    }, [gameState, blocks, currentBlock]);

    const startGame = () => {
        setBlocks([
            {
                x: window.innerWidth / 2 - INITIAL_BLOCK_WIDTH / 2,
                width: INITIAL_BLOCK_WIDTH,
            },
        ]);
        setCurrentBlock({
            x: 0,
            width: INITIAL_BLOCK_WIDTH,
            speed: INITIAL_SPEED,
            direction: 1,
        });
        setGameState("playing");
    };

    return {
        blocks,
        currentBlock,
        gameState,
        placeBlock,
        startGame,
        BLOCK_HEIGHT,
    };
};
