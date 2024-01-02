import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/theme'

const List = gift => {
    return (
        <Container>
            <Title>{gift.gift.title}</Title>
            <Price>
                <div>가격</div>
                <div>{gift.gift.price}</div>
            </Price>
        </Container>
    )
}

export default List

const Container = styled.div`
    background-color: ${COLORS.lightgray};
    border-radius: 12px;
    padding: 10px 10px 10px 20px;
    align-items: center;
    margin-top: 11px;
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
