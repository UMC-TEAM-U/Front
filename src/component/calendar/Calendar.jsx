import { styled } from 'styled-components'
import { COLORS } from '../../styles/theme'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { BottomSheet } from 'react-spring-bottom-sheet'
import '../../styles/BottomSheet.css'
import AddCalendar from './AddCalendar'

const CalendatList = ({ list }) => {
    const [add, setAdd] = useState(false)
    return (
        <Container>
            {list.map((item, index) => {
                return <List key={index} list={item} />
            })}
            <AddButton>
                <div onClick={() => setAdd(true)}>+ 일정 추가</div>
            </AddButton>
            <BottomSheet open={add} onDismiss={() => setAdd(false)}>
                <AddCalendar />
            </BottomSheet>
        </Container>
    )
}
CalendatList.propTypes = {
    list: PropTypes.array,
}

export default CalendatList

const Container = styled.div`
    width: 390px;
    height: 100%;
    background-color: ${COLORS.darkgray};
`

export const List = item => {
    console.log(item)
    return (
        <ListBox>
            <div>{item.list.time}</div>
            <div>with {item.list.name}</div>
        </ListBox>
    )
}

const ListBox = styled.div`
    width: 338px;
    height: 50px;
    background-color: ${COLORS.lightgray};
    border-radius: 10px;
    padding: 10px;
    margin-top: 11px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    color: ${COLORS.black};
    margin-bottom: 20px;
`

const AddButton = styled.div`
    width: 340px;
    height: 50px;
    background-color: ${COLORS.gray};
    border-radius: 10px;
    display: flex;
    // justify-content: center;
    padding: 10px;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    color: ${COLORS.black};
    margin-bottom: 20px;
`
