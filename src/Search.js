import React, { useState } from 'react';
import { getPlaylistId } from './helperFunction';
import {Button, InputGroup, FormControl} from 'react-bootstrap';
const Search = ({ submitID }) => {
  const [playlistURL, setURL] = useState('');

  const handleSubmit = (e) => {
    console.log('Go button clicked!');
    const playlistID = getPlaylistId(playlistURL);
    console.log('playlistID', playlistID);
    return submitID(playlistID);
  };

  return (
    <div className='search-bar-container'>
      {/* <div className='row'>
        <div className='col-lg-8'>
          <div className='input-group input-group-lg'> */}
            {/* <input
              type='text'
              className='form-control'
              aria-label='Large'
              aria-describedby='inputGroup-sizing-sm'
              value={playlistURL}
              onChange={(e) => setURL(e.target.value)}
              placeholder='Youtube playlist URL goes here!'
            />
            <span className='input-group-btn'>
              <Button variant='secondary' type='submit' onClick={handleSubmit}>
                Go!
              </Button> */}

              <InputGroup className='mb-3' size='lg'>
                <FormControl
                  placeholder='Youtube playlist URL goes here!'
                  value={playlistURL}
                  onChange={(e) => setURL(e.target.value)}
                  aria-label='Youtube playlist URL goes here!'
                  aria-describedby='basic-addon2'
                />
                {/* <InputGroup.Append> */}
                  <Button variant='secondary' onClick={handleSubmit}>
                    Go!
                  </Button>
                {/* </InputGroup.Append> */}
              </InputGroup>
              {/* <button
                className='btn btn-default'
                type='submit'
                onClick={handleSubmit}
              >
                Go!
              </button> */}
            {/* </span> */}
          {/* </div>
        </div>
      </div> */}
    </div>
  );
};

export default Search;
