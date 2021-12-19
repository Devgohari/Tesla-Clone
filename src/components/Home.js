import React from 'react'
import style from 'styled-components'
import Section from './Section';
function Home() {
    return (
        <Container>
            <Section/>
        </Container>
    )
}

export default Home
const Container = style.div`
height: 100vh;

`
