import React from "react";
import PlantCard from "./plantCard";
import PlantForm from "./plantForm";
import { Route, NavLink } from "react-router-dom";

function Plants({plants, onLike, handleNewPlant}) {

 
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
                id={plant.id}
                onLike={onLike}
            />
        )

    })


    return (
        <div>
            <div className="new-plant-link">
                <NavLink to="/plants/newplant" exact>Add New Plant</NavLink>
            </div>
            <Route path="/plants/newplant">
                <PlantForm handleNewPlant={handleNewPlant} />
            </Route>
            <div className="plant-container">
                {allPlants}
            </div>
        </div>
    )
}

export default Plants