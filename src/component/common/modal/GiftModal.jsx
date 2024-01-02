import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../styles/theme'
import XIcon from '../../../assets/icon/x-icon.svg'
import PropTypes from 'prop-types'

const GiftModal = ({ setGiftModal }) => {
    return (
        <Container>
            <Modal>
                <XButton src={XIcon} onClick={() => setGiftModal(false)} />
                <Title>
                    바나나먹는곰돌이 님에게
                    <br />
                    추천하는 선물
                </Title>
                <GiftBox>
                    <Gift src="" />
                    <Gift src="" />
                    <Gift src="" />
                </GiftBox>
            </Modal>
        </Container>
    )
}

GiftModal.propTypes = {
    setGiftModal: PropTypes.func,
}

export default GiftModal

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;

    display: flex;
    justify-content: center;
    align-items: center;
`

const XButton = styled.img`
    position: absolute;
    top: 40px;
    right: 28px;

    cursor: pointer;
`

const Modal = styled.div`
    width: 358px;
    height: 278px;
    background-color: ${COLORS.lightgray};
    box-sizing: border-box;
    padding: 20px;
    border-radius: 20px;
    position: relative;

    span {
        margin-left: 10px;
        font-family: Pretendard Variable;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 14px; /* 70% */
        letter-spacing: -0.5px;
    }
`

const Title = styled.h2`
    color: ${COLORS.black};
    font-family: Pretendard Variable;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 125% */
    letter-spacing: -0.5px;
`

const GiftBox = styled.div`
    width: 100%;
    margin-top: 30px;
    box-sizing: border-box;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
`

const Gift = styled.img`
    width: 90px;
    height: 90px;
`
