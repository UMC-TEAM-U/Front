import React from 'react'
import styled from 'styled-components'

function TextContainer2() {
    return (
        <TextContainer>
            <TextStyle
                color="#fff"
                fontSize="18px"
                fontWeight="600"
                lineHeight="12px"
            >
                이메일
            </TextStyle>
            <TextStyle
                color="#fff"
                fontSize="16px"
                fontWeight="400"
                lineHeight="12px"
            >
                abc@gmail.com
            </TextStyle>
        </TextContainer>
    )
}

export default TextContainer2

const TextContainer = styled.div`
    margin-top: 35px;
    margin-left: 40px;
    gap: 33px;
    display: flex;
    flex-direction: row;
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
