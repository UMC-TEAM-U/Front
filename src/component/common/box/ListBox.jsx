import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import GiftList from './GiftList'
import { COLORS } from '../../../styles/theme'
import GradeList from './GradeList'
import BuddyList from './BuddyList'
import PropTypes from 'prop-types'
import axios from 'axios'

const ListBox = ({ type, userData }) => {
    const [history, setHistory] = useState([])

    const getHistory = async () => {
        let token = localStorage.getItem('accessToken')
        console.log('userData=>', userData)
        await axios
            .get(
                `http://13.124.153.160:8080/api/friends/${userData.friend_id}/changes`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            )
            .then(res => {
                setHistory(res.data.result)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getHistory()
    }, [])

    return (
        <Container>
            <Title>{type}</Title>
            <Conntent>
                {(type.type === '선물 목록' || type.type === '경조사 목록') &&
                    giftDummy.map((gift, index) => {
                        return <GiftList data={gift} key={index} />
                    })}
                {type === '등급 일기' &&
                    history.map((history, index) => {
                        return <GradeList history={history} key={index} />
                    })}
                {type.type === '버디' &&
                    buddyDummy.map((buddy, index) => {
                        return <BuddyList data={buddy} key={index} />
                    })}
            </Conntent>
        </Container>
    )
}

ListBox.propTypes = {
    type: PropTypes.string.isRequired,
    userData: PropTypes.object.isRequired,
}

export default ListBox

export const ListContainer = styled.div`
    background-color: ${COLORS.lightgray};
    border-radius: 12px;
    padding: 10px;
    align-items: center;
    margin-top: 11px;
`

const Container = styled.div`
    width: 338px;
    height: 345px;
    background-color: ${COLORS.darkgray};
    border-radius: 12px;
    padding: 25px 10px 10px;
`
const Title = styled.div`
    font-size: 30px;
    font-family: Pretendard Variables;
    color: ${COLORS.white};
    font-weight: 700;
    padding-left: 13px;
    margin-bottom: 10px;
`

const Conntent = styled.div`
    overflow-y: scroll;
    height: 290px;
`
const giftDummy = [
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

const gradeDummy = [
    {
        nickname: '바나나먹는 곰돌이',
        grade: 1,
        before: 2,
        date: '2021.07.01',
    },
    {
        nickname: '바나나먹지마',
        grade: 1,
        before: 2,
        date: '2021.07.01',
    },

    {
        nickname: '더운사람',
        grade: 3,
        before: 2,
        date: '2021.07.01',
    },
    {
        nickname: '졸린사람',
        grade: 2,
        before: 3,
        date: '2021.07.01',
    },
]

const buddyDummy = [
    {
        nickname: '바나나먹는 곰돌이',
        grade: 1,
        recive: true,
        type: 'birthday',
    },
    {
        nickname: '바나나먹지마',
        grade: 1,
        recive: true,
        type: 'event',
    },
    {
        nickname: '더운사람',
        grade: 3,
        recive: false,
        type: 'birthday',
    },
    {
        nickname: '졸린사람',
        grade: 2,
        recive: true,
        type: 'event',
    },
]
