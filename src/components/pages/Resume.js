import React from 'react'
import resumePDF from '../../assets/downloads/resume.pdf'

export default function Resume() {
    
    const styles = {   
        list: {
            listStyleType: "none",
        },
    }
    
    
    return (
    <div>
        <h3>Web Development Proficiencies</h3>
        <a href={resumePDF} download="Dan_Willett_Resume">Resume</a>
        <p>Here are a few languages libraries & frameworks, and tools & platforms I've worked with:</p>
            <div className="d-flex flex-row flex-wrap">
              <ul style={styles.list}>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>HTML</li>
              </ul>
              <ul style={styles.list}>
                <li>Python</li>
                <li>Flask</li>
                <li>React</li>
                <li>CSS</li>
              </ul>
              <ul style={styles.list}>
                <li>MySql + Sequelize</li>
                <li>MongoDB + Mongoose</li>
                <li>Heroku</li>
                <li>Bootstap</li>
              </ul>
            </div>
    </div>
    )


}

