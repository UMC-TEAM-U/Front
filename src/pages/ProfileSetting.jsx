import React, { useState } from 'react'
import TitleBar from '../component/home/TitleBar'
import styled from 'styled-components'
import { COLORS } from '../styles/theme'
import Button from '../component/common/Button'
import InputCom from '../component/login/InputCom'

function ProfileSetting() {
    const [name, setName] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        console.log(name)

        // 서버로 데이터 전송
    }

    return (
        <Container>
            <TitleBar text="설정" />
            <Con>
                <InputCom
                    text="이름"
                    placeholder="시리우스"
                    backgroundColor={COLORS.lightgray}
                    color={COLORS.gray}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <ButtonContainer>
                    <Button
                        text="저장하기"
                        color="gray"
                        onClick={handleSubmit}
                    />
                </ButtonContainer>
            </Con>
        </Container>
    )
}

export default ProfileSetting

const Container = styled.div`
    padding-top: 40px;
    background-color: ${COLORS.black};
    height: 100vh;
    display: flex;
    flex-direction: column;
`
const ButtonContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
`

const Con = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 110px;
`
