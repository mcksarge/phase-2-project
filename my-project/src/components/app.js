import React, { useEffect, useState } from "react";
import Header from "./header";
import Links from "./links";
import Home from "./home";
import PlantsList from "./plantsList";
import Comments from "./comments";
import { Route } from "react-router-dom";

function App() {
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
        console.log("Rendered Plants")
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
        console.log("Rendered Comments")
      }
    })
  }, [refComments])

  function handleNewComment(newComment) {
    setComments([...comments, newComment])
    setRefComments(true)
  }

  function onDelete(deletedComment) {
    console.log(deletedComment)
    const updatedComments = comments.filter((comment) => comment.id !== deletedComment)
    setComments(updatedComments)
    setRefComments(true)
  }

  return (
    <div className="App">
      <Header />
      <Links />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/plants">
       <PlantsList plants={plants} />
      </Route>
      <Route path="/comments">
       <Comments comments={comments} handleNewComment={handleNewComment} onDelete={onDelete} />
      </Route>
    </div>
  );
}

export default App;
