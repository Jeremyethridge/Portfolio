import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";

function Footer() {
  const githubUrl = "https://github.com/Jeremyethridge";
  const linkedinUrl = "https://www.linkedin.com/in/jeremy-ethridge-9a888727a/";

  return (
    <div className="footer">
      <div className="socialMedia">
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a href={githubUrl} target="_blank">
          <GitHubIcon />
        </a>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a href={linkedinUrl} target="_blank">
          <LinkedInIcon />
        </a>
      </div>
      <p>Created by Jeremy Ethridge</p>
    </div>
  );
}

export default Footer;