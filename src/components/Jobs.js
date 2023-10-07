import React from "react";

import "../styles/Jobs.css"

const experience_items = {
    "DUBvelopers": {
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
        job_title: "Undergraduate Researcher @",
        duration: "OCT 2021 - SEPT 2022",
        desc: [
            "Extracted and pipetted solutions to digest, isolate, and obtain DNA strands from genomic mice tail samples for DNA extraction, nanodropping, PCR, and gel electrophoresis",
            "Prepared astrocyte cell cultures for imaging via cell isolation, cell differentiation, and immunocytochemistry",
            "Organized and conducted graphical analysis of scientific data tables"
        ]
    }
}

const tabs = document.querySelectorAll(".tab");
const tabDetails = document.querySelectorAll(".tab_detail");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
    
        const tabId = tab.id + "-details";
        tabDetails.forEach(detail => {
            detail.classList.remove("active-tab-detail");
        });

        const activeDetail = document.getElementById(tabId);
        activeDetail.classList.add("active-tab-detail");
    })
})

export default class Joblist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            experience_items: {
                "DUBvelopers": {
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
                    job_title: "Undergraduate Researcher @",
                    duration: "OCT 2021 - SEPT 2022",
                    desc: [
                        "Extracted and pipetted solutions to digest, isolate, and obtain DNA strands from genomic mice tail samples for DNA extraction, nanodropping, PCR, and gel electrophoresis",
                        "Prepared astrocyte cell cultures for imaging via cell isolation, cell differentiation, and immunocytochemistry",
                        "Organized and conducted graphical analysis of scientific data tables"
                    ]
                }
            },
        loading: true, // Flag to track whether data is still loading
        error: null // To track any errors that occur during fetching
        }
    }

    componentDidMount() {
        setTimeout(() => {
            const data = {
                
            };
            this.setState({
                experienceItems: data,
                loading: false,
                error: null
            });
        }, 1000);
    }

    handleTabClick = (index) => {
        this.setState({ activeTab: index });
    }

    render() {
        const { activeTab } = this.state;
        const tabContent = Object.keys(experience_items).map((key, index) => {
            const isActive = activeTab === index ? "active" : "";
            return (
                <div
                    key={index}
                    className={`tab ${isActive}`}
                    onClick={() => this.handleTabClick(index)}
                >
                    {key}
                </div>
            );
        });
        
        const tabDetails = Object.keys(experience_items).map((key, index) => {
            const isActive = activeTab === index ? "active-tab-detail" : "";
            return (
                <div
                    key={index}
                    className={`tab-detail ${isActive}`}
                    id={`${key}-details`}
                >
                    <h2>{experience_items.job_title}</h2>
                    <p><strong>{experience_items.duration}</strong></p>
                    <ul>
                        {experience_items.desc.map((desc, descIndex) => (
                            <li key={descIndex}>{desc}</li>
                        ))}
                    </ul>
                </div>
            );
        });

        return (
            <div className="tabs-container">
                <div className="tab-content">
                    {tabContent}
                </div>
                <div className="tabDetails">
                    {tabDetails}
                </div>
            </div>
        )
    }
}