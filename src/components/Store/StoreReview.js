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
    font-size: 16px;
    font-weight: medium;
`
const Title = styled.div`
    padding: 20px 0 0 0;
    font-size: 18px;
`

const RatingScore = styled.div`
    display: flex;
    font-size: 25px;
    font-weight: bold;
    width: 15%;
    
`

const DeleteBtn = styled.button`
    color: #fff;
    background: #318231;
    border-radius: 4px;
    padding: 12px;
    font-size: 18px;
    cursor: pointer;
    transition: ease-in-out 0.1s;
    border: 1px solid #fff;
    width: 15%;
    margin-top: 20px;

    &:hover {
        background: #fff;
        color: #000;
        border: 1px solid #fff;
    }

`


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
            <RatingScore>
                <p>{review.score} out of 5</p> 
            </RatingScore>
            <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
        </Card>
    
    )
}

export default StoreReview
