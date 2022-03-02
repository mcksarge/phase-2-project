import React from "react";
import { NavLink } from "react-router-dom";

function Links() {
    return(
        <div id="link-container">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/plants" exact>Plants</NavLink>
            <NavLink to="/comments">Comments</NavLink>
        </div>
    )
}

export default Links