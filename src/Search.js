import React, { useState } from 'react';
import { getPlaylistId } from './helperFunction';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
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
      <InputGroup className='mb-3' size='lg'>
        <FormControl
          placeholder='Youtube playlist URL goes here!'
          value={playlistURL}
          onChange={(e) => setURL(e.target.value)}
          aria-label='Youtube playlist URL goes here!'
          aria-describedby='basic-addon2'
        />
        <Button variant='secondary' onClick={handleSubmit}>
          Go!
        </Button>
      </InputGroup>
    </div>
  );
};

export default Search;
