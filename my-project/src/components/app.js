import React, { useEffect, useState } from "react";
import Header from "./header";
import Links from "./links";
import Home from "./home";
import PlantsList from "./plantsList";

function App() {
  const [plants, setPlants] = useState([])
  const [comments, setComments] = useState([])

  //Fetch plant data
  useEffect(() => {
    fetch('http://localhost:3000/plants')
    .then(res => res.json())
    .then(data => {
      setPlants(data)
    })
  }, [])

  //Fetch comment data
  useEffect(() => {
    fetch('http://localhost:3000/comments')
    .then(res => res.json())
    .then(data => {
      setComments(data)
    })
  }, [])



  return (
    <div className="App">
      <Header />
      <Links />
      <Home />
      <PlantsList plants={plants} />
    </div>
  );
}

export default App;
