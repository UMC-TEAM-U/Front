import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/theme'

function TitleBar() {
    return (
        <Container>
            <Title>
                시리우스 님, <br />
                안녕하세요!
            </Title>
        </Container>
    )
}

export default TitleBar

const Container = styled.div`
    width: 100%;
    height: 195px;
    background-color: ${COLORS.darkgray};
    box-sizing: border-box;

    padding-top: 22px;
    padding-left: 26px;
`

const Title = styled.h1`
    color: #ff5cd1;
    font-family: Pretendard Variable;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
`
