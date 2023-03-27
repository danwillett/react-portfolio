import React from 'react';
import '../styles/Card.css'

function Card({title, image, deployed, github}) {
    const styles = {
        card: {        
            flex: "1 1 40vw",
            maxWidth: "400px",
            minWidth: "300px",
            border: "solid black 2px",
            margin: "40px 10px",           
            height: "30vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${image})`             
        },
        title: {          
                fontSize: "18px",
                backgroundColor: "blanchedalmond",
                textAlign: "center",
                width: "fit-content",
                position: "relative",
                left: 0,
                top: 0,
                padding: "5px",
                border: "solid black",
                borderWidth: "0px 2px 2px 0px",
                color: "black"
        }
    }
    console.log(image)
    console.log(styles)
    return (
        <>
         <div>
         <div style={styles.card} className="project-card">
             <div style={styles.title}><a href={github} target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a> <a href={deployed} target="_blank" className="project-name" rel="noreferrer">{title}</a></div>
             <span role="img" aria-label="decorative image"></span>
         </div>
     </div>
     </>
    )
}

export default Card