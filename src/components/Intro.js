import React from "react";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { TypeWriter } from "./TypeWriter";

import ".././styles/Intro.css";
import "react-typist/dist/Typist.css";

class Intro extends React.Component {

    render() {
        return (
            <div id="intro">
                <TypeWriter />
                <div className="intro-subtitle"> 
                    Just trying to create meaningful, accessible 
                    solutions through coding and design.
                </div>
                <div className="intro-desc">
                    Nice to meet you! I am a fourth-year student at the University 
                    of Washington, studying Informatics. I am greatly interested 
                    in frontend development, human-computer interactions, and everything
                    in between. I am always seeking opportunities to grow and learn!
                </div>
                <a
                    href="mailto:daniellatsing@gmail.com"
                    className="intro-contact"
                >
                    <EmailRoundedIcon></EmailRoundedIcon>
                    {"  " + "Send a message!"}
                </a>
            </div>
        );
    }
}

export default Intro;