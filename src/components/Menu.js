import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import { useHistory } from 'react-router-dom'


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

  img {
    height: 60h;
    width: 60vh;
    border-radius: 100%;
    border: 5px solid #efefef;
  }
`
const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`
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
float: left;
justify-content: flex-start;

&:hover {
    background: #fff;
    color: #000;
    border: 1px solid #fff;
}`

function Menu() {

const history = useHistory ()
function logOut()
{
    localStorage.clear()
    history.push('../login')
}

    return (
        <Home className="home">
            <LogOutBtn onClick={logOut}>Log Out</LogOutBtn>
            <Header>
                <Subheader><img src={"https://www.preparedfoods.com/ext/resources/images/2019/07/Curaleaf-logo_web.jpg?1564417088"} alt="logo"></img></Subheader>
            </Header>
            <Grid>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Grid>
        </Home>
        )
    }


export default Menu
