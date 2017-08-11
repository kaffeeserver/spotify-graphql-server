import SpotifyWebApi from 'spotify-web-api-node';
<<<<<<< HEAD

const SpotifyClientConfig = process.env.HEROKU
    ? require('./spotifyClient.config.heroku')
    : require('./spotifyClient.config');
=======
import SpotifyClientConfig from '../clients/spotifyClient.config';
>>>>>>> 593dd54c0397e196e03d41faccb0a54205a5632f

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




