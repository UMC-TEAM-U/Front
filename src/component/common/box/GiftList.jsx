import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../styles/theme'
import { ListContainer } from './ListBox'

const GiftList = data => {
    const gift = data.data
    return (
        <ListContainer>
            <Box>
                <Title>{gift.title}</Title>
                <Price>
                    <div>가격</div>
                    <div style={{ fontWeight: '700' }}>{gift.price}</div>
                </Price>
            </Box>
        </ListContainer>
    )
}

export default GiftList

const Box = styled.div`
    padding-left: 10px;
`

const Title = styled.div`
    color: ${COLORS.black};
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 7px;
`

const Price = styled.div`
    color: ${COLORS.darkgray};
    font-size: 12px;
    font-weight: 400;
    display: flex;
    gap: 10px;
`
