import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../styles/theme'
import { ListContainer } from './ListBox'
import GradeData from '../../../constants/Grade'

const GradeList = data => {
    const grade = data.data
    const before = GradeData[grade.before - 1].name
    const after = GradeData[grade.grade - 1].name

    return (
        <ListContainer>
            <Box>
                <Name>
                    <Bold>{grade.nickname}</Bold> 님의 등급이
                </Name>
                <Grade>
                    <div>
                        {before}에서 <Bold>{after}</Bold>이 되었어요.
                    </div>
                    <Date>{grade.date}</Date>
                </Grade>
            </Box>
        </ListContainer>
    )
}

export default GradeList

const Box = styled.div`
    color: ${COLORS.black};
    line-height: 18px;
    font-weight: 400;
    padding: 2px;
`

const Name = styled.div`
    font-size: 16px;
`

const Bold = styled.span`
    font-weight: 700;
`

const Grade = styled.div`
    font-size: 12px;
    display: flex;
    justify-content: space-between;
`

const Date = styled.div`
    font-size: 10px;
`
