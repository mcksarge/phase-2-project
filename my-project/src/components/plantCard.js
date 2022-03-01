import React from "react";

function PlantCard({plant}) {
    console.log(plant)


    return (
        <div>
            <h4>{plant.name}</h4>
            <ul>
                <li>{plant.light}</li>
                <li>{plant.soil}</li>
                <li>{plant.water}</li>
                <li>{plant.temp}</li>
                <li>{plant.likes}</li>
            </ul>
        </div>
    )
}

export default PlantCard