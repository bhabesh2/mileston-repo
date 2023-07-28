import React from 'react'

export default function remove(props) {
    return (
        <div>
            localStorage.removeItem({props.removeItems});
        </div>
    )
}