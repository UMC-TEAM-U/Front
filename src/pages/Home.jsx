import React, { useState } from 'react'
import styled from 'styled-components'
import TitleBar from '../component/home/TitleBar'
import UserBox from '../component/home/UserBox'
import LevelFilter from '../component/home/LevelFilter'

function Home() {
    const [selected, setSelected] = useState('0')

    return (
        <Container>
            <TitleBar text={'시리우스 님,<br />안녕하세요!'} />
            <LevelFilter selected={selected} setSelected={setSelected} />
            <UserBox selected={selected} />
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
