import React from "react";

const styles = {
    spacing: {
        padding: "30px 20px",
    },
    icons: {
        fontSize: "30px",
        margin: "0 20px",
    }
}

export default function Footer() {
    return (
        <div>
        <div style={styles.spacing}className="d-flex flex-row justify-content-center">
            <a href="https://github.com/danwillett" target="_blank" rel="noreferrer" style={styles.icons}><i className="fa fa-github"></i></a>
            <a href="linkedin.com/in/dan-willett-5aa84b16b" target="_blank" rel="noreferrer" style={styles.icons}><i className="fa fa-linkedin"></i></a></div>
        </div>
    )
   
}