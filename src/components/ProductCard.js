import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
  box-shadow: 12px 0 12px 0 lightgray;
  padding: 6px;
  margin-bottom: 10px;
`
const ProductImage = styled.div`
  width: 50px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  
  img {
      height: 100px;
      width: 100px;
      border-radius: 100%;
      border: 1px solid #efefef;
  }
`
const ProductDescription = styled.div`
  padding: 20px 0 10px 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-weight: bold;
  font-size: 17px;
  color: black;
  background: #fff;
`
const ProductStyle = styled.div`
  margin: 5px 0 5px 0;
  height: 50px;

p {
  color: #fff;
  background: #0D6C0D;
  padding: 5px 5px;
  border: 1px solid #000;
  text-decoration: none;
}
`

const ProductPrice = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: bolder;
`


function ProductCard(product) {
    return (
      <>
      <Card>
            <ProductImage>
                <img src={product.image} alt={product.style}></img>
            </ProductImage>
            <ProductStyle>
                <p>{product.style}</p>
            </ProductStyle>
            <ProductDescription>
              {product.description}
            </ProductDescription>
            <ProductPrice><p>{product.price}</p></ProductPrice>
        </Card>
      </>
    )
}

export default ProductCard
