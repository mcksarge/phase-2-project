import React, { useState } from "react";

function PlantForm({handleNewPlant}) {
    //State Variables
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        water: "",
        light: "",
        temp: "",
        soil: "",
        likes: 0
    });

    //Provies Form functionality, updates JSON with new plant
    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)

        fetch("http://localhost:3000/plants", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: formData.name,
                image: formData.image,
                water: formData.water,
                light: formData.light,
                temp: formData.temp,
                soil: formData.soil,
                likes: formData.likes
            })
        })
        .then(res => res.json())
        .then(() => handleNewPlant(formData))

        setFormData({ //Clears form after input
            name: "",
            image: "",
            water: "",
            light: "",
            temp: "",
            soil: "",
            likes: 0
        })
    };

//************************* */


//Changes State when text entered into input field
    function handleChange(e) {
        const name = e.target.name
        const image = e.target.name
        const water = e.target.name
        const light = e.target.name
        const temp = e.target.name
        const soil = e.target.name

        setFormData({
            ...formData,
            [name]: e.target.value,
            [image]: e.target.value,
            [water]: e.target.value,
            [light]: e.target.value,
            [temp]: e.target.value,
            [soil]: e.target.value,
        })

    };

//*********************************** */

    return (
        <div id="new-plant-container">
            <h2 id="new-plant-title">Add a new plant</h2>
            <form id="new-plant-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter plant name" name="name" onChange={handleChange} value={formData.name}></input>
                <input type="text" placeholder="Enter water requirements" name="water" onChange={handleChange} value={formData.water}></input>
                <input type="text" placeholder="Enter sunlight needed" name="light" onChange={handleChange} value={formData.light}></input>
                <input type="text" placeholder="Enter soil requirements" name="soil" onChange={handleChange} value={formData.soil}></input>
                <input type="text" placeholder="Enter ideal temperature for plant" name="temp" onChange={handleChange} value={formData.temp}></input>
                <input type="text" placeholder="Enter image link" name="image" onChange={handleChange} value={formData.image}></input>
                <button type="submit" id="submit-plant-button" onChange={handleChange}>Submit</button>
            </form>
        </div>
    )
};

export default PlantForm