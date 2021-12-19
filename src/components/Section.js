import React from 'react'
import style from 'styled-components'
import img from './images/model-3.jpg';
function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online For TouchLess Delivery</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inverntory
                </RightButton>
            </ButtonGroup>
        </Wrap>
    )
}

export default Section
const Wrap = style.div`
background-size:cover;
width:100vw;
height:100vh;
background-position:center;
background-image: url(${img});
background-repeat:no-repeat
`
const ItemText = style.div`
padding-top:15vh;
text-allign:center;
`
const ButtonGroup = style.div`

`
const LeftButton = style.div`

`
const RightButton = style(LeftButton)`
`