import React from 'react';
import { useHistory } from 'react-router';
import defaultImg from '../../img/default.jpeg';

export const Album = React.memo(({album}) => {

    const history = useHistory();

    const onDetail = () => {
        history.push(`/albumDetails/${album.id}`);
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{album.name}</h5>
                <p className="card-text">Total Tracks: {album.total_tracks}</p>
            </div>

            {
                album.images && album.images.length > 0
                    ? <button onClick={onDetail}>
                        <img src={album.images[0].url} className="card-img-top min-img" alt={album.name}></img>
                    </button>
                    
                    : <button onClick={onDetail}>
                        <img src={defaultImg} className="card-img-top min-img" alt={album.name}></img>
                    </button>
            }
            
        </div>
    )
})
