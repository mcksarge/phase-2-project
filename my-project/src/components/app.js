import React, { useEffect, useState } from "react";
import Header from "./header";
import Links from "./links";
import Home from "./home";
import PlantsList from "./plantsList";
import Comments from "./comments";
import { Route } from "react-router-dom";

function App() {
  //State variables
  const [plants, setPlants] = useState([])
  const [comments, setComments] = useState([])
  const [refComments, setRefComments] = useState(true)
  const [refPlants, setRefPlants] = useState(true)


  //Fetch plant data
  useEffect(() => {
    fetch('http://localhost:3000/plants')
    .then(res => res.json())
    .then(data => {
      if (refPlants === true) {
        setPlants(data)
        setRefPlants(false)
      }

    })
  }, [refPlants])

  //Fetch comment data
  useEffect(() => {
    fetch('http://localhost:3000/comments')
    .then(res => res.json())
    .then(data => {
      if (refComments === true){
        setComments(data)
        setRefComments(false)
      }
    })
  }, [refComments])

  //Functions to change state
  function handleNewComment(newComment) {
    console.log(newComment)
    setComments([...comments, newComment])
    setRefComments(true)
  }

  function handleNewPlant(newPlant) {
    setPlants([...plants, newPlant])
    setRefPlants(true)
  }

  function onDeleteComment(deletedComment) {
    const updatedComments = comments.filter((comment) => comment.id !== deletedComment)
    setComments(updatedComments)
    setRefComments(true)
  }

  function onDeletePlant(deletedPlant) {
    const updatedPlants = plants.filter((plant) => plant.id !== deletedPlant)
    setPlants(updatedPlants)
    setRefPlants(true)
  }

  function onLike(liked) {
    console.log(liked)
    setRefPlants(true)
  }

  //******************************************************** */

  return (
    <div className="App">
      <Header />
      <Links />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/plants">
       <PlantsList plants={plants} onLike={onLike} handleNewPlant={handleNewPlant} onDelete={onDeletePlant} />
      </Route>
      <Route path="/comments">
       <Comments comments={comments} handleNewComment={handleNewComment} onDelete={onDeleteComment} />
      </Route>
    </div>
  );
}

export default App;
