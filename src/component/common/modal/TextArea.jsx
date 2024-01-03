import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../styles/theme'
import PropTypes from 'prop-types'

const TextArea = ({ value, setValue, type, placeholder }) => {
    return (
        <Container
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
            maxLength={60}
        ></Container>
    )
}

export default TextArea

TextArea.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}

const Container = styled.textarea`
    width: auto;
    height: ${props => (props.type === '생일' ? '60px' : '140px')};
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
