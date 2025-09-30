import React from "react";

const Block = ({ x, y, width, height, index }) => {
    const hue = 200 + index * 5;
    const color = `hsl(${hue}, 80%, 60%)`;

    const style = {
        left: `${x}px`,
        bottom: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        boxShadow: `0 0 15px 0px ${color}`,
        backgroundImage: `linear-gradient(to top, hsla(0, 0%, 0%, 0.3), transparent 60%)`,
    };

    return <div className="absolute rounded-md" style={style}></div>;
};

export default Block;
