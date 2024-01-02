import styled from 'styled-components'
import ListBox from '../../component/common/box/ListBox'
import TitleBar from '../../component/home/TitleBar'
import { COLORS } from '../../styles/theme'
import { useState } from 'react'
import Button from '../../component/common/Button'
const Gift = () => {
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
            <TitleBar text="선물 관리" />
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
            <ListBox type="버디" />
        </Container>
    )
}

export default Gift

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 40px;
    padding-bottom: 100px;
    background-color: ${COLORS.black};
    display: flex;
    flex-direction: column;
    align-items: center;
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
`

const StyledButton = styled(Button)`
    padding: 10px 20px;
`
