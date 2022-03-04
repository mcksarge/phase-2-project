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
  const [ref, setRef] = useState(true)


  //Fetch plant data
  useEffect(() => {
    fetch('http://localhost:3000/plants')
    .then(res => res.json())
    .then(data => {
      if (ref)
      setPlants(data)
      setRef(false)
    })
  }, [plants])

  //Fetch comment data
  useEffect(() => {
    fetch('http://localhost:3000/comments')
    .then(res => res.json())
    .then(data => {
      if ( ref === true && path="/comments"){
        setComments(data)
        setRef(false)
        console.log("Rendered Comments")
      }
    })
  }, [ref])

  function handleNewComment(newComment) {
    setComments([...comments, newComment])
    setRef(true)
  }

  function onDelete(deletedComment) {
    console.log(deletedComment)
    const updatedComments = comments.filter((comment) => comment.id !== deletedComment)
    setComments(updatedComments)
    setRef(true)
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
