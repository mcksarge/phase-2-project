import React from "react";

function PlantForm() {
    return (
        <div id="new-plant-container">
            <h2 id="new-plant-title">Add a new plant</h2>
            <form id="new-plant-form">
                <input type="text" placeholder="plant name"></input>
                <input type="text" placeholder="water"></input>
                <input type="text" placeholder="sunlight"></input>
                <input type="text" placeholder="soil"></input>
                <input type="text" placeholder="temp"></input>
                <input type="text" placeholder="image"></input>
                <button type="submit" id="new-plant-button">Submit</button>
            </form>
        </div>
    )
}

export default PlantForm