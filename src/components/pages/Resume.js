import React from 'react'
import resumePDF from '../../assets/downloads/resume.pdf'

export default function Resume() {
    
    const styles = {   
        header: {
          padding: "30px",
          fontSize: "30px"

        },
        list: {
            listStyleType: "none",
            textAlign: "center",
            fontSize: "20px"
        },
        resume: {
          fontSize: "15px",
          textDecoration: "none",
          padding: "20px"
        }
    }
    
    
    return (
    <div className="d-flex flex-column text-center">
        <h3 style={styles.header}>Web Development Proficiencies</h3>
            <div className="d-flex flex-row flex-wrap justify-content-center">
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
            <a href={resumePDF} download="Dan_Willett_Resume" style={styles.resume}>Download Resume</a>
    </div>
    )


}

