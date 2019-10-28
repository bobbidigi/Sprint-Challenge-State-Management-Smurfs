import React from 'react'

export default function Smurf(props) {
    console.log("smurf",props)
    return (
        <div className="card">
            <h1>{props.smurf.name}</h1>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </div>
    )
}
