import React from 'react'
import { Albums } from './albums/Albums'
import { Artists } from './artists/Artists'
import { Tracks } from './tracks/Tracks'

export const Results = ({spotifyData, onSubmitForm, disableButton, type}) => {

    return (
        <div className="col-md-8 results">
            <div className="card-body">
                <h2 className="mb-4 font-weight-bold">
                    Result List
                </h2>

                <div className="d-flex bd-highlight">
                <h3 className="p-2 w-100 bd-highlight font-weight-bold">
                    Artists
                </h3>

                <button 
                    type="button" 
                    className="btn btn-success p-2 flex-shrink-1 bd-highlight btn-sm"
                    onClick={onSubmitForm}
                    disabled={disableButton}
                >
                    Sort by popularity Ascending
                </button>
                </div>

                <div>
                    {
                        type === 'artist' &&
                            spotifyData.map( (items, idx) => ( 
                                <Artists 
                                    key={idx} 
                                    items={items} 
                                /> 
                            ))
                    }

                    {
                        type === 'album' &&
                            spotifyData.map( (items, idx) => ( 
                                <Albums 
                                    key={idx} 
                                    items={items} 
                                /> 
                            ))
                    }

                    {
                        type === 'track' &&
                            spotifyData.map( (items, idx) => ( 
                                <Tracks 
                                    key={idx} 
                                    items={items} 
                                /> 
                            ))
                    }
                </div>
            </div>
        </div>
    )
}
