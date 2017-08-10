import SpotifyWebApi from 'spotify-web-api-node';
import SpotifyClientConfig from '../clients/spotifyClient.config';

module.exports = new Promise(function (resolve, reject) {
    var spotifyApi = new SpotifyWebApi(SpotifyClientConfig);
    spotifyApi.clientCredentialsGrant()
        .then((data) => {
            spotifyApi.setAccessToken(data.body.access_token);
            resolve(spotifyApi);
        });
}).catch((error) => {
    console.error(error);
});




