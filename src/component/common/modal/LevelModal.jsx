import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../styles/theme'
import DropDown from './DropDown'
import ModalButton from './ModalButton'
import XIcon from '../../../assets/icon/x-icon.svg'
import PropTypes from 'prop-types'
import TextArea from './TextArea'
import { useNavigate } from 'react-router-dom'
import { authInstance } from '../../../api/axios'

const LevelModal = ({ userData, setLevelModal }) => {
    const [value, setValue] = useState('')
    const [currentValue, setCurrentValue] = useState(`${options[0].name}`)
    const navigate = useNavigate()

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

    const changeLevel = async () => {
        const data = {
            friend_id: userData.friend_id,
            level: valueToLevel(currentValue),
            reason: value,
        }
        await authInstance
            .put('/api/friends', data)
            .then(res => {
                if (res.data.isSuccess) {
                    userData.level = `${valueToLevel(currentValue)}` // 수정 필요
                    setLevelModal(false)
                    navigate('/buddy-detail', {
                        state: {
                            data: userData,
                        },
                    })
                    window.location.replace('/buddy-detail')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Modal>
                <XButton src={XIcon} onClick={() => setLevelModal(false)} />
                <Title>등급 변경하기</Title>
                <LevelBox>
                    <span>등급</span>
                    <DropDown
                        currentValue={currentValue}
                        setCurrentValue={setCurrentValue}
                        options={options}
                    />
                </LevelBox>
                <InputBox>
                    <span>등급 변경 이유</span>
                    <TextArea
                        value={value}
                        setValue={setValue}
                        type="normal"
                        placeholder={'변경한 이유를 적어주세요.\n(최대 60자)'}
                    />
                </InputBox>

                <ModalButton text="추가하기" onClick={changeLevel} />
            </Modal>
        </Container>
    )
}

LevelModal.propTypes = {
    userData: PropTypes.object.isRequired,
    setLevelModal: PropTypes.func,
}

const options = [
    { id: '1', name: 'Lv.1 눈결정' },
    { id: '2', name: 'Lv.2 눈송이' },
    { id: '3', name: 'Lv.3 눈사람' },
]

export default LevelModal

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
    height: 573px;
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
    height: 200px;
    margin-top: 20px;
`

const InputBox = styled.div`
    width: 100%;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
`
