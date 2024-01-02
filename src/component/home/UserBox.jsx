import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/theme'
import User from './User'

function UserBox() {
    return (
        <Container>
            <Wrapper>
                {dummy.map((userData, index) => (
                    <User key={index} userData={userData} />
                ))}
            </Wrapper>
        </Container>
    )
}

export default UserBox

const Container = styled.div`
    width: 100%;
    height: calc(100% - 195px);
    background-color: ${COLORS.black};

    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 20px 0px;
`

const Wrapper = styled.div`
    display: grid;
    gap: 12px;
    grid-template-columns: 111px 111px 111px;
    grid-template-rows: 111px 111px 111px 111px;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

const dummy = [
    {
        level: 'Lv.1 눈결정',
        name: '바나나먹는곰돌이',
    },
    {
        level: 'Lv.1 눈결정',
        name: '곰돌이',
    },
    {
        level: 'Lv.1 눈결정',
        name: '바나나먹는곰돌이',
    },
    {
        level: 'Lv.1 눈결정',
        name: '곰돌이',
    },
    {
        level: 'Lv.1 눈결정',
        name: '바나나먹는곰돌이',
    },
    {
        level: 'Lv.1 눈결정',
        name: '바나나먹는곰돌이',
    },
    {
        level: 'Lv.1 눈결정',
        name: '바나나먹는곰돌이',
    },
    {
        level: 'Lv.1 눈결정',
        name: '곰돌이',
    },
    {
        level: 'Lv.1 눈결정',
        name: '바나나먹는곰돌이',
    },
    {
        level: 'Lv.1 눈결정',
        name: '바나나먹는곰돌이',
    },
    {
        level: 'Lv.1 눈결정',
        name: '바나나먹는곰돌이',
    },
    {
        level: 'Lv.1 눈결정',
        name: '곰돌이',
    },
    {
        level: 'Lv.1 눈결정',
        name: '바나나먹는곰돌이',
    },
    {
        level: 'Lv.1 눈결정',
        name: '바나나먹는곰돌이',
    },
]
