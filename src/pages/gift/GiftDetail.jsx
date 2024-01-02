import styled from 'styled-components'
import ListBox from '../../component/common/box/ListBox'
import DarkButton from '../../component/common/DarkButton'
import TitleBar from '../../component/home/TitleBar'
import UserBanner from '../../component/home/UserBanner'
import { COLORS } from '../../styles/theme'
import { useState } from 'react'
import Button from '../../component/common/Button'
const GiftDetail = () => {
    const [birthday, setBirthday] = useState(true)
    const [event, setEvent] = useState(false)

    const handleBirthday = () => {
        setBirthday(true)
        setEvent(false)
    }

    const handleEvent = () => {
        setBirthday(false)
        setEvent(true)
    }
    return (
        <Container>
            <TitleBar text="바나나먹는곰돌이 님" />
            <UserBanner />
            <DarkButton text="생일 선물 추가하기" />
            <DarkButton text="경조사 추가하기" />

            <Actions>
                <Button
                    text="생일선물"
                    onClick={() => handleBirthday()}
                    color={birthday ? COLORS.pink : 'gray'}
                />
                <Button
                    text="경조사"
                    onClick={() => handleEvent()}
                    color={event ? COLORS.pink : 'gray'}
                />
            </Actions>

            {birthday && <ListBox type="선물 목록" />}
            {event && <ListBox type="경조사 목록" />}
        </Container>
    )
}

export default GiftDetail

const Container = styled.div`
    padding-top: 40px;
    padding-bottom: 100px;
    background-color: ${COLORS.black};
    width: 100%;
    height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: auto;
    box-sizing: border-box;
    &::-webkit-scrollbar {
        display: none;
    }
`
const Actions = styled.div`
    display: flex;
    gap: 11px;
    margin: 11px 0 9px 0;
`
