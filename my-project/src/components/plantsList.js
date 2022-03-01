import React from "react";
import PlantCard from "./plantCard";

function Plants({plants}) {
    console.log(plants)
    let allPlants = plants.map((plant, i) => {
        <PlantCard 
            key={i}
            name={plant.name}
            water={plant.water}
            soil={plant.soil}
            light={plant.light}
            likes={plant.likes}
            temp={plant.temp}
            image={plant.image}
        />
    })


    return (
        <div className="plant-container">
            {allPlants}
        </div>
    )
}

export default Plants