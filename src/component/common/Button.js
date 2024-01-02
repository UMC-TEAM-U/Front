import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../../styles/theme'

function Button({ text, color, onClick }) {
    return (
        <ButtonStyle color={color} onClick={onClick}>
            <span>{text}</span>
        </ButtonStyle>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func, // 클릭 이벤트 핸들러를 받을 수 있도록 prop 추가
}

export default Button

const ButtonStyle = styled.button`
    height: 33px;
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
    }
`
