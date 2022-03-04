import React, { useState } from "react";

function PlantForm({handleNewPlant}) {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        water: "",
        light: "",
        temp: "",
        soil: "",
        likes: 0
    })
    // const [name, setName] = useState({name: ""})
    // const [water, setWater] = useState({water: ""})
    // const [light, setLight] = useState({light: ""})
    // const [temp, setTemp] = useState({temp: ""})
    // const [soil, setSoil] = useState({soil: ""})
    // const [image, setImage] = useState({image: ""})
    // const [likes, setLikes] = useState({likes: 0})

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
    }

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

    }

    return (
        <div id="new-plant-container">
            <h2 id="new-plant-title">Add a new plant</h2>
            <form id="new-plant-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="plant name" name="name" onChange={handleChange}></input>
                <input type="text" placeholder="water" name="water" onChange={handleChange}></input>
                <input type="text" placeholder="sunlight" name="light" onChange={handleChange}></input>
                <input type="text" placeholder="soil" name="soil" onChange={handleChange}></input>
                <input type="text" placeholder="temp" name="temp" onChange={handleChange}></input>
                <input type="text" placeholder="image" name="image" onChange={handleChange}></input>
                <button type="submit" id="new-plant-button" onChange={handleChange}>Submit</button>
            </form>
        </div>
    )
}

export default PlantForm