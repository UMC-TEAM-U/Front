import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/theme'
import HomeIcon from '../../assets/icon/home-icon.svg'
import CalendarIcon from '../../assets/icon/calendar-icon.svg'
import GiftIcon from '../../assets/icon/gift-icon.svg'
import SettingIcon from '../../assets/icon/setting-icon.svg'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()

    return (
        <Container>
            <Nav>
                <IconBox onClick={() => navigate('/home')}>
                    <img src={HomeIcon} />
                    <span>버디리스트</span>
                </IconBox>
                <IconBox onClick={() => navigate('/calendar')}>
                    <img src={CalendarIcon} />
                    <span>캘린더</span>
                </IconBox>
                <IconBox onClick={() => navigate('/gift')}>
                    <img src={GiftIcon} />
                    <span>선물관리</span>
                </IconBox>
                <IconBox onClick={() => navigate('/setting')}>
                    <img src={SettingIcon} />
                    <span>설정</span>
                </IconBox>
            </Nav>
        </Container>
    )
}

export default NavBar

const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${COLORS.darkgray};
    position: absolute;
    bottom: 0;
`

const Nav = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
`

const IconBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
    }

    span {
        margin-top: 5px;
        color: ${COLORS.white};
        text-align: center;
        font-family: Pretendard;
        font-size: 9px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    &:hover {
        filter: brightness(0.6);
    }
`
