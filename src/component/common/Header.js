import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/theme'
import AddIcon from '../../assets/icon/add-icon.svg'
import BuddyAddModal from './modal/BuddyAddModal'
import { ReactComponent as Logo } from '../../assets/icon/Logo.svg'

function Header() {
    const [modal, setModal] = useState(false)
    return (
        <Container>
            <Logo />
            <BtnContainer onClick={() => setModal(true)}>
                <img src={AddIcon} />
                <span>버디 추가</span>
            </BtnContainer>
            {modal && <BuddyAddModal setModal={setModal} />}
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

// const Logo = styled.div`
//     width: 24px;
//     height: 24px;
//     background-color: white;
// `

const BtnContainer = styled.button`
    display: flex;
    align-items: center;
    background-color: ${COLORS.black};
    border: none;
    cursor: pointer;

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

    &:hover {
        span {
            color: ${COLORS.gray};
        }

        img {
            filter: brightness(0.6);
        }
    }
`
