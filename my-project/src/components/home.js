import React from "react";

function Home() {
    return (
        <div id="homepage">
            <div className="quote-container">
                <h2 className="quote"><i>"In nature, nothing exists alone."</i></h2>
                <h3 className="quote-author"><i>-Rachel Carson</i></h3>
            </div>
            <div className="intro">
                <p><span id="p-title"><strong>Emerald beauty</strong></span>, nothing quite has an affect on ones life like plants do.</p>
                <p>Having plants in your home can be the ultimate expression of freedom, food for the spirit and medicine for the heart.</p>
            </div>
            <div className="home-plant-img-container">
                <img src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg" alt="Plant growing from soil"></img>
            </div>
            <div className="fun-facts">
                <h3>Fun Facts</h3>
                <ul className="list-fun-facts">
                    <li>-In the 1600s, tulip bulbs in Holland were worth more than gold, which in turn led to a crash of the Dutch economy.</li>
                    <li>-The average strawberry has 200 seeds. It's the only fruit that bears its seeds on the outside.</li>
                    <li>-90 percent of the foods humans eat come from just 30 plants.</li>
                    <li>-A sunflower looks like one large flower, but each head is composed of hundreds of tiny flowers called florets, which ripen to become the seeds.</li>
                    <li>-If apples float, it's because they contain a lot of air: 18% air or more.</li>
                    <li>-The first carrots were purple rather than orange.</li>
                </ul>   
            </div>
        </div>
    )
}

export default Home