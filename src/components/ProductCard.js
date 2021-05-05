import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
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
`
const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
      color: #fff;
      background: #0D6C0D;
      border-radius: 4px;
      padding: 10px 50px;
      border: 1px solid #000;
      width: 100%;
      text-decoration: none;
  }
`
const ProductStyle = styled.div``

const ProductPrice = styled.div``


function ProductCard() {
    return (
      <>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2308-8cb5c8f0fd04369352c3ac3d1617227525800.jpg"} alt="vape cartridge"></img>
            </ProductImage>
            <ProductStyle>
                <p>Vape</p>
            </ProductStyle>
            <ProductDescription>
              Dutch Apple 0.5g Cartridge
            </ProductDescription>
            <ProductPrice><p>$40.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2314-e27fda894d0ad3afcfcb5d821614986465485.png"} alt="vape pen"></img>
            </ProductImage>
            <ProductStyle>
                <p>Vape</p>
            </ProductStyle>
            <ProductDescription>
              Afternoon Delight 1:1 .3g Disposable
            </ProductDescription>
            <ProductPrice><p>$28.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2314-b851ef4b58165b348ee529001617896702412.png"} alt="vape cartridge"></img>
            </ProductImage>
            <ProductStyle>
                <p>Vape</p>
            </ProductStyle>
            <ProductDescription>
              Biscotti 0.5g Cartridge
            </ProductDescription>
            <ProductPrice><p>$25.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2309-3cd098b0206c133e3c0691251598305907087.jpg"} alt="vape cartridge"></img>
            </ProductImage>
            <ProductStyle>
                <p>Vape</p>
            </ProductStyle>
            <ProductDescription>
              Black Mamba .8g Cartridge
            </ProductDescription>
            <ProductPrice><p>$55.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2308-5c6b1a70da33bd72d7540b0e1618067969363.jpg"} alt="pre-roll"></img>
            </ProductImage>
            <ProductStyle>
                <p>Pre-Roll</p>
            </ProductStyle>
            <ProductDescription>
              CC:91 Chem x VA Skunk 1.5g 
            </ProductDescription>
            <ProductPrice><p>$17.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2308-89b49abae2558b3752c692fb1617344109641.png"} alt="pre-roll"></img>
            </ProductImage>
            <ProductStyle>
                <p>Pre-Roll</p>
            </ProductStyle>
            <ProductDescription>
              Cookies & Creme 1g 
            </ProductDescription>
            <ProductPrice><p>$15.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2308-431ffa7e66529156bd5c9d6e1617352257389.jpg"} alt="pre-roll"></img>
            </ProductImage>
            <ProductStyle>
                <p>Pre-Roll</p>
            </ProductStyle>
            <ProductDescription>
              Dazed & Confused 0.5g Infused
            </ProductDescription>
            <ProductPrice><p>$28.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2308-75c8a286c63eea5b2fc1c1891619593154816.jpg"} alt="pre-roll"></img>
            </ProductImage>
            <ProductStyle>
                <p>Pre-Roll</p>
            </ProductStyle>
            <ProductDescription>
              Dutch Treat Haze Sweets Blunt 2g
            </ProductDescription>
            <ProductPrice><p>$33.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2308-d0cc894d0229a90b1187033a1620074143156.jpg"} alt="flower"></img>
            </ProductImage>
            <ProductStyle>
                <p>Flower</p>
            </ProductStyle>
            <ProductDescription>
              Blackberry Kush 3.5g
            </ProductDescription>
            <ProductPrice><p>$35.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2308-f8d918f876778bf0f861fa831617353072870.jpg"} alt="flower"></img>
            </ProductImage>
            <ProductStyle>
                <p>Flower</p>
            </ProductStyle>
            <ProductDescription>
              Blueberry 3.5g
            </ProductDescription>
            <ProductPrice><p>$40.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2314-dbe3fc8e637637de2718bb241618331041897.png"} alt="flower"></img>
            </ProductImage>
            <ProductStyle>
                <p>Flower</p>
            </ProductStyle>
            <ProductDescription>
              Bond Road Kush 3.5g
            </ProductDescription>
            <ProductPrice><p>$50.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2314-8ddefa31393fdb14f5d6fbb01619459173425.jpg"} alt="flower"></img>
            </ProductImage>
            <ProductStyle>
                <p>Flower</p>
            </ProductStyle>
            <ProductDescription>
              Wedding Cake 3.5g
            </ProductDescription>
            <ProductPrice><p>$35.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={""} alt="concentrate"></img>
            </ProductImage>
            <ProductStyle>
                <p>Concentrate</p>
            </ProductStyle>
            <ProductDescription>
              Wedding Cake 3.5g
            </ProductDescription>
            <ProductPrice><p>$35.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={""} alt="concentrate"></img>
            </ProductImage>
            <ProductStyle>
                <p>Concentrate</p>
            </ProductStyle>
            <ProductDescription>
              Wedding Cake 3.5g
            </ProductDescription>
            <ProductPrice><p>$35.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={""} alt="concentrate"></img>
            </ProductImage>
            <ProductStyle>
                <p>Concentrate</p>
            </ProductStyle>
            <ProductDescription>
              Wedding Cake 3.5g
            </ProductDescription>
            <ProductPrice><p>$35.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={""} alt="concentrate"></img>
            </ProductImage>
            <ProductStyle>
                <p>Concentrate</p>
            </ProductStyle>
            <ProductDescription>
              Wedding Cake 3.5g
            </ProductDescription>
            <ProductPrice><p>$35.00</p></ProductPrice>
        </Card>
        
      </>
    )
}

export default ProductCard
