import React from "react";

function PlantForm() {
    return (
        <div>
            <h2>Add a new plant</h2>
            <form>
                <input type="text" placeholder="plant name"></input>
                <input type="text" placeholder="water"></input>
                <input type="text" placeholder="sunlight"></input>
                <input type="text" placeholder="soil"></input>
                <input type="text" placeholder="temp"></input>
            </form>
        </div>
    )
}

export default PlantForm