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
  font-weight: bold;
`


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
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2308-f31175424d8857b6d388e2e51619554050856.png"} alt="concentrate"></img>
            </ProductImage>
            <ProductStyle>
                <p>Concentrate</p>
            </ProductStyle>
            <ProductDescription>
              Gelato Cakes Sugar 0.5g
            </ProductDescription>
            <ProductPrice><p>$25.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2314-6dd668406f0ab8e86d9797961616686418316.png"} alt="concentrate"></img>
            </ProductImage>
            <ProductStyle>
                <p>Concentrate</p>
            </ProductStyle>
            <ProductDescription>
              Dolato 1g Batter
            </ProductDescription>
            <ProductPrice><p>$40.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2309-de1435c516ea37699cd5b4141604628027375.jpg"} alt="concentrate"></img>
            </ProductImage>
            <ProductStyle>
                <p>Concentrate</p>
            </ProductStyle>
            <ProductDescription>
              Black Afghan .5g Shatter
            </ProductDescription>
            <ProductPrice><p>$20.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2308-031b9d55370258d9a760c7bc1617335461014.png"} alt="concentrate"></img>
            </ProductImage>
            <ProductStyle>
                <p>Concentrate</p>
            </ProductStyle>
            <ProductDescription>
              Tangie Crush 1g Live Resin
            </ProductDescription>
            <ProductPrice><p>$45.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2308-246e010325ee3a393aff25001617353382425.jpg"} alt="edibles"></img>
            </ProductImage>
            <ProductStyle>
                <p>Edibles</p>
            </ProductStyle>
            <ProductDescription>
              Berry Lemon Balance THC:CBD Drink
            </ProductDescription>
            <ProductPrice><p>$10.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2308-a4a602f3ac637115bbbaffb01617346374791.jpg"} alt="edibles"></img>
            </ProductImage>
            <ProductStyle>
                <p>Edibles</p>
            </ProductStyle>
            <ProductDescription>
              Midnight Blueberry 100mg Gummies
            </ProductDescription>
            <ProductPrice><p>$20.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2309-85a4a57dd9795017195436661594504519855.jpg"} alt="edibles"></img>
            </ProductImage>
            <ProductStyle>
                <p>Edibles</p>
            </ProductStyle>
            <ProductDescription>
              Salted Caramel 3pk Macaron 30mg
            </ProductDescription>
            <ProductPrice><p>$15.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2308-11eb082ab50d8f9595dc018d1617347794661.png"} alt="edibles"></img>
            </ProductImage>
            <ProductStyle>
                <p>Edibles</p>
            </ProductStyle>
            <ProductDescription>
              Strawberry Crunch 100mg Bar
            </ProductDescription>
            <ProductPrice><p>$22.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2308-cedacc6b76202460c29177281617350009068.jpg"} alt="oral"></img>
            </ProductImage>
            <ProductStyle>
                <p>Oral</p>
            </ProductStyle>
            <ProductDescription>
              CBD Summer Peach Tincture 1,000mg
            </ProductDescription>
            <ProductPrice><p>$40.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2309-d722953f5de0f5061c2f2fca1590089701550.jpg"} alt="oral"></img>
            </ProductImage>
            <ProductStyle>
                <p>Oral</p>
            </ProductStyle>
            <ProductDescription>
              Digest Hemp Tincture 750mg
            </ProductDescription>
            <ProductPrice><p>$55.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2308-58f511c9591a7b95727a4c3f1617640066187.jpg"} alt="oral"></img>
            </ProductImage>
            <ProductStyle>
                <p>Oral</p>
            </ProductStyle>
            <ProductDescription>
              Potent Pack RSO 1:1 1g Capsules
            </ProductDescription>
            <ProductPrice><p>$30.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2309-844caabd0b495c39cb0fb5e51596582415058.jpg"} alt="oral"></img>
            </ProductImage>
            <ProductStyle>
                <p>Oral</p>
            </ProductStyle>
            <ProductDescription>
              Pure THC Drops 800mg
            </ProductDescription>
            <ProductPrice><p>$65.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2309-9c8a88f895b73a7de16d71f21590089689564.jpg"} alt="topical"></img>
            </ProductImage>
            <ProductStyle>
                <p>Topical</p>
            </ProductStyle>
            <ProductDescription>
              After-Sun Gel 300mg
            </ProductDescription>
            <ProductPrice><p>$25.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2314-0427a71294b9960d315172de1617724888462.png"} alt="topical"></img>
            </ProductImage>
            <ProductStyle>
                <p>Topical</p>
            </ProductStyle>
            <ProductDescription>
              Body Wellness Cream CBD
            </ProductDescription>
            <ProductPrice><p>$55.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2308-39ab0749fe2ab119ced7e31b1620196661692.jpg"} alt="topical"></img>
            </ProductImage>
            <ProductStyle>
                <p>Topical</p>
            </ProductStyle>
            <ProductDescription>
              CBD Lip Balm 50mg
            </ProductDescription>
            <ProductPrice><p>$8.00</p></ProductPrice>
        </Card>
        <Card>
            <ProductImage>
                <img src={"https://s3-us-west-1.amazonaws.com/dataowl-2/production/pictures/2308-652579faee33699d42f0163d1617350294343.jpg"} alt="topical"></img>
            </ProductImage>
            <ProductStyle>
                <p>Topical</p>
            </ProductStyle>
            <ProductDescription>
              CBD Malibu Mary Bubble Bath 150mg
            </ProductDescription>
            <ProductPrice><p>$20.00</p></ProductPrice>
        </Card>
      </>
    )
}

export default ProductCard
