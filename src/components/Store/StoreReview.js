import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 4px;
    padding: 20px;
    margin: 0 20px 20px 0;
`
const Description = styled.div`
    padding: 0 0 20px 0;
    font-size: 14px;
`
const Title = styled.div`
    padding: 20px 0 0 0;
    font-size: 18px;
`
const RatingContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const RatingScore = styled.div``


function StoreReview({review, onDeleteReview}) {

    function handleDelete() {
        fetch(`http://localhost:3001/reviews/${review.id}`, {
            method: "DELETE",
        })
        onDeleteReview(review.id)
    }

    return (
        <Card>
            <div className="rating-container"></div>
            <Title>
                <h1>{review.title}</h1>
            </Title>
            <Description>
                <p>{review.description}</p>
            </Description>
            <div className="rating-score">
                {/* <p>{review.score} out of 5</p> */}
            </div>
            <button onClick={handleDelete}>Delete</button>
        </Card>
    
    )
}

export default StoreReview
