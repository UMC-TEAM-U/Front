import React from 'react'
import styled from 'styled-components'
import TitleBar from '../component/home/TitleBar'
import UserBox from '../component/home/UserBox'

function Home() {
    return (
        <Container>
            <TitleBar text="시리우스 님,<br />안녕하세요!" />
            <UserBox />
        </Container>
    )
}

export default Home

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-top: 40px;
    padding-bottom: 60px;
`
