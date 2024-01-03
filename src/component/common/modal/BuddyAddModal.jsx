import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../styles/theme'
import DropDown from './DropDown'
import ModalInput from './ModalInput'
import ModalButton from './ModalButton'
import XIcon from '../../../assets/icon/x-icon.svg'
import PropTypes from 'prop-types'
import axios from 'axios'

const BuddyAddModal = ({ setModal }) => {
    const [value, setValue] = useState('')
    const [currentValue, setCurrentValue] = useState(`${options[0].name}`)

    const valueToLevel = v => {
        switch (v) {
            case 'Lv.1 눈결정':
                return 1
            case 'Lv.2 눈송이':
                return 2
            case 'Lv.3 눈사람':
                return 3
            default:
                return 1
        }
    }

    const addBuddy = async () => {
        const data = {
            nickname: value,
            level: valueToLevel(currentValue),
            memo: '',
        }
        const token = localStorage.getItem('accessToken')
        await axios
            .post('http://13.124.153.160:8080/api/friends', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(res => {
                console.log(res.data)
                if (res.data.isSuccess) {
                    setModal(false)
                    window.location.replace('/home')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Modal>
                <XButton src={XIcon} onClick={() => setModal(false)} />
                <Title>버디 추가하기</Title>
                <span>이름 (최대 8자)</span>
                <ModalInput
                    value={value}
                    setValue={setValue}
                    placeholder={'버디의 이름을 입력하세요.'}
                />
                <LevelBox>
                    <span>등급</span>
                    <DropDown
                        options={options}
                        currentValue={currentValue}
                        setCurrentValue={setCurrentValue}
                    />
                </LevelBox>

                <ModalButton text="추가하기" onClick={addBuddy} />
            </Modal>
        </Container>
    )
}

BuddyAddModal.propTypes = {
    setModal: PropTypes.func,
}

const options = [
    { id: '1', name: 'Lv.1 눈결정' },
    { id: '2', name: 'Lv.2 눈송이' },
    { id: '3', name: 'Lv.3 눈사람' },
]

export default BuddyAddModal

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
    height: 500px;
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
    margin-top: 20px;
`
