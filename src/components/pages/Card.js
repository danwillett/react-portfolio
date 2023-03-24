import React from 'react';

const styles = {
    card: {
        margin: 20,
    }
}

function Card({title, description, image, deployed, github}) {
    return (
        <div style={styles.card}>
            <h2>{title}</h2>
            <h3>{description}</h3>
        </div>
    )
}

export default Card