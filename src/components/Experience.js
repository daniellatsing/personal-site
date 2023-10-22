import React from "react";
import "../styles/Experience.css";

class Experience extends React.Component {
    render() {
        const experience_items = {
            "Web Impact UW": {
                job_title: "Frontend Web Developer",
                duration: "SEPT 2022 - JUNE 2023",
                desc: [
                    "Closely collaborated with 9 peers to create and discuss design and implementation decisions with Muslim Student Association",
                    "Implemented the Islamic House, Contact, Donation, and Halal Restaurant pages, ensuring seamless integration of design elements and optimal user experience, using JavaScript, CSS, and ReactJS",
                    "Executed the proposed website design, hosting the web application through Vercel and Sanity technologies to inform and provide resources relative to the MSA"
                ]
            },
            "Hey Mentor": {
                job_title: "Vice President of Development",
                duration: "JUNE 2022 - JULY 2023",
                desc: [
                    "Oversaw social media initiatives, managed growth channels on Facebook, Instagram, and LinkedIn, resulting in increased engagement and brand visibility",
                    "Created and distributed 10 monthly newsletters to improve mentors and mentees’ awareness of ongoing initiatives while arranged an alumni network on LinkedIn, consisting of 19 members, facilitating networking opportunities and promoting professional connections"
                ]
            },
            "Seattle Children's": {
                job_title: "Undergraduate Researcher",
                duration: "OCT 2021 - SEPT 2022",
                desc: [
                    "Extracted and pipetted solutions to digest, isolate, and obtain DNA strands from genomic mice tail samples for DNA extraction, nanodropping, PCR, and gel electrophoresis",
                    "Prepared astrocyte cell cultures for imaging via cell isolation, cell differentiation, and immunocytochemistry",
                    "Organized and conducted graphical analysis of scientific data tables"
                ]
            }
        };

        return(
            <div id="experience">
                <div className="experience-header">
                    <span className="experience-title">. experience</span>
                </div>
                <div className="jobs-grid">
                    {Object.keys(experience_items).map((key, i) => (
                        <li className="jobs-card">
                            <div className="card-header">
                                <div className="card-company">{key}</div>
                                <div className="card-dates">{experience_items[key]["duration"]}</div>
                            </div>
                            <div className="card-title">{experience_items[key]["job_title"]}</div>
                            <div className="card-desc">
                                {/* <li>{experience_items[key]["desc"]}</li> */}
                                <ul className="job-desc">
                                    {experience_items[key]["desc"].map(function(job_desc, i) {
                                        return (
                                            <li>{job_desc}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        )
    }
}

export default Experience;