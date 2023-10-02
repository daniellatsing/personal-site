import React from "react";
import "../styles/Footer.css";

class Footer extends React.Component {
 
    render() {
        return (
            <div id="credits">
                <div className="footer-credits">
                    <div>Loosely designed in <a href="https://www.figma.com">Figma</a>, and built in 
                    <a href="https://code.visualstudio.com"> Visual Studio Code</a> by Daniella Tsing.</div>
                    <div>© 2023 Daniella Tsing. All rights reserved. </div>
                </div>
            </div>
        );
    }
}

export default Footer;