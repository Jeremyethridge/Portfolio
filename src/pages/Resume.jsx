import React from 'react';
import "../styles/resume.css";

function Resume() {
  return (
    <div className="skills">
    <h1> Skills</h1>
    <ol className="list">
      <li className="item">
        <h2> Front-End</h2>
        <span>
        HTML, CSS, React Native, ReactJS,
         BootStrap, MaterialUI, TailwindCSS, StyledComponents
        </span>
      </li>
      <li className="item">
        <h2>Back-End</h2>
        <span>
          NodeJS, ExpressJS, GraphQL, ApolloServer,
          MySQL, MongoDB, SQL
        </span>
      </li>
    </ol>
  </div>
  )
}

export default Resume