import React, { useState, useRef, useEffect } from 'react';
import { getPlaylistId } from './helperFunction';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import * as ga from './analytics';

const Search = ({ submitID }) => {
  const [playlistURL, setURL] = useState('');
  const mainRef = useRef(null);

  const handleSubmit = (e) => {
    const playlistID = getPlaylistId(playlistURL);
    ga.logEvent('PlaylistID submitted',playlistID);
    return submitID(playlistID);
  };

  useEffect(() => {
    ga.logPageView();
    mainRef.current.focus();
  }, [mainRef]);

  return (
    <div className='search-bar-container'>
      <InputGroup className='mb-3' size='lg'>
        <FormControl
          ref={mainRef}
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
