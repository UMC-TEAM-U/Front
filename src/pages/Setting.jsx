import React from 'react'
import TitleBar from '../component/home/TitleBar'
import TextContainer1 from '../component/setting/TextContainer1'
import TextContainer2 from '../component/setting/TextContainer2'
import Logout from '../component/setting/Logout'
import styled from 'styled-components'
import { COLORS } from '../styles/theme'
import { useNavigate } from 'react-router-dom'

function Setting() {
    const navigate = useNavigate()

    const handleProfileEdit = () => {
        navigate('/profile-setting')
    }

    return (
        <Container>
            <TitleBar text="설정" />
            <TextContainer1 onProfileEditClick={handleProfileEdit} />
            <TextContainer2 />
            <Logout />
        </Container>
    )
}

export default Setting

const Container = styled.div`
    padding-top: 40px;
    background-color: ${COLORS.black};
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`
