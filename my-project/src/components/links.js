import React from "react";
import { NavLink } from "react-router-dom";

function Links() {
    return(
        <div id="link-container">
            <NavLink to="/" exact className="link-button">Home</NavLink>
            <NavLink to="/plants" exact className="link-button">Plants</NavLink>
            <NavLink to="/comments" className="link-button">Comments</NavLink>
        </div>
    )
}

export default Links