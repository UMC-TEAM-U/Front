import React from 'react'
import styled from 'styled-components'
import GradeData from '../../../constants/Grade'
import { ListContainer } from './ListBox'

const BuddyList = data => {
    const buddy = data.data
    const grade = GradeData[buddy.grade - 1].name
    return (
        <ListContainer
            style={buddy.type === 'event' ? { backgroundColor: 'pink' } : null}
        >
            <Box>
                <Name>{buddy.nickname}</Name>
                <Grade>
                    Lv.{buddy.grade} {grade}
                </Grade>
            </Box>
        </ListContainer>
    )
}

export default BuddyList

const Box = styled.div`
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: end;
`

const Name = styled.div`
    font-size: 20px;
    font-weight: 700;
`
const Grade = styled.div`
    font-size: 12px;
`
