import React from "react";

function PlantCard(props) {
    const {name, water, soil, image, light, temp, likes} = props


    return (
        <div>
            <h4>{name}</h4>
            <img src={image} className="plant-img"></img>
            <ul>
                <li>{water}</li>
                <li>{light}</li>
                <li>{soil}</li>
                <li>{temp}</li>
                <li>{likes}</li>
            </ul>
        </div>
    )
}

export default PlantCard