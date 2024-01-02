import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../component/common/Button'
import ImgCom from '../component/login/ImgCom'
import InputCom from '../component/login/InputCom'
import { COLORS } from '../styles/theme'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async event => {
        navigate('/home')
        // event.preventDefault()
        // const data = {
        //     email,
        //     password,
        // }

        // console.log(data)

        // // 서버로 데이터 전송
        // await axios('http://13.124.153.160:8080/api/users/login', data)
        //     .then(res => {
        //         console.log(res.data)
        //         if (res.data.isSuccess) {
        //             navigate('/home')
        //         }
        //     })
        //     .catch(err => console.log(err))
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
                    text="이메일"
                    placeholder="abcdef@gmail.com"
                    backgroundColor={COLORS.lightgray}
                    color={COLORS.gray}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <InputCom
                    text="비밀번호"
                    placeholder="비밀번호를 입력하세요."
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
