import React from "react";

function PlantCard(props) {
    const {name, water, soil, image, light, temp, likes, id, onLike, onDelete} = props

    function handleLike() {
        let liked = likes + 1


        
        fetch(`http://localhost:3000/plants/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "likes": liked
            })
        })
        .then(res => res.json())
        .then(data => onLike(data))

    }

    function handleDelete () {

        fetch(`http://localhost:3000/plants/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(() => onDelete(id))
    }


    return (
        <div className="plant-card">
            <button className="plant-delete" onClick={handleDelete}>X</button>
            <img src={image} className="plant-img"></img>
            <h4>{name}</h4>
            <ul className="plant-list">
                <li><strong>Watering:</strong> {water}</li>
                <li><strong>Sunlight:</strong> {light}</li>
                <li><strong>Soil:</strong> {soil}</li>
                <li><strong>Temp:</strong> {temp}</li>
            </ul>
            <button onClick={handleLike}>{likes}❤️</button>
        </div>
    )
}

export default PlantCard