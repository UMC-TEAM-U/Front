import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/theme'
import Banner from './Banner'
import Grade1 from '../../assets/img/Grade1.png'
import Grade2 from '../../assets/img/Grade2.png'
import Grade3 from '../../assets/img/Grade3.png'

const User = userData => {
    return (
        <Container>
            {userData.userData?.level === '1' && <IconImg src={Grade1} />}
            {userData.userData?.level === '2' && <IconImg src={Grade2} />}
            {userData.userData?.level === '3' && <IconImg src={Grade3} />}
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
