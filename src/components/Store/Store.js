import React, { useState, useEffect } from 'react'
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
// const Home = styled.div `
//   text-align: center;
//   margin-left: auto;
//   margin-right: auto;
//   max-width: 1200px;
// `
// const Subheader = styled.div `
//   font-weight:300;
//   font-size: 26px;
// `
// const Grid = styled.div `
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-gap: 20px;
//   width: 100%;
//   padding: 20px;
// `


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


const reviewGrid = reviews.map( review => {
    return(
        <StoreReview
        review={review}
        key={review.id}
        title={review.title}
        description={review.description}
        />
        
        )
    })
    

       return (
           <Wrapper>
               <Column>
                   <Main>
                       <Header />
                        <img src="https://www.preparedfoods.com/ext/resources/images/2019/07/Curaleaf-logo_web.jpg?1564417088" alt="Logo"/>
                        <h1>curaleaf</h1>
                       <div className="reviews">{reviewGrid}</div>
                   </Main>
               </Column>
               <Column>
                   <ReviewForm
                        onAddReview={handleAddReview}   
                    />
               </Column>
           </Wrapper>
       ) 
}

export default Store
