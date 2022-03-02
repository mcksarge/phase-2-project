import React from "react";

function Comments({ comments }) {
    const renderComments = comments.map((comment, i) => {
        return (
            <li key={i}><strong>{comment.name}</strong>- {comment.comment}</li>
        )
    })

    return(
        <div>
            <ul>
                {renderComments}
            </ul>
        </div>
    )
}

export default Comments