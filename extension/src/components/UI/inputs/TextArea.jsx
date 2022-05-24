import './TextArea.css'

import React from 'react'
import { v4 as uuid } from 'uuid'

const TextArea = (props) => {
    // Props
    const { onChange, label, placeHolder, rows, value, name = uuid() } = props

    // Return
    return (
        <div className="TextArea">
            {label && <label htmlFor={name}>{label}</label>}
            <textarea
                placeholder={placeHolder}
                rows={rows}
                name={name}
                id={name}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default TextArea
