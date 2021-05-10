import React from 'react';
import { Artist } from '../artists/Artist';

export const Tracks = React.memo(({items}) => {

    let existsAlbum = false;

    if( items[0].track_number ) {
        existsAlbum = true;
    } else {
        existsAlbum = false
    }
   
    return (
        <div className="card">
            {
                existsAlbum &&
                items.map( (track) => (
                    <Artist key={track.id} artist={track.artists[0]} />
                ))
            }
        </div>
    )
})
