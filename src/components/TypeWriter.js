import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ".././styles/TypeWriter.css";

export function TypeWriter() {
    const [text] = useTypewriter({
        words: [" daniella"],
        loop: 1,
        typeSpeed: 130,
    });

    return (
        <h1 className="typewriter-greeting">
            hi, my name is
            <span className="typewriter-name">
                {text}
            </span>
            .
            <span className="typewriter-cursor">
                <Cursor 
                    cursorStyle="<"
                    cursorBlinking={true}
                />
            </span>
        </h1>
    );
}