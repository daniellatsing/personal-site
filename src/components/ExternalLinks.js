import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

import "../styles/ExternalLinks.css";

class ExternalLinks extends React.Component {
  render() {
    return (
      <span className="external-links">
        <a className="github-icon" href={this.props.githubLink}>
          <GitHubIcon
            style={{
              fontSize: 20,
              color: "var(--black)"
            }}
          ></GitHubIcon>
        </a>
        {this.props.openLink && (
          <a className="open-icon" href={this.props.openLink}>
            <OpenInBrowserIcon
              style={{
                fontSize: 25,
                color: "var(--black)"
              }}
            ></OpenInBrowserIcon>
          </a>
        )}
      </span>
    );
  }
}

export default ExternalLinks;