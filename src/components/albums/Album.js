import React from 'react';
import defaultImg from '../../img/default.jpeg';

export const Album = React.memo(({album}) => {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{album.name}</h5>
                <p className="card-text">Total Tracks: {album.total_tracks}</p>
            </div>

            {
                album.images && album.images.length > 0
                    ? <img src={album.images[0].url} className="card-img-top min-img" alt={album.name}></img>
                    : <img src={defaultImg} className="card-img-top min-img" alt={album.name}></img>
            }
            
        </div>
    )
})
