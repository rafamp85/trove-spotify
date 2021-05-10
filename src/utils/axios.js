import axios from 'axios'; 

const getToken = async( category ) => {

    const clientId = '9c51251b8794436499f8d92b5a1ff21b';
    const clientSecret = '67faeaf4c279476aa3f0dfc115b81b71';

    const res = await axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })

    return res;
};

export const getAllData = async (searchForm) => {
     return await getToken().then(tokenResponse => {      
        const token = tokenResponse.data.access_token;
        const { artist, album, track } = searchForm;

        try {
          if ( artist.trim() !== '' ) {
            return axios(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=5`, {
              method: 'GET',
              headers: { 'Authorization' : 'Bearer ' + token}
            })
          } else if ( album.trim() !== '' ) {
            return axios(`https://api.spotify.com/v1/search?q=${album}&type=album&limit=5`, {
              method: 'GET',
              headers: { 'Authorization' : 'Bearer ' + token}
            })
          } else if ( track.trim() !== '' ) {
            return axios(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=5`, {
              method: 'GET',
              headers: { 'Authorization' : 'Bearer ' + token}
            })
          }
        } catch (error) {
          throw( error );
        }
    })
}

export const getArtistDetail = async( id ) => {
  return await getToken().then(tokenResponse => {      
    const token = tokenResponse.data.access_token;

    try {
      return axios(`https://api.spotify.com/v1/artists/${id}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
      })
    } catch (error) {
      throw( error );
    }
})
}