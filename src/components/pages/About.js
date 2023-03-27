import React from "react";
import profile from "../../assets/portfolio-images/bio2.jpg";

export default function Body() {

    const styles = {
        myself: {
            paddingTop: "1vh",
            minHeight: "90vh"
        },        
        article: {
            maxWidth: "500px"            
        },       
        list: {
            listStyleType: "none",
        },
        picture: {
            padding: "30px 0 30px 0",
            maxWidth: "300px",
            
        }
    }

  return (
    <myself style= {styles.myself} className="container d-flex flex-column justify-content-center"
    >
      <content className="d-flex flex-row flex-wrap justify-content-around align-items-center">
        <article style={styles.article}>
          <h2>About Me</h2>
          <div>
            I am a recent graduate from UC Berkeley with a BS in Molecular
            Environmental Biology. The courses I took encompassed a broad range
            of topics within Earth System and Environmental Sciences. They
            ranged from cellular biology to landscape-level geomorphology. When
            I wasn't in the books, I was conducting climate change mitigation
            research in the field of biogeochemistry as a member of the Silver
            Lab group. In October 2022, I began a Full Stack Web Development
            program offered through UC Berkeley Extension's Coding Bootcamp. My
            research experiences in undergrad exposed me to coding for data
            analytics in MATLAB and Python, and I found myself really enjoying
            the process. With a background in Enviornmental Science, and these
            new coding skills, I searching for opportunities where I can help
            create positive change in our world. Here are a few languages,
            libraries & frameworks, and tools & platforms I've learned from my
            Bootcamp:
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
        </article>

        <picture style={styles.picture}>
          <img src={profile} className="img-fluid" alt="Dan Willett"></img>
        </picture>
      </content>
    </myself>
  );
}
