import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../styles/theme'
import PropTypes from 'prop-types'

const ModalInput = ({ value, setValue, placeholder }) => {
    const handleChange = event => {
        setValue(event.target.value)
    }

    return (
        <InputStyle
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    )
}

ModalInput.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    setValue: PropTypes.func,
}

export default ModalInput

const InputStyle = styled.input`
    display: flex;
    width: 100%;
    height: 50px;
    padding: 0px 10px;
    box-sizing: border-box;
    margin-top: 6px;
    align-items: center;
    flex-shrink: 0;

    border: none;
    border-radius: 10px;
    background-color: ${COLORS.white};

    font-family: Pretendard Variable;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px; /* 70% */
    letter-spacing: -0.5px;
    color: ${COLORS.gray};

    &::placeholder {
        color: ${COLORS.gray};
    }

    &:focus {
        outline: none;
    }
`
