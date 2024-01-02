import React, { useState } from 'react'
import styled from 'styled-components'
import TitleBar from '../component/home/TitleBar'
import UserBox from '../component/home/UserBox'
import LevelFilter from '../component/home/LevelFilter'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [selected, setSelected] = useState('0')
    const navigate = useNavigate()
    const handleUserClick = () => {
        navigate('/buddy-detail')
    }

    return (
        <Container>
            <TitleBar text={'시리우스 님,<br />안녕하세요!'} />
            <LevelFilter selected={selected} setSelected={setSelected} />
            {/* <UserBox selected={selected} /> */}
            <UserBox selected={selected} onUserClick={handleUserClick} />
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
