import React from 'react'
import Input from '../common/Input'
import PropTypes from 'prop-types'

function InputCom({ text, placeholder, backgroundColor, color }) {
    return (
        <div>
            <span style={{ color: '#FFF' }}> {text}</span>
            <Input
                placeholder={placeholder}
                backgroundColor={backgroundColor}
                color={color}
            />
        </div>
    )
}

InputCom.propTypes = {
    text: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default InputCom
