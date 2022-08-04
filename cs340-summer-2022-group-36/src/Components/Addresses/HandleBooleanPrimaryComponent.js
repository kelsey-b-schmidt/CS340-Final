import React from 'react'

export default function HandleBooleanPrimaryComponent(
    { isPrimaryUpdate, setIsPrimaryUpdate }) {

    const handlePrimaryChange = () => {
        if(isPrimaryUpdate === 0) {
            setIsPrimaryUpdate(1)
        }
        else if (isPrimaryUpdate === 1) {
            setIsPrimaryUpdate(0)
        }
    }

    if(isPrimaryUpdate === 0) {
        return <input type="checkbox"
                      id="isPrimary"
                      onChange={e => handlePrimaryChange(e)}/>
    }
    else if (isPrimaryUpdate ===1) {
        return <input type="checkbox"
                      id="isPrimary"
                      checked
                      onChange={e => handlePrimaryChange(e)} />
    }
}
