import React from "react";
import PlantCard from "./plantCard";

function Plants({plants}) {

 
    let allPlants = plants.map((plant, i) => {
        return(
            <PlantCard 
                key={i}
                name={plant.name}
                water={plant.water}
                image={plant.image}
                light={plant.light}
                temp={plant.temp}
                soil={plant.soil}
                likes={plant.likes}
            />
        )

    })


    return (
        <div className="plant-container">
            {allPlants}
        </div>
    )
}

export default Plants