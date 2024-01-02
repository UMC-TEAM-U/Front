import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../../styles/theme'

function DarkButton({ text, color, onClick }) {
    return (
        <ButtonStyle color={color} onClick={onClick}>
            <span>+ {text}</span>
        </ButtonStyle>
    )
}

DarkButton.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func, // 클릭 이벤트 핸들러를 받을 수 있도록 prop 추가
}

export default DarkButton

const ButtonStyle = styled.button`
    width: 358px;
    height: 50px;
    min-height: 50px;
    border: none;
    border-radius: 12px;
    background-color: ${COLORS.darkgray};
    text-align: left;

    span {
        color: ${COLORS.white};
        font-size: 14px;
        font-weight: 400;
        line-height: normal;
        padding: 14px 10px;
    }
`
