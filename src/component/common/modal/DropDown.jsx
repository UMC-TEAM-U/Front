import { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../styles/theme'
import PropTypes from 'prop-types'

const DropDown = ({ currentValue, setCurrentValue, options }) => {
    const [showOptions, setShowOptions] = useState(false)

    const handleOnChangeSelectValue = e => {
        const { innerText } = e.target
        setCurrentValue(innerText)
    }

    return (
        <SelectBox onClick={() => setShowOptions(prev => !prev)}>
            <Label>{currentValue}</Label>
            <SelectOptions show={showOptions}>
                {options.map((option, index) => (
                    <Option key={index} onClick={handleOnChangeSelectValue}>
                        {option.name}
                    </Option>
                ))}
            </SelectOptions>
        </SelectBox>
    )
}

DropDown.propTypes = {
    currentValue: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    setCurrentValue: PropTypes.func,
}

export default DropDown

const SelectBox = styled.div`
    position: relative;
    width: auto;
    padding: 12px;
    background-color: ${COLORS.white};
    align-self: center;
    cursor: pointer;
    margin-top: 6px;
    border-radius: 8px;

    &::before {
        content: '⌵';
        position: absolute;
        top: 7px;
        right: 15px;
        color: ${COLORS.darkgray};
        font-size: 20px;
    }
`
const Label = styled.label`
    margin-left: 4px;
    text-align: center;
    font-size: 14px;
    box-sizing: border-box;
    font-family: Pretendard Variable;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px; /* 70% */
    letter-spacing: -0.5px;
    color: ${COLORS.gray};
`
const SelectOptions = styled.ul`
    position: absolute;
    list-style: none;
    top: 30px;
    left: 0;
    width: 100%;
    overflow: hidden;
    height: auto;
    max-height: ${props => (props.show ? 'none' : '0')};
    padding: 0;
    border-radius: 8px;
    background-color: ${COLORS.white};
    color: ${COLORS.black};
`
const Option = styled.li`
    font-size: 14px;
    padding: 14px;
    box-sizing: border-box;
    font-family: Pretendard Variable;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px; /* 70% */
    letter-spacing: -0.5px;
    color: ${COLORS.gray};

    &:hover {
        background-color: ${COLORS.gray};
        color: ${COLORS.white};
    }
`
