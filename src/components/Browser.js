import React, { useState } from 'react';
import { Results } from './Results';

import { getAllData } from '../utils/axios';

export const Browser = () => {

    const [ searchForm, setSearchForm ] = useState({
        artist: '',
        album: '',
        track: ''
    });
    const [ disableButton, setDisableButton ] = useState(true);
    const [ spotifyData, setSpotifyData ] = useState([]);
    const [ type, setType ] = useState('');

    const { artist, album, track } = searchForm;

    /** 
        Controls when a text changes and enable/disable execution button
    */
    const handleChangeForm = ({target}) => {
        setSearchForm({
            ...searchForm,
            [target.name]: target.value
        });

        // Activate the seaching button if user enters some data
        if ( artist.length > 1 || album.length > 1 || track.length > 1 ) {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }

    /**
     * Executes the search, clean the form and search for the data
     */
    const onSubmitForm = (e) => {
        e.preventDefault();

        setSearchForm({
            artist: '',
            album: '',
            track: ''
        });
        setDisableButton(true);

        getAllData(searchForm).then(artistResponse => {     
            if ( artistResponse.data.artists ) {
                setSpotifyData( [artistResponse.data.artists.items] );
                setType('artist');
            } else if ( artistResponse.data.albums ) {
                setSpotifyData( [artistResponse.data.albums.items] );
                setType('album');
            } else if ( artistResponse.data.tracks ) {
                setSpotifyData( [artistResponse.data.tracks.items] );
                setType('track');
            }
        });
    }

    return (
        <div className="row justify-content-center">
        <div className="col-md-8">
             <div className="card">
                 <div className="card-body">
                     <h2 className="text-center mb-4 font-weight-bold">
                         Find by your preference
                     </h2>

                     {/* { alerta && <p className={alerta.classes}>{alerta.msg}</p>} */}

                     <form
                         onSubmit={ onSubmitForm }
                     >
                         <div className="form-group">
                             <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Artist"
                                 name="artist"
                                 value={artist}
                                 onChange={ handleChangeForm }
                                 autoComplete="off"                                
                             />
                         </div>

                         <div className="form-group">
                             <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Album"
                                 name="album"
                                 value={album}
                                 onChange={ handleChangeForm }
                                 autoComplete="off"                                
                             />
                         </div>

                         <div className="form-group">
                             <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Track"
                                 name="track"
                                 value={track}
                                 onChange={ handleChangeForm}
                                 autoComplete="off"                                
                             />
                         </div>
                         
                     </form>

                     {/* { cargando && <p>Cargando...</p>}
                     { error && <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p>} */}
                 </div>
             </div>
        </div>

        <Results
            spotifyData={spotifyData} 
            onSubmitForm={onSubmitForm} 
            disableButton={disableButton} 
            type={type}
        />
     </div>
    )
}
