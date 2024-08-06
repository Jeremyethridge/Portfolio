import React from 'react';
import "../styles/resume.css";

function Resume() {
  return (
    <div className="skills">
    <h1> Skills</h1>
    <ol className="list">
      <li className="item">
        <h2> Front-End</h2>
        <div>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript(ES6)</li>
            <li>React</li>
            <li>BootStrap</li>
            <li>TailwindCSS</li>
            <li>jQuery</li>
          </ul>
        </div>
      </li>
      <li className="item">
        <h2>Back-End</h2>
        <div>
        <ul>
            <li>.NET 8.0 (C#)</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>GraphQL</li>
            <li>ApolloServer</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>SQL Server</li>
            <li>Mongoose ODM</li>
            <li>Sequelize ORM</li>
          </ul>
        </div>
      </li>
      <li className="item">
        <h2>Technologies</h2>
        <div>
        <ul>
            <li>Postman</li>
            <li>Insomnia</li>
            <li>Jest</li>
            <li>Mocha</li>
            <li>Netlify</li>
            <li>Heroku</li>
            <li>GitHub Pages</li>
            <li>GitHub</li>
            <li>Git</li>
            <li>Azure Data Studio</li>
          </ul>
        </div>
      </li>
    </ol>
    <a className = "resume"href="https://drive.google.com/file/d/1XDJhQHQSC0cw5YTF8nmCEwG3Q26W6n3G/view?usp=drive_link">Click To View Resume!</a>
  </div>
  )
}

export default Resume