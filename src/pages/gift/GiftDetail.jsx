import styled from 'styled-components'
import ListBox from '../../component/common/box/ListBox'
import DarkButton from '../../component/common/DarkButton'
import TitleBar from '../../component/home/TitleBar'
import UserBanner from '../../component/home/UserBanner'
import { COLORS } from '../../styles/theme'
import { useState } from 'react'
import Button from '../../component/common/Button'
import GiftAddModal from '../../component/common/modal/GiftAddModal'
const GiftDetail = () => {
    const [birthday, setBirthday] = useState(true)
    const [event, setEvent] = useState(false)
    const [giftModal, setGiftModal] = useState(false)
    const [eventModal, setEventModal] = useState(false)

    const handleBirthday = () => {
        setBirthday(true)
        setEvent(false)
    }

    const handleEvent = () => {
        setBirthday(false)
        setEvent(true)
    }

    const handleGiftClick = () => {
        setGiftModal(prev => !prev)
    }

    const handleEventClick = () => {
        setEventModal(prev => !prev)
    }

    return (
        <Container>
            <TitleBar text="바나나먹는곰돌이 님" />
            <UserBanner />
            <DarkButton text="생일 선물 추가하기" onClick={handleGiftClick} />
            <DarkButton text="경조사 추가하기" onClick={handleEventClick} />

            <Actions>
                <StyledButton
                    text="생일선물"
                    onClick={() => handleBirthday()}
                    color={birthday ? COLORS.pink : 'gray'}
                />
                <StyledButton
                    text="경조사"
                    onClick={() => handleEvent()}
                    color={event ? COLORS.pink : 'gray'}
                />
            </Actions>
            {giftModal && (
                <GiftAddModal
                    type="생일"
                    options={giftOptions}
                    onClick={handleGiftClick}
                />
            )}
            {eventModal && (
                <GiftAddModal
                    type="경조사"
                    options={eventOptions}
                    onClick={handleEventClick}
                />
            )}

            {birthday && <ListBox type="선물 목록" />}
            {event && <ListBox type="경조사 목록" />}
        </Container>
    )
}

const giftOptions = [
    { id: '1', name: '10,000원 미만' },
    { id: '2', name: '10,000~20,000원대' },
    { id: '3', name: '20,000~30,000원대' },
    { id: '4', name: '30,000~40,000원대' },
    { id: '5', name: '50,000원대 이상' },
]

const eventOptions = [
    { id: '1', name: '50,000원 미만' },
    { id: '2', name: '50,000~100,000원대' },
    { id: '3', name: '100,000~200,000원대' },
    { id: '4', name: '200,000~300,000원대' },
]

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

const StyledButton = styled(Button)`
    padding: 10px 20px;
`
