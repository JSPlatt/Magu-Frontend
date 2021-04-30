import React from 'react'

function StoreReview({review, onDeleteReview}) {

    function handleDelete() {
        fetch(`http://localhost:3001/reviews/${review.id}`, {
            method: "DELETE",
        })
        onDeleteReview(review.id)
    }
    return (
        <div>
            <h1>{review.title}</h1>
            <p>{review.description}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    
    )
}

export default StoreReview
