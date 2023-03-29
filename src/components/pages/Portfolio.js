import React from 'react'
import Card from './Card'
import outdoorsyISH from '../../assets/portfolio-images/outdoorsyISH.png'
import restaurant from '../../assets/portfolio-images/restaurant-roulette.png'
import textEditor from '../../assets/portfolio-images/text-editor.png'
import employeeTracker from '../../assets/portfolio-images/employee-tracker.png'
import ecommerce from '../../assets/portfolio-images/ecommerce.png'
import weather from '../../assets/portfolio-images/weather.png'
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
        <Card title="Restaurant Roulette" github="https://github.com/danwillett/restaurant-roulette" deployed="https://stark-headland-23711.herokuapp.com/" image={restaurant}/>
        <Card title="Weather Dashboard" github="https://github.com/danwillett/weather-forecast" deployed="https://danwillett.github.io/weather-forecast/" image={weather}/>
        <Card title="E-commerce Backend" github="https://github.com/danwillett/ecommerce-backend" deployed="https://github.com/danwillett/ecommerce-backend" image={ecommerce}/>
        <Card title="Employee Tracker" github="https://github.com/danwillett/Employee-Tracker" deployed="https://github.com/danwillett/Employee-Tracker" image={employeeTracker}/>
        <Card title="Text Editor" github="https://github.com/danwillett/text-editor-pwa" deployed="https://powerful-hollows-83769.herokuapp.com/" image={textEditor}/>
        </section>   
    )
}

export default Portfolio;