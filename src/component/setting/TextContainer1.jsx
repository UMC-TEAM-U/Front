import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/theme'
import Button from '../common/Button'

function TextContainer1() {
    return (
        <TextContainer>
            <TextStyle
                color={COLORS.pink}
                fontSize="20px"
                fontWeight="600"
                lineHeight="14px"
            >
                시리우스 님
            </TextStyle>
            <StyleButton color="gray" text="프로필 수정" />
        </TextContainer>
    )
}

export default TextContainer1

const TextContainer = styled.div`
    margin-top: 54px;
    margin-left: 40px;
    gap: 16px;
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

const StyleButton = styled(Button)`
    display: flex;
    /* width: 59px; */
    height: 22px;
    padding: 8px 6px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;

    span {
        color: #fff;
        text-align: center;
        font-family: Pretendard Variable;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: 14px; /* 140% */
        letter-spacing: -0.5px;
    }
`
