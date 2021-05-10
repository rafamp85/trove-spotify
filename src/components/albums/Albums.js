import React from 'react'
import { Album } from './Album'

export const Albums = ({items}) => {
    return (
        <div className="card">
            {
                items.map( (album) => (
                    <Album key={album.id} album={album} />
                ))
            }
        </div>
    )
}
