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
    margin-top: 12px;

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
const Field = styled.div`
    border-radius: 4px;

    input {
        min-height: 50px;
        border-radius: 4px;
        border: 1px solid #e6e6e6;
        margin: 0 0 12px 0;
        padding: 12px;
        width: 96%;
    }

    textarea {
        width: 100%;
        min-height: 80px;
        border-radius: 4px;
        border: 1px solid #e6e6e6;
        margin: 12px 0;
        padding: 12px;
    }
`
const Wrapper = styled.div`
    background: #fff;
    padding: 20px;
    background: #0D6C0D;
    height: 100vh;
    padding-top: 100px;
`
const SubmitBtn = styled.button`
    color: #fff;
    background: #318231;
    border-radius: 4px;
    padding: 12px;
    font-size: 18px;
    cursor: pointer;
    transition: ease-in-out 0.1s;
    border: 1px solid #fff;
    width: 100%;
    margin-top: 20px;

    &:hover {
        background: #fff;
        color: #000;
        border: 1px solid #fff;
    }

`
const Headline = styled.div`
    padding: 20px;
    font-size: 30px;
    color: #fff;
    font-weight: bold;
`
const RatingTitle = styled.div`
    font-size: 20px;
    padding-bottom: 20px;
    font-weight: bold;
`

function ReviewForm({ handleChange, onAddReview , setRating}, props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] =useState("")
    const [score, setScore] =useState(0)
    const [storeId, setStoreId] = useState(true)

    const ratingOptions = [5, 4, 3, 2, 1].map ( (score,index ) => {
        return (
        <Fragment>
            <input key={index} type="radio" value= {score} checked={score === score} name="rating" onChange={() => console.log('selected:', score)} id={`rating-${score}`}/>
            <label onClick={setScore}></label> 
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
                score: score,
                store_id: 1,
            })
        })

            .then(r => r.json())
            .then((newReview) => onAddReview(newReview))

            setTitle('')
            setDescription('')
    }
        
    
    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <Headline>Have you visited us? Leave a review!</Headline>
                <Field>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="title" placeholder="Review Title"/>
                </Field>
                <Field>
                    <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" name="description" placeholder="Review Description"/>
                </Field>
                <Field>
                    <RatingContainer>
                        <RatingTitle>Rate This Dispensary</RatingTitle>
                        <RatingBox>
                        {ratingOptions}  
                        </RatingBox>
                    </RatingContainer>
                </Field>
                <SubmitBtn type="submit">Submit Your Review!</SubmitBtn>
            </form>
        </Wrapper>
    )
}

export default ReviewForm
