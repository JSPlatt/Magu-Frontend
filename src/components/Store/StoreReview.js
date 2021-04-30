import React from 'react'

function StoreReview({review}) {
    return (
        <div>
            <h1>{review.title}</h1>
            <p>{review.description}</p>
        </div>
    
    )
}

export default StoreReview
