import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/theme'
import AddIcon from '../../assets/icon/add-icon.svg'

function Header() {
    return (
        <Container>
            <Logo />
            <BtnContainer>
                <img src={AddIcon} />
                <span>버디 추가</span>
            </BtnContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 40px;
    background-color: ${COLORS.black};
    position: absolute;
    top: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 20px;
`

const Logo = styled.div`
    width: 24px;
    height: 24px;
    background-color: white;
`

const BtnContainer = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
    }

    span {
        color: ${COLORS.white};
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-left: 10px;
    }
`
