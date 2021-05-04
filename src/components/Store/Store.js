import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import StoreReview from './StoreReview'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'

const Header = styled.div `
  padding: 100px 100px 10px 100px;

  h1 {
      font-size: 42px;
  }
`
const Wrapper = styled.div `
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    img {
        height: 200px;
        width: 200px;
        border-radius: 100%;
        border: 1px solid rgba(0,0,0,0.1);
        margin-bottom: --8px;
    }
`

const Column = styled.div`
    background: #fff;
    height: 100vh;
    overflow: scroll;
    
    &:last-child {
        background: #000;
    }`

const Main = styled.div`
    padding-left: 50px;`


const Store = (props) => {
  
    const [reviews, setReviews] = useState ([])

    useEffect(() => {
        
        const url = `http://localhost:3001/reviews/`
        fetch((url))
            .then(res => res.json())
            .then (reviewArray => {
                setReviews(reviewArray)
                console.log(reviewArray)
            })
    }, [])

const handleChange = (e) => {
    e.preventDefault()
}


function handleAddReview(newReview) {
    const updatedReviewArray = [ newReview, ...reviews]
    setReviews(updatedReviewArray)
}

function handleDeleteReview(id) {
    const updatedReviewArray = reviews.filter(reviews => reviews.id !== id)
    setReviews(updatedReviewArray)
    
}
////////
const history = useHistory ()
function logOut()
{
    localStorage.clear()
    history.push('../login')
}
//////////
const reviewGrid = reviews.map( review => {
    return(
        <StoreReview
        review={review}
        key={review.id}
        title={review.title}
        score={review.score}
        description={review.description}
        onDeleteReview={handleDeleteReview}
        />
        
        )
    })
    
    const LogOutBtn = styled.button`
    color: #fff;
    background: #318231;
    border-radius: 4px;
    padding: 12px;
    font-size: 15px;
    cursor: pointer;
    transition: ease-in-out 0.1s;
    border: 1px solid #fff;
    width: 15%;
    margin-top: 0 px;

    &:hover {
        background: #fff;
        color: #000;
        border: 1px solid #fff;
    }`
    // const setRating = (score, e); e => {
    //     e.preventDefault()  
    //     setReviews({ ...reviews, score })
    //   }

    
       return (
           <Wrapper>
               <Column>
               <LogOutBtn onClick={logOut}>Log Out</LogOutBtn>
                   <Main>
                       <Header/>
                        <img src={"https://www.preparedfoods.com/ext/resources/images/2019/07/Curaleaf-logo_web.jpg?1564417088"} alt="Logo"/>
                        <h1>View our Menu</h1>
                       <div className="reviews">{reviewGrid}</div>
                   </Main>
               </Column>
               <Column>
                   <ReviewForm
                        onAddReview={handleAddReview}   
                        // setRating={setRating}
                    />
               </Column>
           </Wrapper>
       ) 
}

export default Store
