import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/theme'

const Banner = userData => {
    return (
        <Container>
            <Wrapper>
                <Level>{userData.userData.level}</Level>
                <Name>{userData.userData.name}</Name>
            </Wrapper>
        </Container>
    )
}

export default Banner

const Container = styled.div`
    width: 100%;
    height: 40px;
    background: #ff5cd1;
    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 84px;
`

const Level = styled.span`
    color: ${COLORS.white};
    font-family: Pretendard Variable;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const Name = styled.h5`
    color: ${COLORS.white};
    font-family: Pretendard Variable;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
    margin-top: 2px;
`
