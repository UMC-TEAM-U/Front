import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../component/common/Button'
import ImgCom from '../component/login/ImgCom'
import InputCom from '../component/login/InputCom'
import { COLORS } from '../styles/theme'

function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)

    const handleSubmit = event => {
        event.preventDefault()
        const data = {
            name,
            email,
            password,
        }

        console.log(data)

        // 서버로 데이터 전송
    }

    useEffect(() => {
        if (name && email && password) {
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }, [name, email, password])

    return (
        <Container>
            <ImgCom />

            <InputContainer>
                <InputCom
                    text="이름"
                    placeholder="최대 8글자"
                    backgroundColor={COLORS.lightgray}
                    color={COLORS.gray}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <InputCom
                    text="이메일"
                    placeholder="abcdef@gmail.com"
                    backgroundColor={COLORS.lightgray}
                    color={COLORS.gray}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <InputCom
                    text="비밀번호"
                    placeholder="최대 영문 6글자 이상"
                    backgroundColor={COLORS.lightgray}
                    color={COLORS.gray}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </InputContainer>

            <StyledButton
                text="지금 바로 시작"
                onClick={handleSubmit}
                disabled={!isFormValid}
            />
        </Container>
    )
}

export default Login

const Container = styled.div`
    background-color: ${COLORS.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
const InputContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 40px;
`
const StyledButton = styled(Button)`
    margin-bottom: 83px;
    padding: 10px 60px;
`
