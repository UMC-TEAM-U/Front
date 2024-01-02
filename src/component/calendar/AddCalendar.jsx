import { styled } from 'styled-components'
import { COLORS } from '../../styles/theme'
import Button from '../common/Button'
import Select from 'react-select'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Arrow } from '../../assets/icon/arrow-down.svg'
import DropDown from '../common/modal/DropDown'

const Picker = styled.div`
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

const Hour = styled.select`
    height: 116px;
    background-color: ${COLORS.lightgray};
    color: ${COLORS.black};
    font-size: 80px;
    padding-left: 10px;
    padding-right: 10px;
`

const Minute = styled.select`
    height: 116px;
    background-color: ${COLORS.lightgray};
    color: ${COLORS.black};
    font-size: 80px;
    padding-left: 10px;
    padding-right: 10px;
`

const PickerTime = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const TimePicker = ({ value, onChange, setOpen }) => {
    const [hour, minute] = value.split(':')
    const [hourValue, setHourValue] = useState(hour)
    const [minuteValue, setMinuteValue] = useState(minute)

    const handleHour = e => {
        setHourValue(e.target.value)
    }

    const handleMinute = e => {
        setMinuteValue(e.target.value)
    }

    const handleConfirm = () => {
        onChange(`${hourValue}:${minuteValue}`)
        setOpen(false)
    }

    return (
        <Picker>
            <PickerTime>
                <Hour onChange={handleHour} value={hourValue}>
                    {Array.from({ length: 24 }, (_, i) => (
                        <option key={i} value={i}>
                            {i}
                        </option>
                    ))}
                </Hour>
                <Minute onChange={handleMinute} value={minuteValue}>
                    {Array.from({ length: 60 }, (_, i) => (
                        <option key={i} value={i}>
                            {i}
                        </option>
                    ))}
                </Minute>
            </PickerTime>

            <Actions>
                <Button text="취소" color={'gray'} onClick={setOpen} />
                <Button
                    text="확인"
                    color={COLORS.pink}
                    onClick={handleConfirm}
                />
            </Actions>
        </Picker>
    )
}

TimePicker.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    setOpen: PropTypes.func,
}

const AddCalendar = () => {
    const [value, onChange] = useState('10:00')
    const [open, setOpen] = useState(false)
    return (
        <Container>
            <Date>1월 3일 수요일</Date>
            <Title>친구 선택</Title>
            <DropDown options={buddyDummy} />

            <Title>시간 선택 </Title>
            <Time onClick={() => setOpen(!open)}>
                {value} <Arrow />
            </Time>
            {open && (
                <TimePicker
                    onChange={onChange}
                    value={value}
                    setOpen={setOpen}
                />
            )}
        </Container>
    )
}

AddCalendar.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    setOpen: PropTypes.func,
}

export default AddCalendar

const Container = styled.div`
    height: 600px;
    padding: 30px;
`

const Date = styled.div`
    font-size: 30px;
    color: ${COLORS.white};
`

const Title = styled.div`
    font-size: 20px;
    color: ${COLORS.white};
    margin-top: 30px;
    margin-bottom: 10px;
`

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    gap: 38px;
`

const Time = styled.div`
    font-size: 20px;
    color: ${COLORS.white};
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
`

const buddyDummy = [
    {
        name: '바나나먹는곰돌이',
        id: 1,
    },
    {
        name: '바나나먹지마',
        id: 2,
    },
    {
        name: '더운사람',
        id: 3,
    },
]
