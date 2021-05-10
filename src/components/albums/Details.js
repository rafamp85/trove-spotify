import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Link, useParams } from 'react-router-dom';
import { getAlbumtDetail } from '../../utils/axios';

export const Details = () => {

    const [album, setAlbum] = useState({
        name: '',
        urlImage: '',
        tracks: []
    });

    const { name, urlImage, tracks } = album;

    const {id} = useParams();

    useEffect( () => {
        getAlbumtDetail(id)
            .then( (res) => {
                const data = res.data;

                setAlbum({
                    name: data.name,
                    urlImage: data.images[0].url,
                    tracks: data.tracks.items
                });
            });
    }, [id]);

    return (
        <div>
            <Header />
            
            <div className="card results">
                <div className="card-header text-center">
                    {name}
                </div>
                <img src={urlImage} className="card-img-top med-img" alt={name} />
                <div className="card-body">
                    <h5>Tracks List</h5>
                    {
                        tracks.map( (track, idx) => <p key={idx} className="card-text">{track.name}</p> )
                    }

                </div>
                <div className="d-grid gap-2 d-md-block">
                    <Link className="btn btn-primary" to="/">Go Back</Link>
                </div>
                
            </div>
        </div>
    )
}
