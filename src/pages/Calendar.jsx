import { styled } from 'styled-components'
import { COLORS } from '../styles/theme'
import Calendar from 'react-calendar'
import { useState } from 'react'
import '../styles/Calendar.css'
import moment from 'moment'
import { ReactComponent as PrevIcon } from '../assets/icon/calendar-prev.svg'
import { ReactComponent as NextIcon } from '../assets/icon/calendar-next.svg'
import { BottomSheet } from 'react-spring-bottom-sheet'
import '../styles/BottomSheet.css'
import CalendatList from '../component/calendar/Calendar'

const CalendarPage = () => {
    const [value, onChange] = useState(new Date())
    const [open, setOpen] = useState(false)
    return (
        <Container>
            <Calendar
                locale="en"
                formatDay={(locale, date) => moment(date).format('D')}
                next2Label={null}
                prev2Label={null}
                nextLabel={<NextIcon />}
                prevLabel={<PrevIcon />}
                onChange={onChange}
                value={value}
                onClickDay={() => setOpen(true)}
            />

            <BottomSheet open={open} onDismiss={() => setOpen(false)}>
                <CalendatList list={dummy} />
            </BottomSheet>
        </Container>
    )
}

export default CalendarPage

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

const dummy = [
    {
        id: 1,
        name: '바나나싫은곰돌이',
        date: '2024-01-03',
        time: '10:00',
    },
    {
        id: 2,
        name: '클로버',
        date: '2024-01-03',
        time: '12:30',
    },
    {
        id: 3,
        name: '집갈래',
        date: '2024-01-03',
        time: '14:00',
    },
]
