import React from 'react'
import styled from 'styled-components'
import loginGift from '../../assets/img/loginGift.png'

function ImgCom() {
    return <ImgContainer src={loginGift} alt="loginGift" />
}

export default ImgCom

const ImgContainer = styled.img`
    width: 234px;
    height: 234px;
    margin-top: 58px;
    margin-bottom: 50px;
`
