import React from "react";

function Comments({ comments }) {
    const renderComments = comments.map((comment, i) => {
        return (
            <li key={i} className="comment"><strong>{comment.name}</strong>: {comment.comment}</li>
        )
    })

    return(
        <div>
            <div id="new-comment-container">
                <h3 id="new-comment-title">Enter A New Comment</h3>
                <form id="new-comment-form">
                    <input id="comment-input" type="text" placeholder="Enter Comment..."></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <h2 id="comment-title">Comments</h2>
            <ul id="comment-container">
                {renderComments}
            </ul>
        </div>
    )
}

export default Comments