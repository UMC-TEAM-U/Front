import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/theme'
import BarImage from '../../assets/img/BarImage.png'

function TitleBar(data) {
    const title = data.text?.split('<br />')
    return (
        <Container>
            <Title>
                {title?.map((text, index) => {
                    return <div key={index}>{text}</div>
                })}
            </Title>
        </Container>
    )
}

export default TitleBar

const Container = styled.div`
    width: 100%;
    height: 195px;
    min-height: 195px;
    background-color: ${COLORS.darkgray};
    box-sizing: border-box;

    padding-top: 22px;
    padding-left: 26px;

    background-image: url(${BarImage});
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 100% 100%;
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
