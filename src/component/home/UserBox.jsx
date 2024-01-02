/* eslint-disable indent */

import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/theme'
import User from './User'
import PropTypes from 'prop-types'

const UserBox = props => {
    return (
        <Container>
            <Wrapper>
                {props.selected === '0'
                    ? dummy.map((userData, index) => (
                          <User
                              key={index}
                              userData={userData}
                              onClick={props.onUserClick}
                          />
                      ))
                    : dummy
                          .filter(item => item.level === props.selected)
                          .map((userData, index) => (
                              <User
                                  key={index}
                                  userData={userData}
                                  onClick={props.onUserClick}
                              />
                          ))}
            </Wrapper>
        </Container>
    )
}

UserBox.propTypes = {
    selected: PropTypes.string.isRequired,
    onUserClick: PropTypes.func.isRequired,
}

export default UserBox

const Container = styled.div`
    width: 100%;
    height: calc(100% - 255px);
    background-color: ${COLORS.black};

    display: flex;
    justify-content: center;
    box-sizing: border-box;
`

const Wrapper = styled.div`
    display: grid;
    gap: 12px;
    grid-template-columns: 111px 111px 111px;
    grid-template-rows: 111px 111px 111px 111px;
    overflow: auto;
    margin: 20px 0px;

    &::-webkit-scrollbar {
        display: none;
    }
`

const dummy = [
    {
        level: '1',
        name: '바나나먹는곰돌이',
    },
    {
        level: '2',
        name: '곰돌이',
    },
    {
        level: '1',
        name: '바나나먹는곰돌이',
    },
    {
        level: '3',
        name: '곰돌이',
    },
    {
        level: '1',
        name: '바나나먹는곰돌이',
    },
    {
        level: '2',
        name: '바나나먹는곰돌이',
    },
    {
        level: '1',
        name: '바나나먹는곰돌이',
    },
    {
        level: '3',
        name: '곰돌이',
    },
    {
        level: '2',
        name: '바나나먹는곰돌이',
    },
    {
        level: '1',
        name: '바나나먹는곰돌이',
    },
    {
        level: '3',
        name: '바나나먹는곰돌이',
    },
    {
        level: '2',
        name: '곰돌이',
    },
    {
        level: '3',
        name: '바나나먹는곰돌이',
    },
    {
        level: '2',
        name: '바나나먹는곰돌이',
    },
]
