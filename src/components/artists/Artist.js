import React from 'react';
import { useHistory } from 'react-router-dom';

import defaultImg from '../../img/default.jpeg';

export const Artist = ({artist}) => {
    const history = useHistory();
    const popularity = artist.popularity ? artist.popularity : 0;

    const onDetail = () => {
        history.push(`/artistDetails/${artist.id}`);
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{artist.name}</h5>
                <p className="card-text">Popularity: {popularity}</p>
            </div>

            {
                artist.images && artist.images.length > 0
                    ? <button onClick={onDetail}>
                        <img src={artist.images[0].url} className="card-img-top min-img" alt={artist.name}></img>
                    </button>

                    : <button onClick={onDetail}>
                        <img src={defaultImg} className="card-img-top min-img" alt={artist.name}></img>
                    </button>
            }
            
        </div>
    )
}
