import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../../../styles/theme'

function ModalButton({ text, onClick }) {
    return (
        <ButtonStyle onClick={onClick}>
            <span>{text}</span>
        </ButtonStyle>
    )
}

ModalButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default ModalButton

const ButtonStyle = styled.button`
    width: auto;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: ${COLORS.pink};
    position: absolute;
    bottom: 20px;
    padding: 13px 120px;
    cursor: pointer;

    span {
        color: ${COLORS.white};
        font-family: Pretendard Variable;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 14px; /* 70% */
        letter-spacing: -0.5px;
    }
`
