import React from 'react'
import Input from '../common/Input'
import PropTypes from 'prop-types'

function InputCom({
    text,
    placeholder,
    backgroundColor,
    color,
    value,
    onChange,
}) {
    return (
        <div>
            <span style={{ color: '#FFF' }}> {text}</span>
            <Input
                // type="text"
                placeholder={placeholder}
                backgroundColor={backgroundColor}
                color={color}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

InputCom.propTypes = {
    text: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
}

export default InputCom
