import React from "react";
import Jobs from "./Jobs";
import "../styles/Experience.css";

class Experience extends React.Component {
    render() {
        return (
            <div id="experience">
                <div className="experience-header">
                    <span className="experience-title">. experience</span>
                </div>
                <Jobs></Jobs>
            </div>
        )
    }
}

export default Experience;