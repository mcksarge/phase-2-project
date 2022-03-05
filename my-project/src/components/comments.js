import React, { useState } from "react";
import CommentCard from "./commentCard";

function Comments({ comments, handleNewComment, onDelete }) {
    //State variables
    const [formData, setFormData] = useState({
        comment: ""
    });


    //Renders comments onto DOM
    const renderComments = comments.map((comment, i) => {

        return (
            <CommentCard 
                key={i}
                comment={comment.comment}
                id={comment.id}
                onDelete={onDelete}
            />
        )
    });

//*************************** */

//Handles Form functionality
    function handleChange(e) {
        const comment = e.target.name
        setFormData({
            ...formData,
            [comment]: e.target.value
        })
    };


    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({comment: formData.comment})
        })
        .then(res => res.json())
        .then(() => handleNewComment(formData))
        
        setFormData({
            comment: ""
        })
    };

//*************************** */


    return(
        <div>
            <div id="new-comment-container">
                <h3 id="new-comment-title">Enter A New Comment</h3>
                <form id="new-comment-form" onSubmit={handleSubmit}>
                    <input id="comment-input" type="text" name="comment" placeholder="Enter Comment..." onChange={handleChange} value={formData.comment}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <h2 id="comment-title">Comments</h2>
            <ul id="comment-container">
                {renderComments}
            </ul>
        </div>
    )
};

export default Comments