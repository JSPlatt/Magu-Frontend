import React, { useState , Fragment} from 'react'
import styled from 'styled-components'
import Gray from './Stars/Gray'
import Hover from './Stars/Hover'
import Selected from './Stars/Selected'

const RatingContainer = styled.div`
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    padding: 40px 0 10px 0;
    border: 1px solid #e6e6e6;
    background: #fff;    
`
const RatingBox = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    position: relative;

    input {
        display: none;
    }

    label {
        cursor: pointer;
        width: 40px;
        height: 40px;
        background-image: url("data:image/svg+xml; charset=UTF-8, ${Gray}");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 70%;
    }

    input:checked ~ label,
    input:checked ~ label ~ label {
        background-image: url("data:image/svg+xml; charset=UTF-8, ${Selected}");
    }

    input:not(:checked) ~ label:hover,
    input:not(:checked) ~label:hover ~ label {
        background-image: url("data:image/svg+xml; charset=UTF-8, ${Hover}");
    }
`
const RatingTitle = styled.div``

function ReviewForm({ handleChange, onAddReview }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] =useState("")
    const ratingOptions = [5, 4, 3, 2, 1].map ( (score,index ) => {
        return (
        <Fragment>
            <input type="radio" value={score} name="rating" onChange={() => console.log('selected:', score)} id={`rating-${score}`}/>
            <label></label>
        </Fragment>
        )
    })

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

            setTitle('')
            setDescription('')
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
                    <RatingContainer>
                        <div className="rating-title-text">Rate This Dispensary</div>
                        <RatingBox>
                        {ratingOptions}  
                        </RatingBox>
                    </RatingContainer>
                </div>
                <button type="submit">Submit Your Review!</button>
            </form>
        </div>
    )
}

export default ReviewForm
