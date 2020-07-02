import React, { useState } from 'react';
import { getPlaylistId } from './helperFunction';
const Search = ({submitID}) => {

  const [ playlistURL, setURL ] = useState('');

  const handleSubmit = (e) => {
    console.log(e);
    submitID(getPlaylistId(playlistURL));
  }

  return (
    <div className='row'>
      <div className='col-lg-8'>
        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            value={playlistURL}
            onChange={(e) => setURL(e.target.value)}
            placeholder='Please enter Youtube playlistID'
          />
          <span className='input-group-btn'>
            <button
              className='btn btn-default'
              type='submit'
              onClick={handleSubmit}
            >
              Go!
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search;
