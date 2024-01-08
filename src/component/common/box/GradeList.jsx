import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../styles/theme'
import { ListContainer } from './ListBox'
import PropTypes from 'prop-types'

const GradeList = ({ history }) => {
    const getLevelName = level => {
        // level별 등급 이름 부여
        switch (level) {
            case 1:
                return '눈결정'
            case 2:
                return '눈송이'
            case 3:
                return '눈사람'
            default:
                break
        }
    }
    return (
        <ListContainer>
            <Box>
                <Name>
                    등급이 {getLevelName(history.before)}에서{' '}
                    <Bold>{getLevelName(history.after)}</Bold>이(가) 되었어요.
                </Name>
                <Grade>
                    <div>{history.reason}</div>
                    <Date>{history.updatedAt}</Date>
                </Grade>
            </Box>
        </ListContainer>
    )
}

GradeList.propTypes = {
    userData: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
}

export default GradeList

const Box = styled.div`
    color: ${COLORS.black};
    line-height: 18px;
    font-weight: 400;
    padding: 2px;
`

const Name = styled.div`
    font-size: 12px;
`

const Bold = styled.span`
    font-weight: 700;
`

const Grade = styled.div`
    font-size: 14px;
    display: flex;
    justify-content: space-between;
`

const Date = styled.div`
    font-size: 10px;
`
