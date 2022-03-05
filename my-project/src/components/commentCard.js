import React from "react";

function CommentCard({comment, id, onDelete}) {

    //Deletes comment from JSON
    function handleDelete() {
        fetch(`http://localhost:3000/comments/${id}`, {
            method: "DELETE",
        })
        .then ((res) => res.json())
        .then (() => onDelete(id))
    }

    //****************** */

    return (
        <li className="comment">
            {comment}
            <button className="delete-comment" onClick={handleDelete}>Delete</button>
        </li>
    )
}


export default CommentCard