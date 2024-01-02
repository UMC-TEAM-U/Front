import React from 'react'
import styled from 'styled-components'
import List from './List'
import { COLORS } from '../../styles/theme'

const GiftBox = () => {
    return (
        <Container>
            <Title>받은 선물</Title>
            <Conntent>
                {dummy.map((gift, index) => (
                    <List key={index} gift={gift} />
                ))}
            </Conntent>
        </Container>
    )
}

export default GiftBox

const Container = styled.div`
    width: 338px;
    height: 345px;
    background-color: ${COLORS.darkgray};
    border-radius: 12px;
    padding: 25px 10px 10px;
`
const Title = styled.div`
    font-size: 30px;
    color: ${COLORS.white};
    font-weight: 700;
    padding-left: 13px;
    margin-bottom: 20px;
`

const Conntent = styled.div`
    overflow-y: scroll;
    height: 290px;
`
const dummy = [
    {
        title: '스타벅스 금액권',
        price: '10000원 대',
    },
    {
        title: '푸라닭 기프티콘',
        price: '10000원 대',
    },
    {
        title: '귀여운 키링',
        price: '10000원 대',
    },
    {
        title: '노트북 거치대',
        price: '10000원 대',
    },
    {
        title: 'BHC 치킨 치즈볼 세트',
        price: '20000원 대',
    },
    {
        title: '투썸 스초생 세트',
        price: '10000원 대',
    },
]
