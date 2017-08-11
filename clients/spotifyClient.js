import SpotifyWebApi from 'spotify-web-api-node';

const SpotifyClientConfig = process.env.HEROKU
    ? require('./spotifyClient.config.heroku')
    : require('./spotifyClient.config');

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




