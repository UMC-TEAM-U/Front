import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/theme'
import SnowFlakeImg from '../../assets/img/snowflake.png'
import Banner from './Banner'

const User = userData => {
    return (
        <Container>
            <IconImg src={SnowFlakeImg} />
            <Banner userData={userData.userData} />
        </Container>
    )
}

export default User

const Container = styled.div`
    width: 111px;
    height: 111px;
    background-color: ${COLORS.darkgray};
    border-radius: 10px;
    position: relative;
    overflow: hidden;
`

const IconImg = styled.img`
    width: 77px;
    height: 85px;
    margin-left: 23px;
    margin-top: 13px;
`
