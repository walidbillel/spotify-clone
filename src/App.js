import React, { useEffect, useState } from 'react';
import Login from './Login';

import './App.css';
import { getTokenFromUrl } from './spotify';
import spotifyWebapi from 'spotify-web-api-js';

const spotify = new spotifyWebapi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log('🧑', user);
      });
    }

    console.log(`I have a token 👉 ${token}`);
  }, []);

  return (
    <div className="app">{token ? <h1>I'm logged in</h1> : <Login />}</div>
  );
}

export default App;
