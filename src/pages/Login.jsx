import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../component/common/Button'
import ImgCom from '../component/login/ImgCom'
import InputCom from '../component/login/InputCom'
import { COLORS } from '../styles/theme'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async () => {
        const data = {
            email,
            password,
        }

        // // 서버로 데이터 전송
        await axios
            .post('http://13.124.153.160:8080/api/users/login', data)
            .then(res => {
                console.log(res.data)
                if (res.data.isSuccess) {
                    localStorage.setItem('userName', res.data.result.nickName)
                    localStorage.setItem(
                        'accessToken',
                        res.data.result.tokenInfo.accessToken,
                    )
                    localStorage.setItem(
                        'refreshToken',
                        res.data.result.tokenInfo.refrechToken,
                    )
                    navigate('/home')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <ImgCom />

            <InputContainer>
                <InputCom
                    text="이메일"
                    type="text"
                    placeholder="abcdef@gmail.com"
                    backgroundColor={COLORS.lightgray}
                    color={COLORS.gray}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <InputCom
                    text="비밀번호"
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                    backgroundColor={COLORS.lightgray}
                    color={COLORS.gray}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </InputContainer>

            <StyledButton text="지금 바로 시작" onClick={handleSubmit} />
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
