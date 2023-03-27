import React from 'react'
import Card from './Card'
import outdoorsyISH from '../../assets/portfolio-images/outdoorsyISH.png'

// make flex boxes for projects in styles
const styles = {
    portfolio: {
        padding: "0 30px",
    }
}
function Portfolio() {
    return (
        <section style={styles.portfolio}className='d-flex flex-row flex-wrap justify-content-center'> 
        <Card title="OutdoorsyISH" github="https://github.com/danwillett/national-park-planner" deployed="https://danwillett.github.io/national-park-planner/" image={outdoorsyISH}/>
        <Card title="OutdoorsyISH" description="fun project" github="link" deployed="link" image={outdoorsyISH}/>
        <Card title="OutdoorsyISH" description="fun project" github="link" deployed="link" image={outdoorsyISH}/>
        <Card title="OutdoorsyISH" description="fun project" github="link" deployed="link" image={outdoorsyISH}/>
        <Card title="OutdoorsyISH" description="fun project" github="link" deployed="link" image={outdoorsyISH}/>
        <Card title="OutdoorsyISH" description="fun project" github="link" deployed="link" image={outdoorsyISH}/>
        </section>   
    )
}

export default Portfolio;