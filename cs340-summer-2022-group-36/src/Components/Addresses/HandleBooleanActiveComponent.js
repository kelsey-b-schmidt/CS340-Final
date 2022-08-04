import React from 'react'

export default function HandleBooleanActiveComponent(
    { isActiveUpdate, setIsActiveUpdate }) {

    const handleActiveChange = () => {
        if(isActiveUpdate === 0) {
            setIsActiveUpdate(1)
        }
        else if (isActiveUpdate === 1) {
            setIsActiveUpdate(0)
        }
    }

    if(isActiveUpdate === 0) {
        return <input type="checkbox"
                      id="isActive"
                      onChange={e => handleActiveChange(e)}/>
    }
    else if (isActiveUpdate ===1) {
        return <input type="checkbox"
                      id="isActive"
                      checked
                      onChange={e => handleActiveChange(e)} />
    }
}
