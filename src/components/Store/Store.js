import React, { useState, useEffect } from 'react'
import StoreReview from './StoreReview'
import styled from 'styled-components'

const Header = styled.div `
  padding: 100px 100px 10px 100px;

  h1 {
      font-size: 42px;
  }
`
const Home = styled.div `
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`
const Subheader = styled.div `
  font-weight:300;
  font-size: 26px;
`
const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`


const Store = () => {
  
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
        <Home className="home">
            <Header>
                <h1><img src="https://www.preparedfoods.com/ext/resources/images/2019/07/Curaleaf-logo_web.jpg?1564417088" alt="Logo"/></h1>
                <Subheader>This is the store Show Page</Subheader>
            </Header>
            <Grid>
                <ul>
                {reviewGrid}
                </ul>
            </Grid>
        </Home>
        )
    }

export default Store
