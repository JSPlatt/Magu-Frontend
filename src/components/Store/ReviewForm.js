import React, { useState } from 'react'

function ReviewForm({ handleChange, onAddReview }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] =useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3001/reviews', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                description: description,
                store_id: 1
            })
        })

            .then(r => r.json())
            .then((newReview) => onAddReview(newReview))
    }
    
    
    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <div>Have you visited us? Leave a review!</div>
                <div className="field">
                    <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="title" placeholder="Review Title"/>
                </div>
                <div className="field">
                    <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" name="description" placeholder="Review Description"/>
                </div>
                <div className="field">
                    <div className="rating-container">
                        <div className="rating-title-text">Rate This Dispensary</div>
                        [Star Rating Goes Here]  
                    </div>
                </div>
                <button type="submit">Submit Your Review!</button>
            </form>
        </div>
    )
}

export default ReviewForm
