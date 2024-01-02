import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function Input({ placeholder, backgroundColor, color }) {
    const [value, setValue] = useState('')

    const handleChange = event => {
        setValue(event.target.value)
        console.log(event.target.value)
    }

    return (
        <InputStyle
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            backgroundColor={backgroundColor}
            color={color}
        />
    )
}

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default Input

const InputStyle = styled.input.attrs(props => ({
    placeholder: props.placeholder,
    backgroundColor: props.backgroundColor,
    color: props.color,
}))`
    display: flex;
    width: 260px;
    height: 50px;
    padding-left: 10px;
    margin-top: 6px;
    margin-left: 7px;
    align-items: center;
    flex-shrink: 0;

    border: none;
    border-radius: 10px;
    background-color: ${props => props.backgroundColor};

    ::placeholder {
        color: ${props => props.color};
    }
`
