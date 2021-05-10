import React from 'react'
import { Artist } from './Artist'

export const Artists = ({items}) => {

    return (
        <div className="card">
            {
                items.map( (artist, idx) => (
                    <Artist key={idx} artist={artist} />
                ))
            }
        </div>
    )
}
