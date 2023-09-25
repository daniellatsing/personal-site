import React from "react";
import Typist from "react-typist";
import FadeInSection from "./FadeInSection";
import MailRoundedIcon from '@mui/icons-material/MailRounded';

import ".././styles/Intro.css";
import "react-typist/dist/Typist.css";

class Intro extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: "1",
            visible: true
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }

    render() {
        return (
            <div className="intro">
                <Typist 
                    avgTypingDelay={500}
                    cursor={{ 
                        show: true, 
                        blink: true, 
                        element: '|', 
                        hideWhenDone: true, 
                        hideWhenDoneDelay: 500,
                    }}
                >
                    <span className="intro-title">
                        {"hi, my name is "}
                        <span className="intro-name">{"daniella"}</span>
                        {"."}
                    </span>
                </Typist> 
                <FadeInSection>
                    <div className="intro-subtitle">I </div>
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
                        <MailRoundedIcon></MailRoundedIcon>
                        {"  " + "Send a message!"}
                    </a>
                </FadeInSection>
            </div>
        );
    }
}

export default Intro;