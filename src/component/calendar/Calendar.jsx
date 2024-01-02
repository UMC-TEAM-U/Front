import { styled } from 'styled-components'
import { COLORS } from '../../styles/theme'

const CalendatList = data => {
    return (
        <Container>
            {data.list.map((item, index) => {
                return <List key={index} />
            })}
            <AddButton>
                <div>+ 일정 추가</div>
            </AddButton>
        </Container>
    )
}

export default CalendatList

const Container = styled.div`
    width: 390px;
    height: 100%;
    background-color: ${COLORS.darkgray};
`

export const List = () => {
    return (
        <ListBox>
            <div>12:00</div>
            <div>with 바나나먹는곰돌이</div>
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
