export const authorizationEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUrl = 'http://localhost:3000/';

const clientId = '56bf51e2a2ba44f4bb4d71a1c2722e74';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

// Pulling the access token
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((init, item) => {
      let parts = item.split('=');
      init[parts[0]] = decodeURIComponent(parts[1]);

      return init;
    }, {});
};

export const loginUrl = `${authorizationEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
