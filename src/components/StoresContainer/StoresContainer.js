import React, { useState, useEffect, div } from 'react'
import StoreCard from './StoreCard'
import styled from 'styled-components'

const Home = styled.div `
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`
const Header = styled.div `
  padding: 100px 100px 10px 100px;

  h1 {
      font-size: 42px;
  }
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

function StoresContainer() {
    const [stores, setStores] = useState([])
    
    useEffect(() => {

        fetch('http://localhost:3001/stores')
        .then(r => r.json())
        .then (storeArray => {
            setStores(storeArray)
        })
    }, [])

    const grid = stores.map( store => {
        
        return(
            <StoreCard 
                key={store.name}
                name={store.name}
                score={store.avg_score}
                slug={store.slug}
                logo={store.image_url}
            />
        )
    })

    return (
    <Home className="home">
        <Header>
            <h1>Magu</h1>
            <Subheader>Honest, unbiased dispensary reviews.</Subheader>
        </Header>
        <Grid>
            {grid}
        </Grid>
    </Home>
    )
}

export default StoresContainer
