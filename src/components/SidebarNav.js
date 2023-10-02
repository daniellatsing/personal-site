import React from "react";
import { Sidenav } from "rsuite";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "../styles/SidebarNav.css";

class SidebarNav extends React.Component {
    render() {

        const links = [
        <a href="#intro">. home</a>,
        <a href="#about">. about me</a>,
        <a href="#experience">. experience</a>,
        <a href="#projects">. projects</a>
        ];

        return (
            <div className="sidebar-nav">
                <Sidenav
                    expanded={true}
                    defaultOpenKeys={["3", "4"]}
                    appearance={"subtle"}
                >
                    <Sidenav.Body>
                        <div className="sidebar-links">
                            {links.map((link, i) => (
                            //   <FadeInSection delay={`${i + 1}00ms`}>
                                <div>{link}</div>
                            //   </FadeInSection>
                            ))}
                        </div>
                    </Sidenav.Body>
                </Sidenav>
                <div className="sidebar-logos" href="/">
                    <a href="mailto:daniellatsing@gmail.com">
                        <EmailRoundedIcon style={{ fontSize: 22 }}></EmailRoundedIcon>
                    </a>
                    <a href="https://github.com/daniellatsing">
                        <GitHubIcon style={{ fontSize: 21 }}></GitHubIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/daniellatsing/">
                        <LinkedInIcon style={{ fontSize: 23 }}></LinkedInIcon>
                    </a>
                    <a href="https://drive.google.com/file/d/10qhNWDSTqwYUSWomRwBRIkUXbszd1JGx/view?usp=sharing">
                        <ContactPageRoundedIcon style={{ fontSize: 22}}></ContactPageRoundedIcon>
                    </a>
                </div>
            </div>
        );
    }
}

export default SidebarNav;