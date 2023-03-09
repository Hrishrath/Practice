import React from 'react'
import style from './style'

const Form = () => {

    const customStyle = style();

    return (
        <div>
            <div style='flex'>
                <h1>ABCD</h1>
            </div>
            <div style='flex'>
                <h1>CDEF</h1>
            </div>
            <label>NAme</label>
            <input type="text" value="abc" />
        </div>
    )
}

export default Form