import React from "react";
import "../styles/About.css";

class About extends React.Component {

    render() {
        const about = (
            <p>
                I am currently a fourth-year student at the
                <a href="https://www.washington.edu/about/" className="about-school"> University of Washington</a>, studying
                <a href="https://ischool.uw.edu/programs/informatics/what-is-informatics" className="about-major"> Informatics</a>.
                I previously studied <a href="https://www.biology.washington.edu/about-us" className="about-major"> Biology </a> 
                under the Cellular, Molecular, and Developmental track, and received my (Transfer) Associates degree from 
                <a href="https://www.greenriver.edu/campus/welcome-desk/" className="about-school"> Green River College </a>
                in Biology.
            </p>
        );

        const hobbies = (
            <p>
                Outside of academics, I relax at coffee shops and cafes, and spend my 
                time learning current design trends, playing video games, and
                self-studying Korean. 
            </p>
        );

        const tech_stack = [
            "Java",
            "Javascript",
            "React.js",
            "HTML & CSS",
            "R"
        ];

        const tech_item = tech_stack.map(stack => <li>{stack}</li>);

        return (
            <div id="about">
                <div className="about-header">
                    <span className="about-title">. about me</span>
                </div>

                <div className="about-content">
                    <div className="about-desc">
                        {[about]}
                        {/* CHANGE BELOW TEXT LATER */}
                        <p>Here are some technologies I have been working with recently:</p>
                        <ul className="tech-stack">
                            {tech_stack.map(function (tech_item, i) {
                                return (
                                    <li>{tech_item}</li>
                                );
                            })}
                        </ul>
                        {[hobbies]}
                    </div>
                    <div className="about-image">
                        <img src="/images/capybara.gif" alt="capybara"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;