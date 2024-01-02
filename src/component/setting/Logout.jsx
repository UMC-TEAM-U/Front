import React from 'react'
import styled from 'styled-components'

function Logout() {
    return (
        <Container>
            <TextStyle color="#fff" fontSize="18px">
                로그아웃
            </TextStyle>
        </Container>
    )
}

export default Logout

const Container = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-top: 300px;
`
const TextStyle = styled.span`
    color: ${props => props.color};
    font-family: Pretendard;
    font-size: ${props => props.fontSize};
    font-style: normal;
    font-weight: ${props => props.fontWeight};
    line-height: ${props => props.lineHeight}%;
    letter-spacing: -0.5px;
`
