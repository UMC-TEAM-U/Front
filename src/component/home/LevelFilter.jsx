import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/theme'
import PropTypes from 'prop-types'

const LevelFilter = ({ selected, setSelected }) => {
    return (
        <Container>
            <Wrapper>
                <Label selected={selected === '0'}>
                    <input
                        type="radio"
                        value={'0'}
                        checked={selected === '0'}
                        onChange={e => setSelected(e.target.value)}
                    />
                    전체
                </Label>
                <Label selected={selected === '1'}>
                    <input
                        type="radio"
                        value={'1'}
                        checked={selected === '1'}
                        onChange={e => setSelected(e.target.value)}
                    />
                    Lv.1 눈결정
                </Label>
                <Label selected={selected === '2'}>
                    <input
                        type="radio"
                        value={'2'}
                        checked={selected === '2'}
                        onChange={e => setSelected(e.target.value)}
                    />
                    Lv.2 눈송이
                </Label>
                <Label selected={selected === '3'}>
                    <input
                        type="radio"
                        value={'3'}
                        checked={selected === '3'}
                        onChange={e => setSelected(e.target.value)}
                    />
                    Lv.3 눈사람
                </Label>
            </Wrapper>
        </Container>
    )
}

export default LevelFilter

LevelFilter.propTypes = {
    selected: PropTypes.string.isRequired,
    setSelected: PropTypes.func,
}

const Container = styled.div`
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 0px 20px;
    background-color: ${COLORS.black};

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`

const Wrapper = styled.div`
    display: flex;
    gap: 12px;
`

const Label = styled.label`
    color: ${props => (props.selected ? COLORS.pink : COLORS.white)};
    background-color: ${COLORS.black};
    border: none;
    cursor: pointer;

    font-family: Pretendard Variable;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: ${props => (props.selected ? 'underline' : 'none')};
    input {
        display: none;
        width: 0;
        height: 0;
    }
`
