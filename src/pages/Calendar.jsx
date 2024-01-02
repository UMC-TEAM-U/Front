import { styled } from 'styled-components'
import { COLORS } from '../styles/theme'
import Calendar from 'react-calendar'
import { useState } from 'react'
import '../styles/Calendar.css'
import moment from 'moment'
import { ReactComponent as PrevIcon } from '../assets/icon/calendar-prev.svg'
import { ReactComponent as NextIcon } from '../assets/icon/calendar-next.svg'

const CalendarPage = () => {
    const [value, onChange] = useState(new Date())
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
            />
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
