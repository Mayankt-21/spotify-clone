import {create,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9a834c0180msh4e076f6d76de465p1bc1d4jsn1c12e5b1d97b',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://echo.paw.cloud/', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi'
    });