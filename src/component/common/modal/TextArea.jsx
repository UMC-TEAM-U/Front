import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../styles/theme'

const TextArea = placeholder => {
    const [textValue, setTextValue] = useState('')

    const handleSetValue = e => {
        setTextValue(e.target.value)
    }
    return (
        <Container
            placeholder={placeholder.placeholder}
            value={textValue}
            onChange={e => handleSetValue(e)}
            maxLength={60}
        ></Container>
    )
}

export default TextArea

const Container = styled.textarea`
    width: auto;
    height: 140px;
    border: none;
    margin-top: 10px;
    background-color: ${COLORS.white};
    padding: 20px 15px;
    box-sizing: border-box;
    align-items: center;
    flex-shrink: 0;
    border-radius: 10px;

    font-family: Pretendard Variable;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 120% */
    letter-spacing: -0.5px;
    color: ${COLORS.gray};

    &::placeholder {
        color: ${COLORS.gray};
    }

    &:focus {
        outline: none;
    }
`
