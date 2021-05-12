import React, { useState } from 'react'
import styled from 'styled-components'


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
    /* background: #0D6C0D; */
    background-image: url("https://st3.depositphotos.com/1028879/17671/i/1600/depositphotos_176712332-stock-photo-a-big-pile-of-marijuana.jpg");
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
    text-align: center;
    color: #fff;
    font-weight: bold;
`

function ReviewForm({ handleChange, onAddReview , setRating}, props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] =useState("")
    const [score, setScore] =useState("")
    

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
            setScore('')
    }
        
    
    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <Headline>Have you visited us? Leave a review!</Headline>
                <Field>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="title" placeholder="Review Title" required/>
                </Field>
                <Field>
                    <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" name="description" placeholder="Review Description" required/>
                </Field>
                <Field>
                    <input onChange={(e) => setScore(e.target.value)} value={score} type="number" name="score" placeholder="Review Score" min="1" max="5" required/>
                </Field>
                <Field>
                </Field>
                <SubmitBtn type="submit">Submit Your Review!</SubmitBtn>
            </form>
        </Wrapper>
    )
}

export default ReviewForm
