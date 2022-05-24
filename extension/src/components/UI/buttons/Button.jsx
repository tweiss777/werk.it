import './Button.css'

import React from 'react'
import { nanoid } from 'nanoid'

const Button = (props) => {
    // Props
    const {
        children,
        onClick,
        disabled,
        image,
        className = '',
        secondary,
        round,
        noBorder,
        right,
        type,
        only = false
    } = props

    const contents = [
        image && <div className={`image${(round || only) ? ' only' : ''}`} key={nanoid(7)}>{image}</div>,
        children && <div className="contents" key={nanoid(7)}>{children}</div>,
    ]

    if (right) contents.reverse()

    // Return
    return (
        <button
            disabled={disabled}
            className={`Button ${secondary ? 'secondary ' : ''}
                ${round ? 'round ' : ''}
                ${noBorder ? 'noBorder ' : ''}${className}`}
            onClick={onClick}
            type={type}
        >
            {contents}
        </button>
    )
}

export default Button
