import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../styles/theme'
import DropDown from './DropDown'
import ModalButton from './ModalButton'
import XIcon from '../../../assets/icon/x-icon.svg'
import PropTypes from 'prop-types'
import TextArea from './TextArea'

const GiftAddModal = ({ type, options, onClick }) => {
    return (
        <Container>
            <Modal>
                <XButton src={XIcon} onClick={onClick} />
                <Title>{type} 추가하기</Title>
                <LevelBox type={type}>
                    <span>가격대</span>
                    <DropDown options={options} />
                </LevelBox>
                <InputBox>
                    <span>
                        {type === '생일' ? '선물' : '경조사'} 이름을 적어주세요.
                    </span>
                    <TextArea
                        type={type}
                        placeholder={
                            type === '생일'
                                ? '스타벅스 아메리카노 Tall'
                                : '결혼식에 와주었어요.'
                        }
                    />
                </InputBox>

                <ModalButton text="추가하기" />
            </Modal>
        </Container>
    )
}

GiftAddModal.propTypes = {
    type: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

export default GiftAddModal

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
    top: 35px;
    right: 28px;

    cursor: pointer;
`

const Modal = styled.div`
    width: 358px;
    height: 626px;
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
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: -0.5px;
    margin-bottom: 45px;
`

const LevelBox = styled.div`
    width: 100%;
    height: ${props => (props.type === '생일' ? '300px' : '250px')};
    margin-top: 20px;
`

const InputBox = styled.div`
    width: 100%;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
`
