import React from "react";
import ExternalLinks from "./ExternalLinks";
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';

import "../styles/Projects.css";

class Projects extends React.Component {
    render() {
        const projects = {
            "Indicators of Diabetes Risk": {
                desc: "An Shiny web application that displays a graphical analysis on health factors of diabetes",
                tech_stack: "R, HTML",
                link: "https://github.com/info201b-2022-spring/indicators-of-diabetes",
                open: "https://daniellatsing.shinyapps.io/Indicators_of_diabetes/"
            },
            "Dear.M Journal": {
                desc: "An interactive web application that serves as a journal for creating, tracking, and viewing journal entries and the emotions that arise from the written dreams.",
                tech_stack: "Javascript, HTML & CSS, React.js, Firebase",
                link: "https://github.com/info340b-wi23/dearm-journal",
                open: "https://dearm-journal-a829a.web.app"
            }
        };

        return(
            <div id="projects">
                <div className="section-header">
                    <span className="section-title">. projects</span>
                </div>
                <div className="project-container">
                    <div className="projects-grid">
                        {Object.keys(projects).map((key, i) => (
                            <li className="projects-card">
                                <div className="card-header">
                                    <div className="folder-icon">
                                        <FolderRoundedIcon
                                            style={{ fontSize: 35 }}
                                        ></FolderRoundedIcon>
                                    </div>
                                    <ExternalLinks
                                        githubLink={projects[key]["link"]}
                                        openLink={projects[key]["open"]}
                                    ></ExternalLinks>
                                </div>

                                <div className="card-title">{key}</div>
                                <div className="card-desc">{projects[key]["desc"]}</div>
                                <div className="card-tech">{projects[key]["tech_stack"]}</div>
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;