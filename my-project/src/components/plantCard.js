import React from "react";

function PlantCard(props) {
    const {name, water, soil, image, light, temp, likes} = props


    return (
        <div className="plant-card">
            <img src={image} className="plant-img"></img>
            <h4>{name}</h4>
            <ul className="plant-list">
                <li><strong>Watering:</strong> {water}</li>
                <li><strong>Sunlight:</strong> {light}</li>
                <li><strong>Soil:</strong> {soil}</li>
                <li><strong>Temp:</strong> {temp}</li>
            </ul>
            <button>{likes}❤️</button>
        </div>
    )
}

export default PlantCard