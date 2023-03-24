import React from 'react'
import Card from './Card'

// make flex boxes for projects in styles
const styles = {
    portfolio: {
        display: "flex",
    }
}
function Portfolio() {
    return (
        <section style={styles.portfolio}> 
        <Card title="project" description="fun project" github="link" deployed="link" image="assets"/>
       <Card title="project" description="fun project" github="link" deployed="link" image="assets"/>
       <Card title="project" description="fun project" github="link" deployed="link" image="assets"/>
        </section>   
    )
}

export default Portfolio;