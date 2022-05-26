/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

const useStickyState = (defaultValue, key, consistent) => {
    
    const storage = consistent ? window.localStorage : window.sessionStorage

    const [value, setValue] = useState(() => {
        const stickyValue = storage.getItem(key)
        return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
    })

    useEffect(() => {
        storage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export default useStickyState
