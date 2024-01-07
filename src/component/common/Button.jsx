import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../../styles/theme'

function Button({ text, color, className, onClick }) {
    return (
        <ButtonStyle color={color} className={className} onClick={onClick}>
            <span>{text}</span>
        </ButtonStyle>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,

    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Button

const ButtonStyle = styled.button`
    border: none;
    border-radius: 5px;
    background-color: ${props =>
        props.color === 'gray' ? COLORS.gray : COLORS.pink};
    position: relative;

    span {
        color: ${COLORS.white};
        font-family: PretendardVariable;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        padding: 22px 8px;
        text-align: center;
    }
`
