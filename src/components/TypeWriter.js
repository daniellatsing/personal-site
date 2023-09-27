import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ".././styles/TypeWriter.css";

export function TypeWriter() {
    // const [greeting] = useTypewriter({
    //     words: ["hi, my name is daniella"],
    //     loop: 1,
    //     typeSpeed: 130,
    // });

    const [text] = useTypewriter({
        words: [" daniella"],
        loop: 1,
        typeSpeed: 130,
    });

    // const text = ([text]) => { 
    //     if (greeting.isType === false) {
    //         useTypewriter({
    //             words: ["daniella"],
    //             loop: 1,
    //             typeSpeed: 130,
    //             delaySpeed: 500,
    //         });
    //     };
    // }

    return (
        <h1 className="typewriter-greeting">
            hi, my name is
            {/* {greeting}  */}
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