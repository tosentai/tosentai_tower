import React from "react";

const UILayer = ({ score }) => {
    return (
        <div
            className="absolute top-8 left-8 z-10 text-white"
            style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
        >
            <h1 className="text-4xl font-black tracking-wider uppercase">
                Tosentai Tower
            </h1>
            <p className="text-3xl font-bold mt-2">Score: {score}</p>
        </div>
    );
};

export default UILayer;
