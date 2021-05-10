import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Link, useParams } from 'react-router-dom';
import { getArtistDetail } from '../../utils/axios';

export const Details = () => {

    const [artist, setArtist] = useState({
        name: '',
        urlImage: '',
        popularity: '',
        followers: ''
    });

    const { name, urlImage, popularity, followers } = artist;


    const {id} = useParams();

    useEffect( () => {
        getArtistDetail(id)
            .then( (res) => {
                const data = res.data;
                console.log(res.data)

                setArtist({
                    name: data.name,
                    urlImage: data.images[0].url,
                    popularity: data.popularity,
                    followers: data.followers.total
                });
            });
    }, []);

    return (
        <div>
            <Header />
            
            <div className="card results">
                <div className="card-header">
                    {name}
                </div>
                <img src={urlImage} className="card-img-top med-img" alt={name} />
                <div className="card-body">
                    <p className="card-text">Popularity: {popularity}</p>
                    <p className="card-text">Followers: {followers}</p>
                </div>
                <div className="d-grid gap-2 d-md-block">
                    <Link className="btn btn-primary" to="/">Go Back</Link>
                </div>
                
            </div>
        </div>
    )
}
