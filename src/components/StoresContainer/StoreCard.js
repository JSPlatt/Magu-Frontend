import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components' 

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
`
const StoreLogo = styled.div`
  width: 50px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  
  img {
      height: 50px;
      width: 50px;
      border-radius: 100%;
      border: 1px solid #efefef;
  }
`
const StoreName = styled.div`
  padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
      color: #fff;
      background: #000;
      border-radius: 4px;
      padding: 10px 50px;
      border: 1px solid #000;
      width: 100%;
      text-decoration: none;
  }
`


function StoreCard(props) {
    return (
        <Card>
            <StoreLogo>
                <img src="https://images.potguide.com/store/31264/Curaleaf_Logo_thumb480.png" alt={props.name}></img>
            </StoreLogo>
            <StoreName>{props.name}</StoreName>
            <div className="store-score">3</div>
            <LinkWrapper>
                <Link to={`/stores/${props.slug}`}>View Dispensary</Link>
            </LinkWrapper>
        </Card>
    )
}

export default StoreCard


